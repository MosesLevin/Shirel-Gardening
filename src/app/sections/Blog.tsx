import BlogCard from '@/components/BlogCard'
import placeholderimage from '@/assets/placeholder3.jpg'
import SectionHeader from '@/components/SectionHeader'

const blogData = [
  {
    imageUrl: placeholderimage,
    title: '10 שאלות פוליטיקה אנתרופולוגיה בה',
    snippet:
      "מה אנא תורת בכפוף, היום מחליטה תקשורת רבה גם. בידור גרמנית משפטיכלות, דת אירועים לויקיפדים צ'ט, הארץ יידיש אגרונומיה אתה בה. קישורים ביולוגיה סטטיסטיקה בה מתן, סדר אם טיפול צרפתית.",
    link: '/blog/10-tips-for-better-productivity',
  },
  {
    imageUrl: placeholderimage,
    title: 'רפואה הגרפים',
    snippet:
      'אל בקר שתפו פיסול ואלקטרוניקה. וקשקש לערכים מדע של, בקר מיזמי אנתרופולוגיה ב. סדר נבחרים יוצרים התפתחות של, אנא או רפואה הגרפים, בקר אם מיותר אינטרנט. לכאן אירועים או היא, ערכים נבחרים התפתחות ב שמו.',
    writtenBy: 'מתחרה או חבר',
    link: '/blog/future-of-ai-in-design',
  },
  {
    imageUrl: placeholderimage,
    title: 'רפואה הגרפים',
    snippet:
      'אל בקר שתפו פיסול ואלקטרוניקה. וקשקש לערכים מדע של, בקר מיזמי אנתרופולוגיה ב. סדר נבחרים יוצרים התפתחות של, אנא או רפואה הגרפים, בקר אם מיותר אינטרנט. לכאן אירועים או היא, ערכים נבחרים התפתחות ב שמו.',
    link: '/blog/future-of-ai-in-design',
  },
  // Add more blog posts as needed
]

export default function Blog() {
  return (
    <div className="container">
      <SectionHeader
        title="כתבות גינון בר קיימא"
        underlinedWord="כתבות"
        description="בות גינון בר קיימבות גינון בר קיימבות גינון בר קיימבות גינון בר קיימבות גינון בר קיימבות גינון בר קיימבות גינון בר קיימבות גינון בר קיימבות גינון בר קיימבות גינון בר קיימ"
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
            link={blog.link} // Optional prop
          />
        ))}
      </div>
    </div>
  )
}
