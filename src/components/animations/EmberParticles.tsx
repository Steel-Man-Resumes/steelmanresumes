'use client'

import { useEffect, useRef } from 'react'

interface EmberParticlesProps {
  className?: string
  particleCount?: number
}

export function EmberParticles({ className = '', particleCount = 50 }: EmberParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Store ctx in a variable that TypeScript knows is not null
    const context = ctx

    // Capture dimensions
    let canvasWidth = canvas.offsetWidth
    let canvasHeight = canvas.offsetHeight

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      canvasWidth = canvas.width
      canvasHeight = canvas.height
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle class
    class Ember {
      x: number = 0
      y: number = 0
      size: number = 0
      speedY: number = 0
      speedX: number = 0
      opacity: number = 0
      fadeSpeed: number = 0
      color: string = '#D4A84B'

      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvasWidth
        this.y = canvasHeight + 10
        this.size = Math.random() * 3 + 1
        this.speedY = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.8 + 0.2
        this.fadeSpeed = Math.random() * 0.005 + 0.002
        
        // Gold/orange ember colors
        const colors = ['#D4A84B', '#E8C060', '#FF6B35', '#FF8C42', '#FFB347']
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.y -= this.speedY
        this.x += this.speedX + Math.sin(this.y * 0.01) * 0.3
        this.opacity -= this.fadeSpeed

        if (this.opacity <= 0 || this.y < -10) {
          this.reset()
        }
      }

      draw() {
        context.save()
        context.globalAlpha = this.opacity
        
        // Glow effect
        context.shadowBlur = 10
        context.shadowColor = this.color
        
        // Draw ember
        context.beginPath()
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        context.fillStyle = this.color
        context.fill()
        
        context.restore()
      }
    }

    // Create particles
    const embers: Ember[] = []
    for (let i = 0; i < particleCount; i++) {
      const ember = new Ember()
      ember.y = Math.random() * canvasHeight // Spread initially
      embers.push(ember)
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      context.clearRect(0, 0, canvasWidth, canvasHeight)
      
      embers.forEach(ember => {
        ember.update()
        ember.draw()
      })

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [particleCount])

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  )
}
