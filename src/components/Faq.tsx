'use client'
import { useState } from 'react'

type FaqProps = {
  question: string
  answer: string
  link?: {
    url: string
    text: string
  }
}

export default function Faq({ question, answer, link }: FaqProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-300 py-4 font-sans">
      {/* button with question and arrow  */}
      <button
        className="w-full text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`md:group-hover:text-p1c1 transition-colors duration-200 flex justify-between gap-3 items-center p-0 text-lg font-medium text-gray-800 ${
            isOpen ? 'text-p1c1' : ''
          }`}
        >
          <span
            className={`transform transition-transform ${
              isOpen ? 'rotate-90 ' : 'rotate-180'
            }`}
          >
            〉
          </span>
          <span className="hebrew-text text-start">{question}</span>
        </span>
      </button>
      {/* div with answer */}
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <p className="p-4 text-gray-600 text-end">
          {answer}
          {link && (
            <a
              href={link.url}
              className="text-blue-500 lg:hover:text-blue-700 underline"
            >
              {link.text}
            </a>
          )}
        </p>
      </div>
    </div>
  )
}
