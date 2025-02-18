import GallerySlider from '@/components/GallerySlider'
import galleryImage from '@/assets/1.jpg'
import galleryImage2 from '@/assets/2.jpg'
import galleryImage3 from '@/assets/3.jpg'
import galleryImage4 from '@/assets/4.jpg'
import galleryImage5 from '@/assets/5.jpg'
import galleryImage6 from '@/assets/6.jpg'
import galleryImage7 from '@/assets/7.jpg'
import galleryImage8 from '@/assets/8.jpg'

const customTeamPhotos = [
  { image: galleryImage, alt: 'Image 1' },
  { image: galleryImage2, alt: 'Image 2' },
  { image: galleryImage3, alt: 'Image 3' },
  { image: galleryImage4, alt: 'Image 4' },
  { image: galleryImage5, alt: 'Image 4' },
  { image: galleryImage6, alt: 'Image 4' },
  { image: galleryImage7, alt: 'Image 4' },
  { image: galleryImage8, alt: 'Image 4' },
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
