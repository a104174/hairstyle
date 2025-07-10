import { motion, useMotionTemplate, useSpring } from 'framer-motion'
import { useMouse } from '@/hooks/useMouse'

export default function MouseParallax() {
  const { x, y } = useMouse()

  // Primavera para suavizar
  const springX = useSpring(x, { stiffness: 20, damping: 10 })
  const springY = useSpring(y, { stiffness: 20, damping: 10 })

  // Converte para valores de translate (-50 … 50)
  const translateX = useMotionTemplate`${springX} * 0.05px`
  const translateY = useMotionTemplate`${springY} * 0.05px`

  return (
    <motion.div
      style={{ translateX, translateY }}
      className="pointer-events-none fixed inset-0 z-[-1]"
    >
      {/* Exemplo simples – um gradiente em curva */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        className="opacity-20"
      >
        <path
          d="M0 600 Q800 200 1600 400"
          stroke="url(#grad)"
          strokeWidth="4"
          fill="none"
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ff" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}
