import { useEffect, useState } from 'react'

export function useMouse() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) =>
      setCoords({ x: e.clientX, y: e.clientY })

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return coords
}
