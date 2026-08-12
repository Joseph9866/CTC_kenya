import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDonate } from './DonateContext'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Impact', path: '/impact' },
  { name: 'Get Involved', path: '/donate' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { openDonate } = useDonate()

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="bg-white border-b border-outline-variant fixed top-0 w-full z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-16 md:h-24 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3">
          <img
            src="/CTC_logo.png"
            alt="CTC-Kenya logo"
            className="h-12 md:h-20 w-auto"
          />
          <span className="font-display text-xl md:text-3xl font-bold text-primary">
            CTC-Kenya
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[16px] transition-colors ${
                isActive(link.path)
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Donate Button */}
        <button
          onClick={openDonate}
          className="hidden md:inline-block bg-primary text-white px-6 py-2 rounded text-xs font-semibold uppercase tracking-wider hover:bg-primary-dark transition-colors cursor-pointer"
        >
          Donate
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-outline-variant px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-[16px] ${
                isActive(link.path)
                  ? 'text-primary font-semibold'
                  : 'text-on-surface-variant'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => { openDonate(); setIsOpen(false) }}
            className="block mt-4 w-full bg-primary text-white text-center px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider cursor-pointer"
          >
            Donate
          </button>
        </div>
      )}
    </nav>
  )
}