'use client'

import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({ 
  target, 
  suffix = '', 
  prefix = '',
  duration = 2,
  className = '' 
}: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  const spring = useSpring(0, { duration: duration * 1000 })
  const display = useTransform(spring, (current) => {
    return `${prefix}${Math.floor(current)}${suffix}`
  })

  useEffect(() => {
    if (isInView) {
      spring.set(target)
    }
  }, [isInView, spring, target])

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  )
}
