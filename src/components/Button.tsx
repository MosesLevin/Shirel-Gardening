import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
  className?: string
  text: string
}
// this is a  button component with twmerge and a standard look with the ability to add/change css and text as prop
export default function Button({ className, text }: ButtonProps) {
  return (
    <div>
      <button
        className={twMerge(
          `text-white font-sans border-black border-2 px-2`,
          className
        )}
      >
        {text}
      </button>
    </div>
  )
}
