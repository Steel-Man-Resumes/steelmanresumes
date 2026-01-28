'use client'

import { useEffect, useState, useCallback } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { loadEmittersPlugin } from '@tsparticles/plugin-emitters'
import type { ISourceOptions, Container } from '@tsparticles/engine'

export default function TMGSignatureBloom() {
  const [init, setInit] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [particlesContainer, setParticlesContainer] = useState<Container | undefined>()

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
      await loadEmittersPlugin(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = useCallback(async (container?: Container) => {
    setParticlesContainer(container)
    // Start paused on desktop, play on mobile
    if (window.innerWidth >= 640) {
      container?.pause()
    }
  }, [])

  const handleMouseEnter = () => {
    if (window.innerWidth >= 640) {
      setIsHovered(true)
      particlesContainer?.play()
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth >= 640) {
      setIsHovered(false)
      setTimeout(() => {
        if (window.innerWidth >= 640) {
          particlesContainer?.pause()
        }
      }, 800)
    }
  }

  const particlesConfig: ISourceOptions = {
    fullScreen: { enable: false },
    background: { color: 'transparent' },
    fpsLimit: 30,
    particles: {
      number: { value: 0 },
      color: {
        value: ['#00FFFF', '#FF00C8', '#FFFFFF']
      },
      shape: { type: 'circle' },
      opacity: {
        value: { min: 0.3, max: 0.7 },
        animation: {
          enable: true,
          speed: 0.5,
          sync: false,
          destroy: 'min'
        }
      },
      size: {
        value: { min: 1, max: 3 },
        animation: {
          enable: true,
          speed: 2,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: { min: 1, max: 2.5 },
        direction: 'top',
        random: true,
        straight: false,
        outModes: { default: 'destroy', bottom: 'none' }
      },
      life: {
        duration: { sync: false, value: { min: 2, max: 3.5 } },
        count: 1
      },
      wobble: {
        enable: true,
        distance: 8,
        speed: 5
      }
    },
    emitters: {
      position: { x: 50, y: 60 },
      rate: { delay: 0.08, quantity: 1 },
      size: { width: 30, height: 5 },
      life: { duration: 0, count: 0 }
    },
    detectRetina: true
  }

  return (
    <div
      className="tmg-signature-bloom-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <style jsx>{`
        .tmg-signature-bloom-wrapper {
          position: relative;
          display: inline-block;
          padding: 1rem 2rem;
          cursor: pointer;
        }

        .tmg-bloom-backdrop {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150px;
          height: 150px;
          background: radial-gradient(
            ellipse at center,
            rgba(0, 255, 255, 0.08) 0%,
            rgba(255, 0, 200, 0.05) 30%,
            transparent 60%
          );
          opacity: 0;
          transition: opacity 0.6s ease;
          pointer-events: none;
          z-index: 0;
          filter: blur(20px);
        }

        .tmg-signature-bloom-wrapper:hover .tmg-bloom-backdrop {
          opacity: 0.8;
        }

        .tmg-particles-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 150px;
          pointer-events: none;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .tmg-signature-bloom-wrapper:hover .tmg-particles-container {
          opacity: 1;
        }

        .tmg-logo-wrapper {
          position: relative;
          z-index: 2;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .tmg-logo-glow {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tmg-logo {
          width: 60px;
          height: 60px;
          object-fit: contain;
          transform: scale(0.5);
          filter: grayscale(100%) brightness(0.3);
          opacity: 0.2;
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .tmg-signature-bloom-wrapper:hover .tmg-logo {
          transform: scale(1);
          filter: grayscale(0%) brightness(1) drop-shadow(0 0 20px rgba(0, 255, 255, 0.6));
          opacity: 1;
        }

        .tmg-logo-glow::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(0, 255, 255, 0.8) 0%,
            rgba(0, 212, 255, 0.4) 40%,
            transparent 70%
          );
          filter: blur(8px);
          opacity: 0;
          transition: all 0.8s ease;
          pointer-events: none;
        }

        .tmg-signature-bloom-wrapper:hover .tmg-logo-glow::before {
          opacity: 0.8;
          width: 70px;
          height: 70px;
          animation: tmg-pulse-cyan 2s ease-in-out infinite;
        }

        .tmg-logo-glow::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 0, 200, 0.3) 0%,
            rgba(200, 0, 150, 0.2) 40%,
            transparent 70%
          );
          filter: blur(15px);
          opacity: 0;
          transition: all 0.8s ease;
          pointer-events: none;
        }

        .tmg-signature-bloom-wrapper:hover .tmg-logo-glow::after {
          opacity: 0.7;
          width: 140px;
          height: 140px;
          animation: tmg-pulse-magenta 2.5s ease-in-out infinite;
        }

        .tmg-text {
          font-size: 0.75rem;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.15);
          transform: translateY(-5px) scale(0.9);
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          transition-delay: 0.1s;
        }

        .tmg-signature-bloom-wrapper:hover .tmg-text {
          transform: translateY(0) scale(1);
          opacity: 1;
          color: rgba(255, 255, 255, 0.6);
        }

        .tmg-text a {
          color: inherit;
          text-decoration: none;
          transition: all 0.4s ease;
        }

        .tmg-signature-bloom-wrapper:hover .tmg-text a {
          background: linear-gradient(90deg, #00FFFF, #FF00C8, #00FFFF);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: tmg-gradient-shift 3s linear infinite;
        }

        .tmg-scan-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 255, 0.03) 2px,
            rgba(0, 255, 255, 0.03) 4px
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 10;
        }

        .tmg-signature-bloom-wrapper:hover .tmg-scan-lines {
          opacity: 1;
        }

        @keyframes tmg-pulse-cyan {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 0.3;
          }
        }

        @keyframes tmg-pulse-magenta {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.2;
          }
        }

        @keyframes tmg-gradient-shift {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @media (max-width: 640px) {
          .tmg-signature-bloom-wrapper {
            padding: 0.5rem 1rem;
            cursor: default;
          }

          .tmg-particles-container {
            width: 80px;
            height: 100px;
            opacity: 0.8;
          }

          .tmg-bloom-backdrop {
            width: 100px;
            height: 100px;
            opacity: 0.5;
            transform: translate(-50%, -50%);
          }

          .tmg-logo {
            width: 40px;
            height: 40px;
            transform: scale(1);
            filter: grayscale(0%) brightness(1) drop-shadow(0 0 20px rgba(0, 255, 255, 0.6));
            opacity: 1;
          }

          .tmg-logo-glow::before {
            width: 50px;
            height: 50px;
            opacity: 0.6;
            animation: tmg-pulse-cyan 2s ease-in-out infinite;
          }

          .tmg-logo-glow::after {
            width: 90px;
            height: 90px;
            opacity: 0.5;
            animation: tmg-pulse-magenta 2.5s ease-in-out infinite;
          }

          .tmg-text {
            font-size: 0.65rem;
            transform: translateY(0) scale(1);
            opacity: 1;
            color: rgba(255, 255, 255, 0.6);
          }

          .tmg-text a {
            background: linear-gradient(90deg, #00FFFF, #FF00C8, #00FFFF);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: tmg-gradient-shift 3s linear infinite;
          }

          .tmg-scan-lines {
            opacity: 1;
          }
        }
      `}</style>

      <div className="tmg-bloom-backdrop" />

      <div className="tmg-particles-container">
        {init && (
          <Particles
            id="tmg-particles"
            options={particlesConfig}
            particlesLoaded={particlesLoaded}
          />
        )}
      </div>

      <div className="tmg-logo-wrapper">
        <div className="tmg-logo-glow">
          <img
            src="/tmg-icon-color.png"
            alt="The Midnight Garden"
            className="tmg-logo"
          />
        </div>

        <div className="tmg-text">
          Website by{' '}
          <a
            href="https://www.themidnightgarden.club"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Midnight Garden
          </a>
        </div>
      </div>

      <div className="tmg-scan-lines" />
    </div>
  )
}
