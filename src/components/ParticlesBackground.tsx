import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const isDark = document.documentElement.classList.contains('dark');

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
            grab: {
              distance: 140,
              links: {
                opacity: 0.5
              }
            }
          },
        },
        // particles: {
        //   color: {
        //     value: isDark ? "#4B5563" : "#9CA3AF",
        //   },
        //   links: {
        //     color: isDark ? "#4B5563" : "#9CA3AF",
        //     distance: 150,
        //     enable: true,
        //     opacity: 0.3,
        //     width: 1,
        //   },
        //   move: {
        //     enable: true,
        //     speed: 2,
        //     direction: "none",
        //     random: false,
        //     straight: false,
        //     outModes: {
        //       default: "bounce",
        //     },
        //     attract: {
        //       enable: true,
        //       rotateX: 600,
        //       rotateY: 1200
        //     }
        //   },
        //   number: {
        //     density: {
        //       enable: true,
        //       area: 800,
        //     },
        //     value: 80,
        //   },
        //   opacity: {
        //     value: 0.5,
        //     animation: {
        //       enable: true,
        //       speed: 1,
        //       minimumValue: 0.1
        //     }
        //   },
        //   shape: {
        //     type: "circle",
        //   },
        //   size: {
        //     value: { min: 1, max: 3 },
        //     animation: {
        //       enable: true,
        //       speed: 2,
        //       minimumValue: 0.1
        //     }
        //   },
        // },
        detectRetina: true,
      }}
    />
  );
}