import React from 'react'

interface BannerProps {
  message: string
  link?: string
  onClose?: () => void
}

const Banner: React.FC<BannerProps> = ({ message, link, onClose }) => {
  return (
    <div className="w-full bg-blue-600 text-white text-center py-2 px-4 flex items-center justify-center relative">
      {link ? (
        <a href={link} className="underline">
          {message}
        </a>
      ) : (
        <span>{message}</span>
      )}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-4 text-white hover:text-gray-300"
        >
          ✕
        </button>
      )}
    </div>
  )
}

export default Banner
