import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";

function HeroTitle() {
  const LIMIT = 4;                             // continua ± 4 px
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const x = useSpring(mvX, { stiffness: 120, damping: 20 });
  const y = useSpring(mvY, { stiffness: 120, damping: 20 });
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const relX = ((e.clientX - r.left) / r.width) * 2 - 1;
    const relY = ((e.clientY - r.top) / r.height) * 2 - 1;
    mvX.set(Math.max(-1, Math.min(1, -relX)) * LIMIT);
    mvY.set(Math.max(-1, Math.min(1, -relY)) * LIMIT);
  }

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-start gap-0 mt-12
                 w-fit flex-none select-none cursor-default"
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={() => { mvX.set(0); mvY.set(0); }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      {/* título */}
      <Image
        src="/img/mainpp.png"
        alt="Paula Peixoto"
        width={600}
        height={230}
        priority
        className="w-[600px] h-auto object-contain"
        draggable={false}
      />

      {/* subtítulo menor e centrado */}
      <Image
        src="/img/underlinepp.png"
        alt="Cabeleireira"
        width={300}
        height={60}
        priority
        className="w-[300px] h-auto object-contain self-center -mt-1"
        draggable={false}
      />
    </motion.div>
  );
}





export default function Hero() {
  return (
    <header className="relative flex flex-col lg:flex-row w-full min-h-screen overflow-hidden">
      <ParticlesBackground />

      {/* coluna esquerda */}
      <div
        className="relative z-10 flex items-start justify-center
                   flex-1 lg:basis-6/12
                   bg-background/80 dark:bg-graydark/80 backdrop-blur-sm"
      >
        <HeroTitle />
      </div>

      {/* coluna direita (imagem) */}
      <div className="relative flex-1 lg:basis-5/12 overflow-hidden">
        <Image
          src="/img/homepic.png"
          alt="Paula Peixoto"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="object-cover object-[center_top] lg:object-center
                     scale-105 lg:scale-100"
        />
        <div className="absolute inset-0 bg-black/0 dark:bg-black/25 pointer-events-none" />
      </div>
    </header>
  );
}






