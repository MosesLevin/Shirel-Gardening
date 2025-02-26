import { notFound } from 'next/navigation'

type ServiceContent = {
  title: string
  description: string
}

const serviceContentMap: Record<string, ServiceContent> = {
  '%D7%A9%D7%99%D7%A8%D7%95%D7%AA': {
    title: 'שירות 1',
    description: 'תיאור של שירות 1.',
  },
  '%D7%A9%D7%99%D7%A8%D7%95%D7%AA2': {
    title: 'שירות 2',
    description: 'תיאור של שירות 2.',
  },
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: PageProps) {
  const { slug } = params

  const serviceContent = serviceContentMap[slug]

  if (!serviceContent) {
    notFound()
  }

  return (
    <div className="container mt-96 flex">
      <h1>{serviceContent.title}</h1>
      <p>{serviceContent.description}</p>
    </div>
  )
}
