import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personal } from '../../data/cv'
import { useIsMobile } from '../../hooks/useIsMobile'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile(768)

  useEffect(() => {
    const root = document.getElementById('root') ?? window
    const onScroll = () => {
      const scrollTop = root instanceof Element ? root.scrollTop : root.scrollY
      setScrolled(scrollTop > 40)
    }
    root.addEventListener('scroll', onScroll, { passive: true })
    return () => root.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
        background: scrolled ? 'rgba(9,9,11,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <nav style={{ maxWidth: '1100px', margin: '0 auto', padding: isMobile ? '0 1rem' : '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: isMobile ? '52px' : '64px' }}>
        {/* Logo */}
        <a href="#hero" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--text)', letterSpacing: '-0.02em', whiteSpace: 'nowrap', flexShrink: 0 }}>
          <span style={{ color: 'var(--accent)' }}>{'<'}</span>
          {'OE'}
          <span style={{ color: 'var(--accent)' }}>{'/>'}</span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: isMobile ? 'none' : 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-muted)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — desktop only */}
        {!isMobile && <a
          href={`mailto:${personal.email}`}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            fontWeight: 500,
            padding: '0.45rem 1.1rem',
            borderRadius: '6px',
            background: 'var(--accent)',
            color: '#fff',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Hire me
        </a>}

        {/* Mobile hamburger */}
        {isMobile && <button
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', padding: '0.25rem' }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>}
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}
          >
            <ul style={{ listStyle: 'none', margin: 0, padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {links.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontSize: '1rem' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${personal.email}`} style={{ color: 'var(--accent)', fontWeight: 500 }}>
                  Hire me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
