// src/pages/about.tsx
import Layout from '@/components/Layout'

export default function About() {
  return (
    <Layout>
      <section className="py-20 px-6 lg:px-16">
        <h2 className="text-3xl font-semibold mb-4 text-primary">Sobre Mim</h2>
        <p className="text-gray-800">
          Olá, sou a Paula Peixoto, especialista em cuidados de beleza...
        </p>
      </section>
    </Layout>
  )
}

