import Image, { StaticImageData } from 'next/image' // Assuming you're using Next.js for image optimization
import Card from './Card'
import PlaceholderIcon from '@/assets/SVGs/icons/icon.svg'

interface BlogCardProps {
  imageUrl: StaticImageData // URL for the blog image
  title: string // Blog title
  snippet: string // Blog snippet
  writtenBy?: string
  link: string // Link to the full article
}

function BlogCard({
  imageUrl,
  title,
  snippet,
  link,
  writtenBy = 'גננות בר קיימא',
}: BlogCardProps) {
  return (
    <Card className="p-0 flex flex-col h-full mx-4 md:mx-0 hover:-translate-y-2 transition-all duration-200 shadow hover:shadow-2xl ">
      {/* Image covering the top half of the card */}
      <div className="relative h-36 md:h-48 lg:h-60 w-full overflow-hidden">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      {/* Content section */}
      <div className="p-6 pb-3 flex flex-col flex-grow text-end font-sans">
        {/* Title and Snippet */}
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{snippet}</p>
        </div>

        {/* Spacer to push the link and date to the bottom */}
        <div className="mt-auto">
          {/* Continue reading link */}
          <a
            href={link}
            className="flex items-center justify-end text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <PlaceholderIcon className="w-4 h-4" />
            <span className="mr-2 text-lg ">המשך קריאה</span>
          </a>

          {/* "written 2021" text */}
          <div className="h-px mb-1 bg-black/10"> </div>
          <p className="text-xs text-start text-gray-500  ">
            נכתב על ידי: {writtenBy}
          </p>
        </div>
      </div>
    </Card>
  )
}

export default BlogCard
