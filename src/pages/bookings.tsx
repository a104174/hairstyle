import Layout from '@/components/Layout'

export default function Bookings() {
  return (
    <Layout>
      <section className="py-20 px-6 lg:px-16">
        <h2 className="text-3xl font-semibold mb-6 text-primary">Marcações</h2>
        <form className="max-w-md space-y-4">
          <input type="text" placeholder="Nome completo" className="w-full p-3 border rounded" />
          <input type="tel" placeholder="Telefone/WhatsApp" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
          <textarea placeholder="Serviço desejado" className="w-full p-3 border rounded" />
          <button className="w-full py-3 bg-primary text-white rounded">Enviar Pedido</button>
        </form>
      </section>
    </Layout>
  )
}
