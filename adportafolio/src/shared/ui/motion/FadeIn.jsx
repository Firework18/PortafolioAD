import React from 'react'
import { motion } from 'framer-motion'

const MotionDiv = motion.div

export function FadeIn({
  children,
  delay = 0,
  duration = 0.55,
  direction = 'up',
  distance = 24,
  className = '',
  once = true,
  ...props
}) {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }

  const offset = directions[direction] || directions.up

  return (
    <MotionDiv
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </MotionDiv>
  )
}

export default FadeIn
