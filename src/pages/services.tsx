import Layout from '@/components/Layout'

const services = [
  { title: 'Cortes Femininos', desc: 'Aparos, styling e tendências atuais.' },
  { title: 'Coloração', desc: 'Mechas, balayage, reflexos e mais.' },
  { title: 'Manicure & Pedicure', desc: 'Unhas de gel e cuidados completos.' },
  { title: 'Extensões', desc: 'Cabelo e cílios, qualidade premium.' },
  { title: 'Penteados de Noivas', desc: 'Elegância para o seu dia especial.' },
]

export default function Services() {
  return (
    <Layout>
      <section className="py-24 px-6 lg:px-24 text-center">
        {/* heading centralizado, fonte display e rosa-claro */}
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-12">
          Serviços
        </h2>

        {/* grelha responsiva */}
        <div className="grid gap-10 sm:grid-cols-2">
          {services.map(({ title, desc }) => (
            <div
              key={title}
              className="bg-surface rounded-2xl shadow-lg p-8 text-left hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
              <p className="text-gray-800">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

