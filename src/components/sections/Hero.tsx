import { motion } from 'framer-motion'
import { personal, roles } from '../../data/cv'
import { useTypewriter } from '../../hooks/useTypewriter'

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section
      id="hero"
      style={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '0 1.5rem',
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
            padding: '12px 16px',
            background: 'var(--surface-2)',
            borderBottom: '1px solid var(--border)',
          }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFBD2E' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-subtle)', marginLeft: '8px' }}>
              omar@portfolio ~ %
            </span>
          </div>

          {/* Terminal body */}
          <div style={{ padding: '2rem 2rem 2.5rem' }}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}
            >
              <span style={{ color: 'var(--accent)' }}>$ </span>whoami
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: 'var(--text)',
                marginBottom: '0.75rem',
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
                fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                color: 'var(--accent-glow)',
                marginBottom: '2rem',
                minHeight: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '2px',
              }}
            >
              <span style={{ color: 'var(--text-muted)' }}>role: </span>
              <span style={{ color: 'var(--accent-glow)' }}>&quot;{typed}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '1.2em',
                  background: 'var(--accent)',
                  marginLeft: '1px',
                  animation: 'blink 1s step-end infinite',
                }}
              />
              <span style={{ color: 'var(--accent-glow)' }}>&quot;</span>
            </motion.div>

            {/* Location + status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}
            >
              {[
                { icon: '📍', text: `${personal.location} — ${personal.locationNote}` },
                { icon: '🎓', text: 'Graduating July 2026' },
                { icon: '🇬🇧', text: 'Right to work in UK' },
              ].map(item => (
                <span
                  key={item.text}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  {item.icon} {item.text}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.4 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}
            >
              <a
                href="#projects"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  padding: '0.65rem 1.5rem',
                  borderRadius: '8px',
                  background: 'var(--accent)',
                  color: '#fff',
                  transition: 'opacity 0.2s, transform 0.2s',
                  display: 'inline-block',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none' }}
              >
                View my work
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  padding: '0.65rem 1.5rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-muted)',
                  background: 'transparent',
                  transition: 'border-color 0.2s, color 0.2s',
                  display: 'inline-block',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--text)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-muted)' }}
              >
                GitHub ↗
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  padding: '0.65rem 1.5rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-muted)',
                  background: 'transparent',
                  transition: 'border-color 0.2s, color 0.2s',
                  display: 'inline-block',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--text)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-muted)' }}
              >
                LinkedIn ↗
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}
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
