import { twMerge } from 'tailwind-merge'

interface HighlightedTextProps {
  text: string
  className?: string
  highlightWord: string
  highlightClassName?: string
}

const HighlightedText: React.FC<HighlightedTextProps> = ({
  text,
  className,
  highlightWord,
  highlightClassName = 'bg-p1c1',
}) => {
  // split the text into parts based on the highlightWord

  const parts = text.split(new RegExp(`(${highlightWord})`, 'gi'))

  return (
    <span className={twMerge('text-white font-sans text-base', className)}>
      {parts.map((part, index) =>
        // This checks if the current part of the array matches the highlightWord, ignoring case. If the part matches highlightWord, it will be wrapped in a span with the highlightClassName. If it doesn't match, it will be rendered as empty span.
        part.toLowerCase() === highlightWord.toLowerCase() ? (
          <span key={index} className={twMerge('rounded', highlightClassName)}>
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  )
}

export default HighlightedText

// new RegExp(\(${highlightWord})\, 'gi'):
//   highlightWord: This is the word you want to highlight within the text.
//   Parentheses ( ... ): These create a capturing group in the regex, which means the parts of the text that match highlightWord will also be included in the resulting array.
//   Flags gi:
//       g (global): This flag tells the regex engine to find all matches, not just the first one.
//       i (case-insensitive): This flag makes the regex match characters regardless of their case (uppercase or lowercase).
