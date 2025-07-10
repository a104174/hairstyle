// src/pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* Pré-carregar a fonte Inter */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
        {/* Meta básica */}
        <meta name="theme-color" content="#0f0f0f" />
      </Head>
      <body className="bg-surface text-white antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
