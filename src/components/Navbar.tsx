import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import ThemeToggle from './ThemeToggle'

const routes = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Sobre mim' },
  { href: '/services', label: 'Serviços' },
  { href: '/bookings', label: 'Marcações' },
  { href: '/gallery', label: 'Galeria' },
  { href: '/schedule', label: 'Horário' },
]

export default function Navbar() {
  const { pathname } = useRouter()
  return (
    <header className="flex justify-between items-center py-4 px-6 lg:px-16 bg-background/80 backdrop-blur-md dark:bg-gray-800 sticky top-0 z-50 shadow-sm">
      <Link href="/" className="text-3xl font-extrabold text-primary">P</Link>
      <nav className="flex gap-4">
        {routes.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              'px-3 py-1 rounded-md text-gray-700 dark:text-gray-100 hover:text-primary',
              pathname === href && 'bg-primary/90 text-white'
            )}
          >
            {label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  )
}


