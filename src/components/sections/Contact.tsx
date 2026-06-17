import { motion } from 'framer-motion'
import { personal } from '../../data/cv'

const links = [
  { label: 'Email',    href: `mailto:${personal.email}`, display: personal.email,  icon: '✉' },
  { label: 'LinkedIn', href: personal.linkedin,           display: 'linkedin.com/in/omar-eissa-/', icon: '💼' },
  { label: 'GitHub',   href: personal.github,             display: 'github.com/OmarEissa21', icon: '⌥' },
  { label: 'Phone',    href: `tel:${personal.phone}`,     display: personal.phone, icon: '📞' },
]

export default function Contact() {
  return (
    <section id="contact" style={{ padding: 'var(--section-py) 1.5rem', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>
            04 / contact
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Let's talk
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '520px', margin: '0 auto 3rem' }}>
            I'm actively looking for graduate roles starting from July 2026 in AI engineering, full-stack development, or data engineering. If you're hiring or just want to connect — my inbox is open.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', textAlign: 'left' }}
        >
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '1rem 1.25rem',
                transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,99,235,0.15)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <span style={{ fontSize: '1.4rem' }}>{link.icon}</span>
              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-subtle)', marginBottom: '0.2rem', letterSpacing: '0.06em' }}>
                  {link.label.toUpperCase()}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  {link.display}
                </p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Location note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-subtle)', marginTop: '2.5rem' }}
        >
          📍 {personal.location} — {personal.locationNote}
        </motion.p>

        {/* Footer */}
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-subtle)', marginTop: '4rem', opacity: 0.6 }}>
          Built with React + Vite + TypeScript + Framer Motion · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  )
}
