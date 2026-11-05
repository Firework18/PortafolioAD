import React from 'react'

const VARIANTS = {
  primary: 'bg-celeste text-carbon font-bold hover:bg-celeste/90 border border-celeste shadow-[0_0_16px_rgba(34,211,238,0.25)] hover:shadow-[0_0_24px_rgba(34,211,238,0.45)]',
  secondary: 'bg-indigo-tech text-white font-bold hover:bg-indigo-tech/90 border border-indigo-tech/80 shadow-[0_0_16px_rgba(99,102,241,0.25)] hover:shadow-[0_0_24px_rgba(99,102,241,0.45)]',
  accent: 'bg-ambar text-carbon font-bold hover:bg-ambar/90 border border-ambar/80 shadow-[0_0_16px_rgba(245,158,11,0.25)] hover:shadow-[0_0_24px_rgba(245,158,11,0.45)]',
  coral: 'bg-coral text-white font-bold hover:bg-coral/90 border border-coral/80 shadow-[0_0_16px_rgba(251,113,133,0.25)] hover:shadow-[0_0_24px_rgba(251,113,133,0.45)]',
  outline: 'bg-transparent text-celeste border border-celeste/40 hover:bg-celeste/10 hover:border-celeste shadow-[0_0_10px_rgba(34,211,238,0.1)]',
  ghost: 'bg-transparent text-arena border border-transparent hover:bg-white/5 hover:text-celeste',
  cyber: 'bg-carbon-medio text-celeste border border-celeste/50 hover:border-celeste hover:bg-celeste/10 hover:shadow-[0_0_18px_rgba(34,211,238,0.3)] [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]'
}

const SIZES = {
  sm: 'px-3.5 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base'
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  href,
  disabled = false,
  type = 'button',
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-display uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none'
  const variantClass = VARIANTS[variant] || VARIANTS.primary
  const sizeClass = SIZES[size] || SIZES.md
  const widthClass = fullWidth ? 'w-full' : ''

  const renderIcon = () => {
    if (!icon) return null
    return typeof icon === 'string' ? <i className={`bi ${icon}`} /> : icon
  }

  const combinedClasses = `${baseClasses} ${variantClass} ${sizeClass} ${widthClass} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {icon && iconPosition === 'left' && renderIcon()}
        {children}
        {icon && iconPosition === 'right' && renderIcon()}
      </a>
    )
  }

  return (
    <button type={type} disabled={disabled} className={combinedClasses} {...props}>
      {icon && iconPosition === 'left' && renderIcon()}
      {children}
      {icon && iconPosition === 'right' && renderIcon()}
    </button>
  )
}

export function IconButton({ icon, size = 'md', className = '', ...props }) {
  const iconSizes = {
    sm: 'p-2 text-sm',
    md: 'p-2.5 text-base',
    lg: 'p-3 text-lg'
  }

  return (
    <Button
      size={size}
      className={`aspect-square ${iconSizes[size] || iconSizes.md} ${className}`}
      {...props}
    >
      {typeof icon === 'string' ? <i className={`bi ${icon}`} /> : icon}
    </Button>
  )
}

export default Button
