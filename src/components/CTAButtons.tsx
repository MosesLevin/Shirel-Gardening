import React from 'react'
import { twMerge } from 'tailwind-merge'

interface CtaButtonProps {
  className?: string
  text: string
  icon?: React.ReactNode
  onClick?: () => void
}

const CTAButton: React.FC<CtaButtonProps> = ({
  className,
  text,
  icon,
  onClick,
}) => {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center font-sans font-semibold px-10 py-4 rounded-lg border-red-900 bg-red-700 text-white text-sm tracking-widest shadow-[0_10px_0_0_#82181a] transition-all duration-200 ease-in-out hover:shadow-[0_7px_0_0_#82181a] active:shadow-none active:translate-y-1 active:duration-200 border-y-2 border-x-2',
        className
      )}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  )
}

export default CTAButton
