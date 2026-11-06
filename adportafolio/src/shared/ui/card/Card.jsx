import React from 'react'

export function Card({
  children,
  className = '',
  hoverable = true,
  ...props
}) {
  return (
    <div
      className={`rounded-xl border border-white/[0.08] bg-carbon-claro/90 transition-all duration-200 ${
        hoverable
          ? 'hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-carbon-claro'
          : ''
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
    <p className={`mt-2 text-sm leading-relaxed text-arena-muted font-sans ${className}`} {...props}>
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
    <div className={`flex items-center justify-between border-t border-white/[0.06] p-6 pt-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card
