import React from 'react'
import { twMerge } from 'tailwind-merge'

interface SectionHeaderProps {
  eyeCatch?: string
  title: string
  underlinedWord?: string
  description?: string
  sectionClassName?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyeCatch,
  title,
  description,
  underlinedWord,
  sectionClassName,
}) => {
  // Function to split the title into parts if it contains the underlined word, otherwise return original title
  const getHighlightedTitle = () => {
    if (!underlinedWord || !title.includes(underlinedWord)) {
      return title
    }

    // if the title contains the underlined word, split the title into parts and return that to getHighlightedTitle
    const [before, after] = title.split(underlinedWord)

    return (
      <>
        {before}
        <span className="underline-with-svg">{underlinedWord}</span>
        {after}
      </>
    )
  }
  // Return the title and description, if getHighlightedTitle returns a matching string
  return (
    <div
      className={twMerge(
        'flex flex-col items-center justify-center font-sans ',
        sectionClassName
      )}
    >
      {eyeCatch && <p className="text-xl ">{eyeCatch}</p>}
      <h2 className="text-4xl font-sans text-center font-semibold tracking-tight max-w-[220px] md:max-w-md z-10">
        {getHighlightedTitle()}
      </h2>
      {description && (
        <p className="mt-8 max-w-3xl text-gray-900 text-lg p-1 mx-4 hebrew-text">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
