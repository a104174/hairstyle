import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  const services = [
    "Cabeleireira",
    "Maquilhagem",
    "Manicure",
    "Pedicure",
    "Extensões",
  ];

  return (
    <Layout>
      {/* partículas de fundo (fica atrás de tudo) */}
      <ParticlesBackground />

      {/* HERO ------------------------------------------------------- */}
      <header className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 lg:px-24 pt-24 lg:pt-36">
        {/* bloco esquerdo: nome + serviços */}
        <div>
          {/* Nome com fade-in */}
          <h1 className="branding-heading">Paula&nbsp;Peixoto</h1>

          {/* Lista de serviços com slide-in em cascata */}
          <ul className="services-list mt-6">
            {services.map((srv, i) => (
              <motion.li
                key={srv}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + i * 0.15,
                  duration: 0.7,
                  ease: "easeOut",
                }}
              >
                {srv}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* bloco direito: padrão decorativo para preencher o espaço */}
        <div className="hidden lg:block relative w-64 h-64 mt-12 lg:mt-0">
          <div className="absolute inset-0 bg-hero-deco bg-contain bg-center opacity-15" />
        </div>
      </header>
    </Layout>
  );
}







