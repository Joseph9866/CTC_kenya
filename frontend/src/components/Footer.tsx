import { Link, useLocation } from 'react-router-dom'

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Impact', path: '/impact' },
  { name: 'Get Involved', path: '/donate' },
  { name: 'Contact', path: '/contact' },
]

export default function Footer() {
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <footer className="bg-primary text-white w-full py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="font-display text-xl font-bold text-white">
            CTC-Kenya
          </div>
          <p className="text-white/80 max-w-xs text-[16px] leading-6">
            © 2024 CTC-Kenya. Together, we can mentor, empower, and expose communities to opportunities that transform lives.
          </p>
        </div>
        <div className="md:col-span-8 flex flex-wrap gap-x-12 gap-y-4 md:justify-end">
          {footerLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[16px] transition-colors ${
                isActive(link.path)
                  ? 'text-accent font-bold'
                  : 'text-white/80 hover:text-accent'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}