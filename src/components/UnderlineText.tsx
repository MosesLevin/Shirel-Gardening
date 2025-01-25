import React from 'react'
import UnderlineSvg from '@/assets/textUnderline.svg'
import { twMerge } from 'tailwind-merge'

interface UnderlinedTextProps {
  text: string
  underlinedWord: string
  className?: string
  underlineClassName?: string
}

const UnderlinedText: React.FC<UnderlinedTextProps> = ({
  text,
  underlinedWord,
  className = '',
  underlineClassName = '',
}) => {
  const underlinedWordRegex = new RegExp(`(${underlinedWord})`, 'gi')

  return (
    <div className={twMerge('relative inline-block', className)}>
      {text.split(underlinedWordRegex).map((part, index) =>
        part.toLowerCase() === underlinedWord.toLowerCase() ? (
          <span key={index} className="relative inline-block">
            {part}
            <span
              className={twMerge(
                'absolute left-0 right-0 bottom-[-4px]',
                underlineClassName
              )}
            >
              <UnderlineSvg className="w-full h-auto" />
            </span>
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </div>
  )
}

export default UnderlinedText
