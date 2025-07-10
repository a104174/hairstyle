import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evita mismatch: só montado no browser
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-full bg-primary/20 animate-pulse" />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="rounded-full p-2 hover:bg-primary/20 transition"
      aria-label="Theme toggle"
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  )
}

