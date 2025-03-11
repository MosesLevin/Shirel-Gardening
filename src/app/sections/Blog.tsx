import BlogCard from '@/components/BlogCard'
import blogImage from '@/assets/7.jpg'
import blogImage2 from '@/assets/4.jpg'
import blogImage3 from '@/assets/5.jpg'
import SectionHeader from '@/components/SectionHeader'

const blogData = [
  {
    imageUrl: blogImage,
    title: '10 שאלות פוליטיקה אנתרופולוגיה בה',
    snippet:
      "מה אנא תורת בכפוף, היום מחליטה תקשורת רבה גם. בידור גרמנית משפטיכלות, דת אירועים לויקיפדים צ'ט, הארץ יידיש אגרונומיה אתה בה. קישורים ביולוגיה סטטיסטיקה בה מתן, סדר אם טיפול צרפתית.",
    link: 'מאמר-ראשון',
  },
  {
    imageUrl: blogImage2,
    title: "פרמקלצ'ר-Permaculture",
    snippet:
      'אל בקר שתפו פיסול ואלקטרוניקה. וקשקש לערכים מדע של, בקר מיזמי אנתרופולוגיה ב. סדר נבחרים יוצרים התפתחות של, אנא או רפואה הגרפים, בקר אם מיותר אינטרנט. לכאן אירועים או היא, ערכים נבחרים התפתחות ב שמו.',
    writtenBy: 'מתחרה או חבר',
    link: 'מאמר-ראשון',
  },
  {
    imageUrl: blogImage3,
    title: 'רפואה הגרפים',
    snippet:
      'אל בקר שתפו פיסול ואלקטרוניקה. וקשקש לערכים מדע של, בקר מיזמי אנתרופולוגיה ב. סדר נבחרים יוצרים התפתחות של, אנא או רפואה הגרפים, בקר אם מיותר אינטרנט. לכאן אירועים או היא, ערכים נבחרים התפתחות ב שמו.',
    link: 'מאמר-ראשון',
  },
  // Add more blog posts as needed
]

export default function Blog() {
  return (
    <div className="container mb-8">
      <SectionHeader
        title="כתבות גינון בר קיימא"
        underlinedWord="כתבות"
        description="בות גינון בר קיימבות גינון בר קיימבות גינון בר קיימבות גינון בר קיימבות גינון בר קיימבות גינון בר קימבות גינון בר קיימבות גינון בר קיימבות גינון בר קיימבות גינון בר קיימ"
        sectionClassName="my-12"
      />
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            imageUrl={blog.imageUrl}
            title={blog.title}
            snippet={blog.snippet}
            writtenBy={blog.writtenBy} // Optional prop
            link={`כתבות/${blog.link}`} // Optional prop
          />
        ))}
      </div>
    </div>
  )
}
