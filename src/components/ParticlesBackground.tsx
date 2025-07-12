import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "next-themes";     

export default function ParticlesBackground() {
  const { resolvedTheme } = useTheme();    

  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particleColor = resolvedTheme === "dark" ? "#FFC7B5" : "#E38A74";

  return (
    <Particles
      key={resolvedTheme}
      id="tsparticles"
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        fpsLimit: 60,
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: particleColor },     
          opacity: {
            value: resolvedTheme === "dark" ? 0.3 : 0.45, 
            random: { enable: true, minimumValue: 0.2 },
          },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 0.6, outModes: { default: "out" } },
        },
        detectRetina: true,
      }}
    />
  );
}

