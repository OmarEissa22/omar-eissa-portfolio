import { motion } from 'framer-motion'
import { experience } from '../../data/cv'

export default function Experience() {
  return (
    <section id="experience" style={{ padding: 'var(--section-py) var(--section-px)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>
            03 / experience
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.03em' }}>
            Where I've worked
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '7px',
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, var(--accent) 0%, var(--border) 40%, transparent 100%)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ position: 'relative' }}
              >
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: '-2rem',
                  top: '4px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: exp.featured ? 'var(--accent)' : 'var(--surface-2)',
                  border: `2px solid ${exp.featured ? 'var(--accent-glow)' : 'var(--border-light)'}`,
                  boxShadow: exp.featured ? '0 0 12px rgba(37,99,235,0.5)' : 'none',
                }} />

                <div style={{
                  background: 'var(--surface)',
                  border: `1px solid ${exp.featured ? 'rgba(37,99,235,0.35)' : 'var(--border)'}`,
                  borderRadius: '10px',
                  padding: '1.5rem',
                  boxShadow: exp.featured ? '0 0 20px rgba(37,99,235,0.08)' : 'none',
                }}>
                  {/* Role header */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: 'var(--text)',
                      letterSpacing: '-0.01em',
                    }}>
                      {exp.role}
                    </h3>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: exp.featured ? 'var(--accent-glow)' : 'var(--text-subtle)',
                      whiteSpace: 'nowrap',
                    }}>
                      {exp.period}
                    </span>
                  </div>

                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--accent-glow)', marginBottom: '0.2rem', fontWeight: 500 }}>
                    {exp.org}
                  </p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-subtle)', marginBottom: '1.1rem' }}>
                    {exp.type} · {exp.orgDetail}
                  </p>

                  {/* Bullets */}
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                        <span style={{ color: exp.featured ? 'var(--accent)' : 'var(--text-subtle)', marginTop: '0.15rem', flexShrink: 0 }}>▸</span>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
