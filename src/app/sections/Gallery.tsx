import GallerySlider from '@/components/GallerySlider'
import placeholder from '@/assets/grass.jpg'
import placeholder2 from '@/assets/placeholder2.jpg'
import placeholder3 from '@/assets/placeholder3.jpg'
import placeholder4 from '@/assets/placeholder4.jpg'

const customTeamPhotos = [
  { image: placeholder, alt: 'Image 1' },
  { image: placeholder2, alt: 'Image 2' },
  { image: placeholder3, alt: 'Image 3' },
  { image: placeholder4, alt: 'Image 4' },
]

const Gallery = () => {
  return (
    <div>
      <GallerySlider teamphotos={customTeamPhotos} animateDirection="left" />
      <GallerySlider teamphotos={customTeamPhotos} animateDirection="right" />
    </div>
  )
}

export default Gallery
