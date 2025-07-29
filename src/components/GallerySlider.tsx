'use client'
import { useState, useEffect, Fragment, useCallback } from 'react'
import Image, { StaticImageData } from 'next/image'
import Card from '@/components/Card'

interface TeamPhoto {
  image: StaticImageData
  alt: string
}

interface GallerySliderProps {
  teamphotos: TeamPhoto[]
  animateDirection?: 'left' | 'right'
}

const GallerySlider = ({
  teamphotos,
  animateDirection = 'left',
}: GallerySliderProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [transitioning, setTransitioning] = useState(false)

  // Disable scrolling when the modal is open - Not working
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [selectedImage])

  const handleNext = useCallback(() => {
    if (selectedImage !== null && selectedImage < teamphotos.length - 1) {
      setTransitioning(true)
      setTimeout(() => {
        setSelectedImage(selectedImage + 1)
        setTransitioning(false)
      }, 200)
    }
  }, [selectedImage, teamphotos.length])

  const handlePrev = useCallback(() => {
    if (selectedImage !== null && selectedImage > 0) {
      setTransitioning(true)
      setTimeout(() => {
        setSelectedImage(selectedImage - 1)
        setTransitioning(false)
      }, 200)
    }
  }, [selectedImage])

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage !== null) {
        switch (event.key) {
          case 'Escape':
            handleCloseModal()
            break
          case 'ArrowLeft':
            handlePrev()
            break
          case 'ArrowRight':
            handleNext()
            break
          default:
            break
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, handleNext, handlePrev])

  const handleImageClick = (index: number) => {
    setSelectedImage(index)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  // Determine animation class based on prop
  const animationClass =
    animateDirection === 'left'
      ? 'animate-left-movement'
      : 'animate-right-movement'

  return (
    <div className="container mx-auto p-2">
      {/* map over items left to right or right to left masked div */}
      <div className=" flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] p-2">
        <div
          className={`flex flex-none gap-8 pr-8 ${animationClass} [animation-duration:90s] hover:[animation-play-state:paused]`}
        >
          {[...new Array(2)].fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {teamphotos.map((teamphoto, index) => (
                <Card
                  key={index}
                  className="md:hover:scale-105 transition-transform duration-200 cursor-pointer "
                  onClick={() => handleImageClick(index)}
                >
                  <Image
                    src={teamphoto.image}
                    alt={teamphoto.alt}
                    className="size-56 md:size-64 lg:size-72 object-cover"
                    loading="lazy"
                    width={600}
                    height={400}
                  />
                </Card>
              ))}
            </Fragment>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-[80vw] max-h-[80vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute -top-10 right-0 md:top-0 md:right-0 text-white text-2xl bg-black bg-opacity-50 rounded-full p-2 z-50"
            >
              &times;
            </button>

            {/* Image with transition effect */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={teamphotos[selectedImage].image}
                alt={teamphotos[selectedImage].alt}
                className={`w-full h-full max-w-[80vw] max-h-[80vh] object-contain rounded-lg transition-opacity duration-200 ${
                  transitioning ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </div>

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full p-2"
              disabled={selectedImage === 0}
            >
              &#10094;
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full p-2"
              disabled={selectedImage === teamphotos.length - 1}
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default GallerySlider
