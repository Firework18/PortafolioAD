import React from 'react'

export function Card({
  children,
  className = '',
  hoverable = true,
  ...props
}) {
  return (
    <div
      className={`rounded-2xl bg-carbon-claro/80 border border-white/[0.08] shadow-xl backdrop-blur-sm transition-all duration-300 ${
        hoverable ? 'hover:border-white/20 hover:bg-carbon-claro/95 hover:-translate-y-1' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={`p-6 pb-2 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = '', ...props }) {
  return (
    <h3 className={`text-xl font-bold font-display text-arena ${className}`} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className = '', ...props }) {
  return (
    <p className={`text-sm text-arena-muted leading-relaxed font-sans mt-2 ${className}`} {...props}>
      {children}
    </p>
  )
}

export function CardContent({ children, className = '', ...props }) {
  return (
    <div className={`p-6 pt-2 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '', ...props }) {
  return (
    <div className={`p-6 pt-4 border-t border-white/[0.06] flex items-center justify-between ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card

