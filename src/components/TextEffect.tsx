import React from 'react'
import { twMerge } from 'tailwind-merge'
import UnderlineSvg from '@/assets/textUnderline.svg' // Adjust the path to your SVG file

interface TextEffectProps {
  text: string
  highlightWord?: string
  underlineWord?: string
  className?: string // Class for the wrapper span
  textClassName?: string // Class for the entire text
  highlightClassName?: string // Class for the highlighted word
  underlineClassName?: string // Class for the underlined word
  highlight?: boolean
  underline?: boolean
}

const TextEffect: React.FC<TextEffectProps> = ({
  text,
  highlightWord,
  underlineWord,
  className,
  textClassName,
  highlightClassName = 'bg-p1c1',
  underlineClassName = 'h-[2px] text-blue-500',
  highlight = false,
  underline = false,
}) => {
  // Function to wrap matched words with appropriate styling
  const wrapText = (part: string): string => {
    const isHighlight =
      highlight &&
      highlightWord &&
      part.toLowerCase() === highlightWord.toLowerCase()
    const isUnderline =
      underline &&
      underlineWord &&
      part.toLowerCase() === underlineWord.toLowerCase()

    let wrappedText = part

    // Apply highlight styling
    if (isHighlight) {
      wrappedText = `<span class="${highlightClassName}">${wrappedText}</span>`
    }

    // Apply underline styling
    if (isUnderline) {
      wrappedText = `
        <span class="relative inline-block">
          ${wrappedText}
          <span class="${underlineClassName}" style="position:absolute; left:0; right:0; bottom:-4px; display:block;">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              ${UnderlineSvg}
            </svg>
          </span>
        </span>
      `
    }

    return wrappedText
  }

  // Process the text by splitting and wrapping matched parts
  const processedText = text
    .split(new RegExp(`(${highlightWord}|${underlineWord})`, 'gi'))
    .map((part) => (highlightWord || underlineWord ? wrapText(part) : part))
    .join('')

  return (
    <span
      className={twMerge('relative', className, textClassName)}
      dangerouslySetInnerHTML={{ __html: processedText }}
    />
  )
}

export default TextEffect

// import { twMerge } from 'tailwind-merge'

// interface HighlightedTextProps {
//   text: string
//   className?: string
//   highlightWord: string
//   highlightClassName?: string
// }

// const HighlightedText: React.FC<HighlightedTextProps> = ({
//   text,
//   className,
//   highlightWord,
//   highlightClassName = 'bg-p1c1',
// }) => {
//   // split the text into parts based on the highlightWord

//   const parts = text.split(new RegExp(`(${highlightWord})`, 'gi'))

//   return (
//     <span className={twMerge('text-white font-sans text-base', className)}>
//       {parts.map((part, index) =>
//         // This checks if the current part of the array matches the highlightWord, ignoring case. If the part matches highlightWord, it will be wrapped in a span with the highlightClassName. If it doesn't match, it will be rendered as empty span.
//         part.toLowerCase() === highlightWord.toLowerCase() ? (
//           <span key={index} className={twMerge('rounded', highlightClassName)}>
//             {part}
//           </span>
//         ) : (
//           <span key={index}>{part}</span>
//         )
//       )}
//     </span>
//   )
// }

// export default HighlightedText

// new RegExp(\(${highlightWord})\, 'gi'):
//   highlightWord: This is the word you want to highlight within the text.
//   Parentheses ( ... ): These create a capturing group in the regex, which means the parts of the text that match highlightWord will also be included in the resulting array.
//   Flags gi:
//       g (global): This flag tells the regex engine to find all matches, not just the first one.
//       i (case-insensitive): This flag makes the regex match characters regardless of their case (uppercase or lowercase).
