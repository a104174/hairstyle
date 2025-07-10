import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="relative h-[60vh] bg-background">
        <div className="relative z-10 flex flex-col justify-center h-full px-6 lg:px-24">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary">
            Paula Peixoto
          </h1>
          <p className="mt-3 text-lg md:text-xl text-gray-800">
            Cabeleireira · Maquilhagem · Manicure · Pedicure · Extensões
          </p>
        </div>
      </div>
    </Layout>
  )
}






