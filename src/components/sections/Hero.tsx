import { motion } from 'framer-motion'
import { personal, roles } from '../../data/cv'
import { useTypewriter } from '../../hooks/useTypewriter'
import { useIsMobile } from '../../hooks/useIsMobile'

export default function Hero() {
  const typed = useTypewriter(roles)
  const isMobile = useIsMobile()

  return (
    <section
      id="hero"
      style={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: isMobile ? '80px 1rem 2rem' : '0 1.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Aurora background */}
      <div className="aurora-bg" />

      {/* Subtle grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        opacity: 0.25,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '800px', width: '100%', position: 'relative', zIndex: 1 }}>
        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {/* Terminal title bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 14px',
            background: 'var(--surface-2)',
            borderBottom: '1px solid var(--border)',
          }}>
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F57', flexShrink: 0 }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FFBD2E', flexShrink: 0 }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28C840', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-subtle)', marginLeft: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              omar@portfolio ~ %
            </span>
          </div>

          {/* Terminal body */}
          <div style={{ padding: isMobile ? '1.25rem 1.1rem 1.75rem' : '2rem 2rem 2.5rem' }}>
            {/* git blame command */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}
            >
              <span style={{ color: 'var(--accent)' }}>$ </span>git blame omar-eissa
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: isMobile ? 'clamp(2rem, 10vw, 2.8rem)' : 'clamp(2.2rem, 6vw, 3.8rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: 'var(--text)',
                marginBottom: '0.65rem',
                lineHeight: 1.1,
              }}
            >
              {personal.name}
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: isMobile ? 'clamp(0.82rem, 3.5vw, 1rem)' : 'clamp(1rem, 2.5vw, 1.3rem)',
                color: 'var(--accent-glow)',
                marginBottom: '1.75rem',
                minHeight: '1.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '2px',
                flexWrap: 'nowrap',
                overflow: 'hidden',
              }}
            >
              <span style={{ color: 'var(--text-muted)', flexShrink: 0 }}>role: </span>
              <span style={{ color: 'var(--accent-glow)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>&quot;{typed}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '1.1em',
                  background: 'var(--accent)',
                  marginLeft: '1px',
                  flexShrink: 0,
                  animation: 'blink 1s step-end infinite',
                }}
              />
              <span style={{ color: 'var(--accent-glow)', flexShrink: 0 }}>&quot;</span>
            </motion.div>

            {/* git blame lines */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
              {[
                { hash: 'a3f2c9e', time: '22 yrs ago', msg: 'initialized: Cairo, Egypt 🇪🇬', delay: 0.9 },
                { hash: 'b8d4f1c', time: '2022',       msg: 'enrolled: BSc CS @ Huddersfield 🎓', delay: 1.05 },
                { hash: 'e7c2a08', time: 'present',    msg: 'graduation pending... building AI in the meantime ⚡', delay: 1.2 },
              ].map(line => (
                <motion.div
                  key={line.hash}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: line.delay, duration: 0.4 }}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: isMobile ? '0.72rem' : '0.8rem',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: isMobile ? '0.4rem' : '0.65rem',
                    flexWrap: isMobile ? 'wrap' : 'nowrap',
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>{line.hash}</span>
                  <span style={{ color: 'var(--text-subtle)', flexShrink: 0 }}>
                    (Omar Eissa, {line.time})
                  </span>
                  <span style={{ color: 'var(--text-muted)' }}>— {line.msg}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.4 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.65rem',
              }}
            >
              {[
                { label: 'View my work', href: '#projects', primary: true },
                { label: 'GitHub ↗', href: personal.github, primary: false, external: true },
                { label: 'LinkedIn ↗', href: personal.linkedin, primary: false, external: true },
              ].map(btn => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target={btn.external ? '_blank' : undefined}
                  rel={btn.external ? 'noreferrer' : undefined}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: btn.primary ? 600 : 500,
                    fontSize: isMobile ? '0.88rem' : '0.95rem',
                    padding: isMobile ? '0.6rem 1.1rem' : '0.65rem 1.5rem',
                    borderRadius: '8px',
                    background: btn.primary ? 'var(--accent)' : 'transparent',
                    border: btn.primary ? 'none' : '1px solid var(--border-light)',
                    color: btn.primary ? '#fff' : 'var(--text-muted)',
                    transition: 'opacity 0.2s, transform 0.2s, border-color 0.2s, color 0.2s',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                  onMouseEnter={e => {
                    if (btn.primary) { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)' }
                    else { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--text)' }
                  }}
                  onMouseLeave={e => {
                    if (btn.primary) { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none' }
                    else { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-muted)' }
                  }}
                >
                  {btn.label}
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: isMobile ? '2rem' : '3rem' }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            style={{ color: 'var(--text-subtle)', fontSize: '1.2rem' }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  )
}
