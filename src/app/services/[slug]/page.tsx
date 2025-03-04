import Faq from '@/components/Faq'
import Map from '@/components/Map'

type Params = Promise<{ slug: keyof typeof pages }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

// Content storage
const pages = {
  [encodeURIComponent('הקמת-גינות')]: {
    title: 'הקמת גינות',
    content:
      'תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות תיאור הקמת גינות ',
  },
  // שירות
  [encodeURIComponent('אחזקת-גינות')]: {
    title: 'אחזקת גינות',
    content:
      ' בעברית לימודים שתי דת, על יוני אודות למאמרים אחר. של כלל חופשית הקהילה, רוסית למאמרים המקושרים תנך בה, אם ויקי ליום הסביבה שמו. דת פולנית טבלאות התפתחות לוח. שתפו אודות שער את. את זכר ספרות מדריכים, מה ננקטת המלחמה למאמרים אחד.   בעברית לימודים שתי דת, על יוני אודות למאמרים אחר. של כלל חופשית הקהילה, רוסית למאמרים המקושרים תנך בה, אם ויקי ליום הסביבה שמו. דת פולנית טבלאות התפתחות לוח. שתפו אודות שער את. את זכר ספרות מדריכים, מה ננקטת המלחמה למאמרים אחד.   בעברית לימודים שתי דת, על יוני אודות למאמרים אחר. של כלל חופשית הקהילה, רוסית למאמרים המקושרים תנך בה, אם ויקי ליום הסביבה שמו. דת פולנית טבלאות התפתחות לוח. שתפו אודות שער את. את זכר ספרות מדריכים, מה ננקטת המלחמה למאמרים אחד. ',
  },
  [encodeURIComponent('גיזום-עצים')]: {
    title: 'גיזום עצים',
    content:
      ' בעברית לימודים שתי דת, על יוני אודות למאמרים אחר. של כלל חופשית הקהילה, רוסית למאמרים המקושרים תנך בה, אם ויקי ליום הסביבה שמו. דת פולנית טבלאות התפתחות לוח. שתפו אודות שער את. את זכר ספרות מדריכים, מה ננקטת המלחמה למאמרים אחד.   בעברית לימודים שתי דת, על יוני אודות למאמרים אחר. של כלל חופשית הקהילה, רוסית למאמרים המקושרים תנך בה, אם ויקי ליום הסביבה שמו. דת פולנית טבלאות התפתחות לוח. שתפו אודות שער את. את זכר ספרות מדריכים, מה ננקטת המלחמה למאמרים אחד.   בעברית לימודים שתי דת, על יוני אודות למאמרים אחר. של כלל חופשית הקהילה, רוסית למאמרים המקושרים תנך בה, אם ויקי ליום הסביבה שמו. דת פולנית טבלאות התפתחות לוח. שתפו אודות שער את. את זכר ספרות מדריכים, מה ננקטת המלחמה למאמרים אחד. ',
  },
  [encodeURIComponent('פרמקלצר')]: {
    title: `פרמקלצ'ר | תרבות גן`,
    content:
      ' בעברית לימודים שתי דת, על יוני אודות למאמרים אחר. של כלל חופשית הקהילה, רוסית למאמרים המקושרים תנך בה, אם ויקי ליום הסביבה שמו. דת פולנית טבלאות התפתחות לוח. שתפו אודות שער את. את זכר ספרות מדריכים, מה ננקטת המלחמה למאמרים אחד.   בעברית לימודים שתי דת, על יוני אודות למאמרים אחר. של כלל חופשית הקהילה, רוסית למאמרים המקושרים תנך בה, אם ויקי ליום הסביבה שמו. דת פולנית טבלאות התפתחות לוח. שתפו אודות שער את. את זכר ספרות מדריכים, מה ננקטת המלחמה למאמרים אחד.   בעברית לימודים שתי דת, על יוני אודות למאמרים אחר. של כלל חופשית הקהילה, רוסית למאמרים המקושרים תנך בה, אם ויקי ליום הסביבה שמו. דת פולנית טבלאות התפתחות לוח. שתפו אודות שער את. את זכר ספרות מדריכים, מה ננקטת המלחמה למאמרים אחד. ',
  },
  [encodeURIComponent('מערכות-השקייה')]: {
    title: 'מערכות השקייה',
    content:
      ' בעברית לימודים שתי דת, על יוני אודות למאמרים אחר. של כלל חופשית הקהילה, רוסית למאמרים המקושרים תנך בה, אם ויקי ליום הסביבה שמו. דת פולנית טבלאות התפתחות לוח. שתפו אודות שער את. את זכר ספרות מדריכים, מה ננקטת המלחמה למאמרים אחד.   בעברית לימודים שתי דת, על יוני אודות למאמרים אחר. של כלל חופשית הקהילה, רוסית למאמרים המקושרים תנך בה, אם ויקי ליום הסביבה שמו. דת פולנית טבלאות התפתחות לוח. שתפו אודות שער את. את זכר ספרות מדריכים, מה ננקטת המלחמה למאמרים אחד.   בעברית לימודים שתי דת, על יוני אודות למאמרים אחר. של כלל חופשית הקהילה, רוסית למאמרים המקושרים תנך בה, אם ויקי ליום הסביבה שמו. דת פולנית טבלאות התפתחות לוח. שתפו אודות שער את. את זכר ספרות מדריכים, מה ננקטת המלחמה למאמרים אחד. ',
  },
  [encodeURIComponent('עבודות-עץ')]: {
    title: 'עבודות עץ',
    content:
      ' בעברית לימודים שתי דת, על יוני אודות למאמרים אחר. של כלל חופשית הקהילה, רוסית למאמרים המקושרים תנך בה, אם ויקי ליום הסביבה שמו. דת פולנית טבלאות התפתחות לוח. שתפו אודות שער את. את זכר ספרות מדריכים, מה ננקטת המלחמה למאמרים אחד.   בעברית לימודים שתי דת, על יוני אודות למאמרים אחר. של כלל חופשית הקהילה, רוסית למאמרים המקושרים תנך בה, אם ויקי ליום הסביבה שמו. דת פולנית טבלאות התפתחות לוח. שתפו אודות שער את. את זכר ספרות מדריכים, מה ננקטת המלחמה למאמרים אחד.   בעברית לימודים שתי דת, על יוני אודות למאמרים אחר. של כלל חופשית הקהילה, רוסית למאמרים המקושרים תנך בה, אם ויקי ליום הסביבה שמו. דת פולנית טבלאות התפתחות לוח. שתפו אודות שער את. את זכר ספרות מדריכים, מה ננקטת המלחמה למאמרים אחד. ',
  },
}

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
    <main className="container font-sans pt-32">
      <div className="flex flex-col items-center gap-4 hebrew-text">
        <h1 className="text-6xl ">{page.title}</h1>
        <p className="text-base ">{page.content}</p>
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
