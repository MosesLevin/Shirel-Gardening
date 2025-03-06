type Params = Promise<{ slug: keyof typeof articles }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

// Content storage
const articles = {
  [encodeURIComponent('מאמר-ראשון')]: {
    title: 'מאמר ראשון',
    content: 'תוכן המאמר הראשון... טקסט מלא כאן...',
  },
  [encodeURIComponent('נושא-מיוחד')]: {
    // Fixed duplicate key
    title: 'נושא מיוחד בגינון',
    content: 'תוכן על נושא מיוחד... פרטים מרתקים...',
  },
} as const

export async function generateMetadata(props: {
  params: Params
  searchParams: SearchParams
}) {
  const params = await props.params
  const slug = params.slug

  const article = articles[slug] || {
    title: 'מאמר לא נמצא',
    description: 'מאמר זה אינו זמין כרגע',
  }

  return {
    title: article.title,
    description: article.content.slice(0, 100),
  }
}

export default async function Page(props: {
  params: Params
  searchParams: SearchParams
}) {
  const params = await props.params
  const slug = params.slug

  const article = articles[slug] || {
    title: 'מאמר לא נמצא',
    content: 'המאמר המבוקש אינו זמין כרגע',
  }

  return (
    <main className="container font-sans pt-32">
      <div className="flex flex-col items-center gap-4 hebrew-text">
        <h1 className="text-6xl">{article.title}</h1>
        <p className="text-base">{article.content}</p>
      </div>
      <div className="mt-40"></div>
    </main>
  )
}
