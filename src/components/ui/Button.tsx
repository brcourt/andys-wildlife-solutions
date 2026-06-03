import { Link } from 'react-router-dom'

const variantClasses = {
  primary: 'bg-amber text-white font-bold hover:bg-amber/90',
  secondary: 'bg-forest-green text-white font-bold hover:bg-forest-dark',
  outline: 'border-2 border-forest-green text-forest-green font-semibold hover:bg-forest-green hover:text-white',
}

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline'
  children: React.ReactNode
  href?: string
  to?: string
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function Button({ variant, children, href, to, className = '', type = 'button', disabled }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md transition-colors duration-150 text-sm'
  const classes = `${base} ${variantClasses[variant]} ${className}`

  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }
  if (to) {
    return <Link to={to} className={classes}>{children}</Link>
  }
  return (
    <button type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
