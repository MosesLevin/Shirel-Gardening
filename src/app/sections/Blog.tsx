import BlogCard from '@/components/BlogCard'
import placeholderimage from '@/assets/placeholder3.jpg'

export default function Blog() {
  return (
    <div className="mt-96 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <BlogCard
        imageUrl={placeholderimage}
        title="10 שאלות פוליטיקה אנתרופולוגיה בה "
        snippet="מה אנא תורת בכפוף, היום מחליטה תקשורת רבה גם. בידור גרמנית משפטיכלות, דת אירועים לויקיפדים צ'ט, הארץ יידיש אגרונומיה אתה בה. קישורים ביולוגיה סטטיסטיקה בה מתן, סדר אם טיפול צרפתית."
        link="/blog/10-tips-for-better-productivity"
      />
      <BlogCard
        imageUrl={placeholderimage}
        title="רפואה הגרפים"
        snippet="אל בקר שתפו פיסול ואלקטרוניקה. וקשקש לערכים מדע של, בקר מיזמי אנתרופולוגיה ב. סדר נבחרים יוצרים התפתחות של, אנא או רפואה הגרפים, בקר אם מיותר אינטרנט. לכאן אירועים או היא, ערכים נבחרים התפתחות ב שמו."
        writtenBy="מתחרה או חבר"
        link="/blog/future-of-ai-in-design"
      />
      <BlogCard
        imageUrl={placeholderimage}
        title="רפואה הגרפים"
        snippet="אל בקר שתפו פיסול ואלקטרוניקה. וקשקש לערכים מדע של, בקר מיזמי אנתרופולוגיה ב. סדר נבחרים יוצרים התפתחות של, אנא או רפואה הגרפים, בקר אם מיותר אינטרנט. לכאן אירועים או היא, ערכים נבחרים התפתחות ב שמו."
        link="/blog/future-of-ai-in-design"
      />
      {/* Add more BlogCard components as needed */}
    </div>
  )
}
