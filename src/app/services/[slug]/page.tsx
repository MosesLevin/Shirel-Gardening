import Faq from '@/components/Faq'
import Map from '@/components/Map'

type Params = Promise<{ slug: keyof typeof pages }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

// Content storage
const pages = {
  '%D7%94%D7%A7%D7%9E%D7%AA-%D7%92%D7%99%D7%A0%D7%95%D7%AA': {
    title: 'הקמת גינות',
    content:
      'תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות ',
  },
  // שירות
  '%D7%A9%D7%99%D7%A8%D7%95%D7%AA': {
    title: 'דף אחזקת גינות',
    content: 'Content for page 2...',
  },
} as const

export async function generateMetadata(props: {
  params: Params
  searchParams: SearchParams
}) {
  const params = await props.params
  // const searchParams = await props.searchParams
  const slug = params.slug

  // Get page data
  const page = pages[slug] || {
    title: 'Default Page',
    content: 'Default content...',
  }

  return {
    title: page.title,
    description: page.content.slice(0, 100),
  }
}
export default async function Page(props: {
  params: Params
  searchParams: SearchParams
}) {
  const params = await props.params
  const slug = params.slug

  // Get page data
  const page = pages[slug] || {
    title: 'Not Found',
    content: 'Page not found',
  }

  return (
    <main className="container mt-96 font-sans">
      <div className="flex flex-col items-center gap-4 hebrew-text">
        <h1 className="text-6xl ">{page.title}</h1>
        <p>{page.content}</p>
        <div>מחיר</div>
        <div>CALL ME NOW</div>
      </div>
      <div className="mt-40">
        <Faq question="שאלה" answer="תשובה" />
        <div className="mt-16">
          <Map
            title="גינון באיזור חיפה"
            description=" סדר נבחרים יוצרים התפתחות של, אנא או רפואה הגרפים, בקר אם מיותר אינטרנט. לכ"
            latitude={32.803}
            longitude={34.99077}
          />
        </div>
      </div>
    </main>
  )
}
