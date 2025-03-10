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
    <Card className="p-0 flex flex-col h-full mx-4 md:mx-auto lg:hover:-translate-y-2 transition-all duration-200 shadow-lg lg:hover:shadow-xl">
      {/* Image covering the top half of the card */}
      <div className="relative min-h-40 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          className="object-cover"
          height={400}
          width={400}
          loading="lazy"
          quality={50}
        />
      </div>
      {/* Content section */}
      <div className="p-6 pb-3 flex flex-col hebrew-text font-sans h-full">
        {/* Title and Snippet */}
        <div className="flex-grow">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{snippet}</p>
        </div>
        {/* Bottom section (link and "written by" text) */}
        <div>
          {/* Continue reading link */}
          <a
            href={link}
            className="flex flex-row-reverse items-center justify-end text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-4 -mt-8 md:-mt-0 lg:-mt-6"
          >
            <PlaceholderIcon className="size-4 stroke-[50] stroke-current mr-1" />
            <span className="mr-2 text-lg">להמשך קריאה</span>
          </a>

          {/* Divider and "written by" text */}
          <div className="h-px mb-1 bg-black/10"></div>
          <p className="text-xs text-end text-gray-500">
            נכתב על ידי: {writtenBy}
          </p>
        </div>
      </div>
    </Card>
  )
}

export default BlogCard
