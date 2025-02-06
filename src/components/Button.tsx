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
          `text-white text-center  bg-p1c1 font-sans text-lg font-medium rounded px-7 py-3 hover:bg-p1c7 transition-colors hover:duration-300 hebrew-text`,
          className
        )}
      >
        {text}
      </button>
    </div>
  )
}
