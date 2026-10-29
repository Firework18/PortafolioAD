import React from 'react'

const VARIANTS = {
  primary: 'bg-primary text-black hover:bg-primary/85 border border-primary shadow-[0_0_15px_rgba(0,240,255,0.35)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)]',
  secondary: 'bg-secondary text-white hover:bg-secondary/85 border border-secondary shadow-[0_0_15px_rgba(255,0,127,0.35)] hover:shadow-[0_0_25px_rgba(255,0,127,0.6)]',
  accent: 'bg-accent text-black hover:bg-accent/85 border border-accent shadow-[0_0_15px_rgba(255,230,0,0.35)] hover:shadow-[0_0_25px_rgba(255,230,0,0.6)]',
  outline: 'bg-transparent text-primary border border-primary/70 hover:bg-primary hover:text-black hover:border-primary shadow-[0_0_10px_rgba(0,240,255,0.2)]',
  ghost: 'bg-transparent text-base-content border border-transparent hover:bg-white/10 hover:text-primary',
  cyber: 'bg-base-300 text-primary border border-primary/60 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]'
}

const SIZES = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-5 py-2 text-sm',
  lg: 'px-7 py-3 text-base'
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
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-khand font-semibold uppercase tracking-wider rounded-md transition-all duration-200 cursor-pointer select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none'
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

