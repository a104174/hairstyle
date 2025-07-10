// src/components/Layout.tsx
import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { MouseTrail } from '@stichiboi/react-elegant-mouse-trail'  

/**
 * Wrapper global das páginas.
 * Adiciona parallax, rastro do cursor, navbar fixa
 * e footer no fim.
 */
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Camada de fundo animado */}
      <div className="fixed inset-0 -z-20 bg-animated dark:hidden" />

      {/* Rastro do cursor (continua) */}
      <MouseTrail
        strokeColor="#F688B9"
        lineWidthStart={16}
        lineDuration={0.4}
        lag={0.12}
      />

      <div className="relative min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  )
}



