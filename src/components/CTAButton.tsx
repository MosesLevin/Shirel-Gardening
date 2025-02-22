import React from 'react'
import { twMerge } from 'tailwind-merge'

interface CtaButtonProps {
  className?: string
  text?: string
  icon?: React.ReactNode
  children?: React.ReactNode
  onClick?: () => void
}

const CTAButton: React.FC<CtaButtonProps> = ({
  className,
  text,
  icon,
  children,
  onClick,
}) => {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center font-sans font-semibold px-10 py-4 rounded text-white text-sm border-p1c1 bg-p1c3 shadow-[0_10px_0_0_#224e41] hover:shadow-[0_7px_0_0_#224e41]  tracking-widest transition-all duration-200 ease-in-out active:shadow-none active:translate-y-1 active:duration-200 border-y-2 border-x-2',
        className
      )}
      onClick={onClick}
    >
      {children}
      {text}
      {icon && <span className="mr-2">{icon}</span>}
    </button>
  )
}

export default CTAButton
