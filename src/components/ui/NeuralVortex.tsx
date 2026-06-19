import { useEffect, useRef } from 'react'

export default function NeuralVortex() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointer   = useRef({ x: 0, y: 0, tX: 0, tY: 0 })
  const rafRef    = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = (canvas.getContext('webgl') ?? canvas.getContext('experimental-webgl')) as WebGLRenderingContext
    if (!gl) return

    const vsSource = `
      precision mediump float;
      attribute vec2 a_position;
      varying vec2 vUv;
      void main() {
        vUv = .5 * (a_position + 1.);
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `

    const fsSource = `
      precision mediump float;
      varying vec2 vUv;
      uniform float u_time;
      uniform float u_ratio;
      uniform vec2 u_pointer_position;
      uniform float u_scroll_progress;

      vec2 rotate(vec2 uv, float th) {
        return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
      }

      float neuro_shape(vec2 uv, float t, float p) {
        vec2 sine_acc = vec2(0.);
        vec2 res = vec2(0.);
        float scale = 8.;
        for (int j = 0; j < 15; j++) {
          uv = rotate(uv, 1.);
          sine_acc = rotate(sine_acc, 1.);
          vec2 layer = uv * scale + float(j) + sine_acc - t;
          sine_acc += sin(layer) + 2.4 * p;
          res += (.5 + .5 * cos(layer)) / scale;
          scale *= (1.2);
        }
        return res.x + res.y;
      }

      void main() {
        vec2 uv = .5 * vUv;
        uv.x *= u_ratio;
        vec2 pointer = vUv - u_pointer_position;
        pointer.x *= u_ratio;
        float p = clamp(length(pointer), 0., 1.);
        p = .5 * pow(1. - p, 2.);
        float t = .001 * u_time;
        float noise = neuro_shape(uv, t, p);
        noise = 1.2 * pow(noise, 3.);
        noise += pow(noise, 10.);
        noise = max(.0, noise - .5);
        noise *= (1. - length(vUv - .5));
        vec3 color = vec3(0.04, 0.18, 0.58);
        color = mix(color, vec3(0.10, 0.45, 1.0), 0.32 + 0.16 * sin(2.0 * u_scroll_progress + 1.2));
        color += vec3(0.0, 0.10, 0.55) * sin(2.0 * u_scroll_progress + 1.5);
        color = color * noise;
        gl_FragColor = vec4(color, noise * 0.92);
      }
    `

    function compileShader(source: string, type: number): WebGLShader | null {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader error:', gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const vertexShader   = compileShader(vsSource, gl.VERTEX_SHADER)
    const fragmentShader = compileShader(fsSource, gl.FRAGMENT_SHADER)
    if (!vertexShader || !fragmentShader) return

    const program = gl.createProgram()!
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program))
      return
    }
    gl.useProgram(program)

    // Full-screen quad
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1])
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

    const posLoc = gl.getAttribLocation(program, 'a_position')
    gl.enableVertexAttribArray(posLoc)
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

    // Enable alpha blending
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    const uTime      = gl.getUniformLocation(program, 'u_time')
    const uRatio     = gl.getUniformLocation(program, 'u_ratio')
    const uPointer   = gl.getUniformLocation(program, 'u_pointer_position')
    const uScroll    = gl.getUniformLocation(program, 'u_scroll_progress')

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5)
      canvas.width  = window.innerWidth  * dpr
      canvas.height = window.innerHeight * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform1f(uRatio, canvas.width / canvas.height)
    }
    resize()
    window.addEventListener('resize', resize)

    const render = () => {
      if (!document.hidden) {
        pointer.current.x += (pointer.current.tX - pointer.current.x) * 0.2
        pointer.current.y += (pointer.current.tY - pointer.current.y) * 0.2

        gl.uniform1f(uTime, performance.now())
        gl.uniform2f(uPointer,
          pointer.current.x / window.innerWidth,
          1 - pointer.current.y / window.innerHeight,
        )
        gl.uniform1f(uScroll, window.pageYOffset / (2 * window.innerHeight))
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      }
      rafRef.current = requestAnimationFrame(render)
    }
    render()

    const onMouseMove = (e: PointerEvent) => {
      pointer.current.tX = e.clientX
      pointer.current.tY = e.clientY
    }
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        pointer.current.tX = e.touches[0].clientX
        pointer.current.tY = e.touches[0].clientY
      }
    }
    window.addEventListener('pointermove', onMouseMove)
    window.addEventListener('touchmove', onTouchMove)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      gl.deleteProgram(program)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.9,
      }}
    />
  )
}
