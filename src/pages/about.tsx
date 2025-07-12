// src/pages/about.tsx
import Layout from '@/components/Layout'

export default function About() {
  return (
    <Layout>
      <section className="py-24 px-6 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-primary mb-12">
          Sobre Mim
        </h2>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Texto principal */}
          <div className="space-y-6 text-gray-800 leading-relaxed">
            <p>
              Olá! Sou a <strong>Paula Peixoto</strong> e há mais de&nbsp;
              <strong>20 anos</strong> dedico-me a transformar a autoestima das
              minhas clientes através da beleza. Comecei como cabeleireira
              júnior, mas rapidamente percebi que queria oferecer uma
              experiência completa &mdash; do cabelo às unhas, passando pela
              depilação e maquilhagem.
            </p>

            <p>
              Ao longo destas duas décadas, especializei-me em <em>cortes
              femininos</em>, técnicas avançadas de <em>coloração</em> e em
              <em> penteados de noiva</em>. Adoro acompanhar o dia de casamento
              ou batizado, garantindo que cada detalhe do look fica perfeito.
            </p>

            <p>
              Além dos serviços no salão, sou <strong>revendedora Avon</strong>
              &nbsp;e já representei a&nbsp;
              <strong>Mary Kay</strong>. Seleciono os melhores produtos para que
              possas manter os cuidados em casa com a mesma qualidade que
              encontras no meu espaço.
            </p>

            <p>
              O meu compromisso é simples: que saias sempre confiante,
              elegante e com um sorriso no rosto. ✨
            </p>
          </div>

          {/* Cartão de destaques */}
          <div className="bg-surface p-8 rounded-2xl shadow-lg h-fit">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-3xl font-bold text-primary">20+</span>
                <p className="text-gray-700">
                  Anos de experiência em cabelos &amp; beleza
                </p>
              </li>

              <li className="flex items-start gap-4">
                <span className="text-3xl font-bold text-primary">1000+</span>
                <p className="text-gray-700">
                  Noivas, madrinhas e convidadas atendidas
                </p>
              </li>

              <li className="flex items-start gap-4">
                <span className="text-3xl font-bold text-primary">
                  Revenda&nbsp;
                </span>
                <p className="text-gray-700">
                  Produtos <strong>Avon</strong> &amp; experiência Mary Kay
                </p>
              </li>

              <li className="flex items-start gap-4">
                <span className="text-3xl font-bold text-primary">Serviços</span>
                <p className="text-gray-700">
                  Cabelo · Unhas · Depilação · Maquilhagem
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}


