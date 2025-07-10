import { useMouse } from '@/hooks/useMouse'
import {
  motion,
  useMotionValue,
  useSpring,
  MotionValue,
} from 'framer-motion'
import { useEffect } from 'react'

const DOTS = 150         // nº de círculos
const BASE = 20         // tamanho do primeiro círculo (px)

// Helper para gerar um par (xSpring, ySpring) a partir de duas motion values
function makeFollower(
  sourceX: MotionValue<number>,
  sourceY: MotionValue<number>,
  stiffness: number,
  damping: number
) {
  return {
    x: useSpring(sourceX, { stiffness, damping }),
    y: useSpring(sourceY, { stiffness, damping }),
  }
}

export default function CursorTrail() {
  const { x, y } = useMouse()

  // MotionValues que representam as coordenadas atuais do ponteiro
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  // Actualiza-os sempre que o rato se move
  useEffect(() => {
    cursorX.set(x)
    cursorY.set(y)
  }, [x, y, cursorX, cursorY])

  // Cria todos os seguidores (constante em todas as renderizações)
  const followers = Array.from({ length: DOTS }, (_, i) =>
   makeFollower(cursorX, cursorY,
     150 - i * 4,   // ↗ aumenta stiffness  → reage mais rápido
     10  + i * 1.5) // ↘ diminui damping   → menos “travão”
  )

  return (
    <>
      {followers.map(({ x: fx, y: fy }, i) => (
        <motion.div
          key={i}
          style={{
            translateX: fx,
            translateY: fy,
            width: BASE - i,
            height: BASE - i,
          }}
          className="pointer-events-none fixed top-0 left-0 -z-10 rounded-full bg-primary/70 opacity-80 blur-sm"
        />
      ))}
    </>
  )
}



