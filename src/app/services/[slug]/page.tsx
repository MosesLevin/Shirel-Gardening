import Faq from '@/components/Faq'
import Map from '@/components/Map'
import Image from 'next/image'
import wallpaper from '@/assets/wallpaper1.webp'
import image1 from '@/assets/1.jpg'
import image2 from '@/assets/2.jpg'
import image3 from '@/assets/3.jpg'
import image4 from '@/assets/4.jpg'
import image5 from '@/assets/5.jpg'

type Params = Promise<{ slug: keyof typeof pages }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

// Content storage
const pages = {
  [encodeURIComponent('הקמת-גינות')]: {
    title: 'הקמת גינות',
    backgroundImage: wallpaper,
    content:
      'אין כמו לקטוף עגבנייה טרייה מהגינה שלכם,או שמא לתבל את הארוחה בעשבי תיבול שגידלתם בעצמכם. תוצרת ביתית טרייה ובריאה היא המומחיות שלנו. אנו מתמחים בהקמת גינות המשלבות בין יופי לשימושיות. בין אם יש לכם חצר גדולה או מרפסת קטנה, ניצור עבורכם גינה המתאימה לצרכים והחזון שלכם.',
    header1: 'כותרת 1',
    content1: 'תיאור שלב התכנון...',
    header2: 'הקמת גינה במרפסת',
    content2:
      'יתרונות: מי לא רוצה לקום בבוקר ולצאת למרפסת פורחת ושופעת כשדבורה מזמזמת בין הפרחים? רוב הדירות בערים  הגדולות בישראל מנותקות קרקע, לכן גג או מרפסת מהווים פתרון מצויין. למזלינו הטוב- השמש היא למעלה, כך אפשר לתפוס נתח נכבד יותר ממנה כשבוחרים בשתילת מנותקת קרקע. בקרה וניטור מירבי במצע מנותק קרקע מתאפשר בקלות רבה ויעילות מיטבית, כך גם בקרת מזיקים ובדיקת מדדים. שתילה באדניות מהווה פתרון מצויין להפגשת עולם הצומח עם כוס הקפה בבוקר.חסרונות: יש עדיפות לגגמרפסת בהם ניתן לחבר מערכת השקייה. יש גבול לגודל הצמחים היכולים לגדול באדניות.',
    header3: 'כותרת 3',
    content3: 'תיאור שלב האחזקה...',
    priceTitle: 'מחירון הקמת גינות',
    priceContent: 'מחירים לפי גודל הגינה...',
  },
  // שירות
  [encodeURIComponent('אחזקת-גינות')]: {
    title: 'אחזקת גינות',
    backgroundImage: image1,
    content:
      ' בעברית לימודים שתי דת, על יוני אדות למאמרים אחר. של כלל חופשית הקהילה, רוסית למאמרים המקושרי ',
    header1: 'שלב 1: תכנון',
    content1: 'תיאור שלב התכנון...',
    header2: 'שלב 2: ביצוע',
    content2: 'תיאור שלב הביצוע...',
    header3: 'שלב 3: אחזקה',
    content3: 'תיאור שלב האחזקה...',
    priceTitle: 'מחירון הקמת גינות',
    priceContent: 'מחירים לפי גודל הגינה...',
  },
  [encodeURIComponent('גיזום-עצים')]: {
    title: 'גיזום עצים',
    backgroundImage: image2,
    content:
      ' בעברית לימודים שתי דת, על יוני אודות למאמרים אחר. של כלל חופשית הקהילה, רוסית למאמרים המקושרים תנך בה, אם ויקי ליום הסביבה שמו. ו. דת פולנית טבלאות התפתחות לוח. שתפו אודות שער את. את זכר ספרות מדריכים, מה ננקטת המלחמה למאמרים אחד. ',
    header1: 'שלב 1: תכנון',
    content1: 'תיאור שלב התכנון...',
    header2: 'שלב 2: ביצוע',
    content2: 'תיאור שלב הביצוע...',
    header3: 'שלב 3: אחזקה',
    content3: 'תיאור שלב האחזקה...',
    priceTitle: 'מחירון הקמת גינות',
    priceContent: 'מחירים לפי גודל הגינה...',
  },
  [encodeURIComponent('פרמקלצר')]: {
    title: `פרמקלצ'ר | תרבות גן`,
    backgroundImage: image3,
    content:
      'גינון בר קיימא הוא גינון המתבסס על עקרונות המיטביים עם הסביבה. בחברה יש דגש על בריאות הקרקע והצומחים וחיים בה, תוך שילוב בחומרים טבעיים ושיטות מסורתיות. שימוש במשאבי הטבע הוא הן לצריכת אדם והן לנוי, ובחברה פועלים מעקרונות של שמירת הקרקע פורייה. בין אם בתיחוח הקרקע, הוספה מתמדת של חיפוי לקרקע, דישון נכון והזנת חומרים אורגניים- ישנה הימנעות משימוש בחומרים שאינם מיטיביים עם הסביבה.',
    header1: 'תרבות בת קיימא',
    content1:
      'Permanent Agriculture היא גישה הולסטית המשלבת עקרונות של הטמעת "חקלאות בת קיימא".  פארמקאלצ\'ר – היידועה גם בשם "תרבות עדן" משלבת עיצוב נוף המחקה דפוסים ויחסי גומלין המצויים בטבע- על מנת להשיג שפע  עמודי הטווח המרכזיים של שיטת הפארמקלצ\'ר: +דאגה לאדמה +דאגה לאדם +חלוקת משאבים הוגנת  עקרונות שיטת תרבות עדן היא שיטה עתיקה,בה בני אדם נשאו איתם במעבר בין מקומות זרעים ושתילים- ובכך הפרכו את סביבתם הקרובה לברת קיימא. ',
    header2: 'צמחייה, קווים לדמותה',
    content2:
      "באילו צמחים נבחר בשימוש בשיטת הפארמקלצ'ר? בחירת הצמחים לרוב תיעשה לרוב בצורב בה יהיו בגינה צמחים רב שנתיים יחד עם צמחים המזריעים את עצמם. חלק מרכזי בבחירת הצמחים הוא שימור הזנת הקרעקע בצורה בה היא תוכל לקיים חיים נוספים- על כן נבחר צמחים הקושרים חנקן לקרעקע, כמו משפחות של קטניות,(יש גם עצים המקבעים חנקן) ובנוסף נשלב צמחים ממשפחת הסולניים. צמח המניב פריעלה מאכל לאדם או שניתן להפיק ממנו שימושים שונים מהפריגזעענפים. בנוסף משלבים בגינה מקיימת צמחים מקומיים, אשר תומכים בבעליי חיים מקומיים. ",
    header3: 'יש לי שטח, הוא מתאים?',
    content3:
      "איפה אפשר לקיים מרחב לפארמקלצ'ר? המטרייה של הקמת גינות מקיימות היא רחבה, אין צורך בשטח אדמה גדול , יש אפשרות להקים שטח במקום מנותק קרקע כמו מרפסתגג בניין. שיטה זו דוגלת בשימוש במרחב הקיים ושיבוח הסביבה המקומית תוך כדי שימור יחסי גומלין בטבע ושימוש בחומרים שאינם מזיקים לסביבה. אדמה היא ייצור חיי, וכך מתייחסים אליו בתחום זה, דואגים להזין א האדמה, ולשתול בה צמחים המזינים אותה בחזרה. במידה וברשותכם פיסת אדמה- ניתן להקים בה חלקת פארמקלצ'ר אשר דורשת סבלנות מועטה, ומספקת הנאה רבה. ",
    priceTitle: 'מחירון הקמת גינות',
    priceContent: 'מחירים לפי גודל הגינה...',
  },
  [encodeURIComponent('מערכות-השקייה')]: {
    title: 'מערכות השקייה',
    backgroundImage: image4,
    content:
      ' בעברית לימודים שתי דת, על יוני אודות למאמרים אחר. של כלל חופשית הקהילה, רוסית למאמרים המקושרים תנך בה, אם ויקי ליפרות מדריכים,יכים, מה ננקטת המלחמה למאמרים אחד. ',
    header1: 'שלב 1: תכנון',
    content1: 'תיאור שלב התכנון...',
    header2: 'שלב 2: ביצוע',
    content2: 'תיאור שלב הביצוע...',
    header3: 'שלב 3: אחזקה',
    content3: 'תיאור שלב האחזקה...',
    priceTitle: 'מחירון הקמת גינות',
    priceContent: 'מחירים לפי גודל הגינה...',
  },
  [encodeURIComponent('עבודות-עץ')]: {
    title: 'עבודות עץ',
    backgroundImage: image5,
    content:
      ' בעברית לימודים שתי דת, על יוני אודות למאמרים אחר. של כלל חופשית הקהילה, רוסית למאמרים המקושרים תנך ים, מה ננקטת המלחמה לר ספרות מדריכים, מה ננקטת המלחמה למאמרים אחד. ',
    header1: 'שלב 1: תכנון',
    content1: 'תיאור שלב התכנון...',
    header2: 'שלב 2: ביצוע',
    content2: 'תיאור שלב הביצוע...',
    header3: 'שלב 3: אחזקה',
    content3: 'תיאור שלב האחזקה...',
    priceTitle: 'מחירון הקמת גינות',
    priceContent: 'מחירים לפי גודל הגינה...',
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
    <main className="container font-sans">
      {/* Image container with fixed height */}
      <div className="absolute inset-0 -z-50 overflow-hidden h-[50vh]">
        <Image
          src={page.backgroundImage}
          alt="Hero Image"
          fill
          quality={50}
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 -z-40 bg-black bg-opacity-40 h-[50vh]"></div>

      {/* Content */}
      <div className="flex flex-col gap-4 hebrew-text text-white">
        <span className="h-[50vh]">
          <h1 className="flex flex-col mt-[23vh] max-w-[90vw] md:max-w-[50vw] lg:max-w-[30vw] xl:max-w-[20vw]  text-center mx-auto text-6xl font-bold p-2 md:p-3 lg:p-4 pt-1 bg-p1c1/80 rounded-lg ">
            {page.title}
          </h1>
        </span>
        <div className="text-stone-800 container flex flex-col gap-4">
          <p className="text-lg">{page.content}</p>

          {/* Display optional headers and contents */}
          {page.header1 && (
            <div className="">
              <h2 className="text-2xl font-semibold my-2">{page.header1}</h2>
              <p className="text-stone-700 mb-1">{page.content1}</p>
            </div>
          )}
          {page.header2 && (
            <div className="">
              <h2 className="text-2xl font-semibold my-2">{page.header2}</h2>
              <p className="text-stone-700 mb-1">{page.content2}</p>
            </div>
          )}
          {page.header3 && (
            <div className="">
              <h2 className="text-2xl font-semibold my-2">{page.header3}</h2>
              <p className="text-stone-700 mb-1">{page.content3}</p>
            </div>
          )}
          {/* Display price title and content */}
          {page.priceTitle && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold">{page.priceTitle}</h2>
              <p className="text-stone-700">{page.priceContent}</p>
            </div>
          )}
        </div>
        <div>CALL ME NOW</div>
      </div>

      {/* FAQ and Map sections */}
      <div className="mt-40">
        <Faq question="שאלה" answer="תשובה" />
        <div className="mt-16">
          <Map
            title="גינון באיזור חיפה"
            description="סדר נבחרים יוצרים התפתחות של, אנא או רפואה הגרפים, בקר אם מיותר אינטרנט. לכ"
            latitude={32.803}
            longitude={34.99077}
          />
        </div>
      </div>
    </main>
  )
}
