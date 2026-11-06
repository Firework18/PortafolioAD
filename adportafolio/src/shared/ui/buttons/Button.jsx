import React from 'react'

const VARIANTS = {
  primary:
    'bg-celeste text-carbon font-semibold border border-celeste/80 hover:bg-[#67e8f9] hover:border-[#67e8f9]',
  secondary:
    'bg-white/[0.06] text-arena font-semibold border border-white/10 hover:bg-white/[0.1] hover:border-white/20',
  accent:
    'bg-ambar/10 text-ambar border border-ambar/30 hover:bg-ambar/15 hover:border-ambar/50',
  coral:
    'bg-coral/10 text-coral border border-coral/30 hover:bg-coral/15 hover:border-coral/50',
  outline:
    'bg-transparent text-arena border border-white/15 hover:bg-white/[0.04] hover:border-white/30',
  ghost:
    'bg-transparent text-arena-muted border border-transparent hover:bg-white/[0.05] hover:text-arena',
  cyber:
    'bg-carbon-medio text-arena border border-white/15 hover:border-celeste/40 hover:bg-white/[0.04] hover:text-celeste [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]',
}

const SIZES = {
  sm: 'px-3.5 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
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
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-lg font-display uppercase tracking-wider transition-colors duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-celeste/60 focus-visible:ring-offset-2 focus-visible:ring-offset-carbon active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none'
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
    lg: 'p-3 text-lg',
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
