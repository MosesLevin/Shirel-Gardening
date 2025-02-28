import { notFound } from 'next/navigation'

type ServiceContent = {
  title: string
  description: string
}

const serviceContentMap: Record<string, ServiceContent> = {
  שירות: {
    title: 'שירות 1',
    description: 'תיאור של שירות 1.',
  },
  שירות2: {
    title: 'שירות 2',
    description: 'תיאור של שירות 2.',
  },
}

interface PageProps {
  params: {
    slug: string
  }
}

export default async function ServicePage({ params }: PageProps) {
  console.log('Raw slug:', params.slug) // Debugging

  // Ensure params.slug exists
  if (!params.slug) {
    console.log('Slug not found, returning 404')
    notFound()
  }

  // Decode the slug to handle encoded Hebrew characters
  const decodedSlug = decodeURIComponent(params.slug)
  console.log('Decoded slug:', decodedSlug)

  // Check if the decoded slug exists in the serviceContentMap
  const serviceContent = serviceContentMap[decodedSlug]

  if (!serviceContent) {
    console.log('Service not found, returning 404')
    notFound()
  }

  return (
    <div className="container mt-96 flex">
      <h1>{serviceContent.title}</h1>
      <p>{serviceContent.description}</p>
    </div>
  )
}
