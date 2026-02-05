import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'ghost';
  size?: 'default' | 'lg' | 'sm' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/85 shadow-md",
      secondary: "border border-primary bg-transparent text-primary hover:bg-primary/5",
      ghost: "hover:bg-primary/5 text-primary",
    }
    const sizes = {
      default: "h-10 px-5 py-2 text-sm",
      lg: "h-12 px-8 text-base",
      sm: "h-9 px-4 text-sm",
      icon: "h-10 w-10 p-0",
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
export { Button }
