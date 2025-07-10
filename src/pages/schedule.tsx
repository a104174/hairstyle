import Layout from '@/components/Layout'

export default function Schedule() {
  return (
    <Layout>
      <section className="py-20 px-6 lg:px-16">
        <h2 className="text-3xl font-semibold mb-4 text-primary">Horário de Funcionamento</h2>
        <ul className="space-y-2">
          <li>Terças & Quintas – 19h às 22h</li>
          <li>Sábados – 14h às 20h</li>
          <li>Domingos (excecional) – manhã</li>
        </ul>

        <div className="mt-8 h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.322244040049!2d-8.671415424363975!3d41.476656971288705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd244e2db02a6deb%3A0xf799df709c455f97!2sR.%20das%20Mimosas%20113%2C%20Faria!5e1!3m2!1spt-PT!2spt!4v1752164338327!5m2!1spt-PT!2spt"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    </Layout>
  )
}

