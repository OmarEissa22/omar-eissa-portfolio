import { useState } from 'react'
import { motion } from 'framer-motion'
import { bio, skills, education, type Skill } from '../../data/cv'

const categoryColors: Record<Skill['category'], { bg: string; border: string; text: string; label: string }> = {
  ai:       { bg: 'rgba(37,99,235,0.12)',   border: 'rgba(37,99,235,0.4)',   text: '#60A5FA', label: 'AI & ML' },
  frontend: { bg: 'rgba(16,185,129,0.10)',  border: 'rgba(16,185,129,0.35)', text: '#34D399', label: 'Frontend' },
  backend:  { bg: 'rgba(168,85,247,0.10)',  border: 'rgba(168,85,247,0.35)', text: '#C084FC', label: 'Backend' },
  data:     { bg: 'rgba(245,158,11,0.10)',  border: 'rgba(245,158,11,0.35)', text: '#FCD34D', label: 'Data Eng' },
  infra:    { bg: 'rgba(239,68,68,0.10)',   border: 'rgba(239,68,68,0.35)',  text: '#F87171', label: 'Infra' },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}
const itemVariants = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

export default function About() {
  const [hovered, setHovered] = useState<Skill | null>(null)

  return (
    <section id="about" style={{ padding: 'var(--section-py) 1.5rem' }}>
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
            01 / about
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.03em' }}>
            A bit about me
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          {/* Bio + Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--text-muted)', whiteSpace: 'pre-line', marginBottom: '2.5rem' }}>
              {bio}
            </p>

            {/* Education card */}
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '1.25rem 1.5rem',
            }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-subtle)', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                EDUCATION
              </p>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1rem', color: 'var(--text)', marginBottom: '0.25rem' }}>
                {education.degree}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--accent-glow)', marginBottom: '0.25rem' }}>
                {education.class} · {education.institution}
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-subtle)', marginBottom: '1rem' }}>
                {education.period}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {education.highlights.map(h => (
                  <div key={h.module} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>{h.module}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#34D399', fontWeight: 500 }}>{h.grade}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tech stack grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-subtle)', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              TECH STACK — hover a skill to see where I used it
            </p>

            {/* Category legend */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
              {Object.entries(categoryColors).map(([key, val]) => (
                <span
                  key={key}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '4px',
                    background: val.bg,
                    border: `1px solid ${val.border}`,
                    color: val.text,
                  }}
                >
                  {val.label}
                </span>
              ))}
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}
            >
              {skills.map(skill => {
                const colors = categoryColors[skill.category]
                const isHovered = hovered?.name === skill.name
                return (
                  <motion.button
                    key={skill.name}
                    variants={itemVariants}
                    onMouseEnter={() => setHovered(skill)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '6px',
                      border: `1px solid ${isHovered ? colors.border : 'var(--border)'}`,
                      background: isHovered ? colors.bg : 'var(--surface)',
                      color: isHovered ? colors.text : 'var(--text-muted)',
                      cursor: 'default',
                      transition: 'all 0.18s ease',
                      transform: isHovered ? 'translateY(-2px)' : 'none',
                      boxShadow: isHovered ? `0 4px 12px ${colors.bg}` : 'none',
                    }}
                  >
                    {skill.name}
                  </motion.button>
                )
              })}
            </motion.div>

            {/* Hover tooltip */}
            <motion.div
              animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
              transition={{ duration: 0.2 }}
              style={{
                marginTop: '1.25rem',
                minHeight: '4rem',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '0.85rem 1rem',
                pointerEvents: 'none',
              }}
            >
              {hovered && (
                <>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-subtle)', marginBottom: '0.4rem', letterSpacing: '0.06em' }}>
                    USED IN
                  </p>
                  {hovered.usedIn.map(u => (
                    <p key={u} style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      → {u}
                    </p>
                  ))}
                </>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
