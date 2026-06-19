import { motion } from 'framer-motion'
import { projects } from '../../data/cv'

export default function Projects() {
  return (
    <section id="projects" style={{ padding: 'var(--section-py) var(--section-px)', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>
            02 / projects
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.03em' }}>
            Things I've built
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: 'var(--bg)',
                border: `1px solid ${project.featured ? 'rgba(37,99,235,0.4)' : 'var(--border)'}`,
                borderRadius: '12px',
                padding: 'clamp(1.1rem, 4vw, 2rem)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: project.featured ? 'var(--glow)' : 'none',
              }}
            >
              {/* Featured accent bar */}
              {project.featured && (
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, var(--accent), var(--accent-glow))',
                }} />
              )}

              {/* Header */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: project.featured ? '1.5rem' : '1.2rem',
                      fontWeight: 700,
                      color: 'var(--text)',
                      letterSpacing: '-0.02em',
                    }}>
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '4px',
                        background: 'rgba(37,99,235,0.15)',
                        border: '1px solid rgba(37,99,235,0.4)',
                        color: 'var(--accent-glow)',
                        letterSpacing: '0.06em',
                      }}>
                        FEATURED
                      </span>
                    )}
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    {project.subtitle} · <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>{project.period}</span>
                  </p>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    padding: '0.4rem 0.9rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border-light)',
                    color: 'var(--text-muted)',
                    transition: 'border-color 0.2s, color 0.2s',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--text)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-muted)' }}
                >
                  GitHub ↗
                </a>
              </div>

              {/* Summary */}
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '1.25rem',
                maxWidth: '780px',
              }}>
                {project.summary}
              </p>

              {/* Bullets */}
              {project.featured && (
                <ul style={{ listStyle: 'none', margin: '0 0 1.5rem', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {project.bullets.map((b, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + j * 0.08 }}
                      style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}
                    >
                      <span style={{ color: 'var(--accent)', marginTop: '0.15rem', flexShrink: 0 }}>▸</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{b}</span>
                    </motion.li>
                  ))}
                </ul>
              )}

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '5px',
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-subtle)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
