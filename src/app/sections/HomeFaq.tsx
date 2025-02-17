import Faq from '@/components/Faq'
import SectionHeader from '@/components/SectionHeader'
import React from 'react'

const faqData = [
  {
    question:
      'שלום אני רושם טקסטמ אושדגיחוי שדגחלשדג י דשגיל ל לשדךג  שדגלחחלדשג ?',
    answer:
      'סול ואלקטרוניקה. וקשקש לערכים מדע של, בקר מיזמי אנתרופולוגיה ב. סדר נבחרים יוצרים התפתחות של, אנא או רפואה הגרפים, בקר אם מיותר אינטרנט. לכאן אירועים או היא, ערכים נבחרים התפתחות ב',
    link: { url: 'https://reactjs.org', text: 'ה הגרפים,' },
  },
  {
    question: 'בקר אם מיותר אינ?',
    answer:
      'סול ואלקטרוניקה. וקשקש לערכים מדע של, בקר מיזמי אנתרופולוגיה ב. סדר נבחרים יוצרים התפתחות של, אנא או רפואה הגרפים, בקר אם מיותר אינטרנט. לכאן אירועים או היא, ערכים נבחרים התפתחות ב',
    link: { url: 'https://reactjs.org', text: 'ה הגרפים,' },
  },
  {
    question: 'בקר אם מיותר אינ?',
    answer:
      'סול ואלקטרוניקה. וקשקש לערכים מדע של, בקר מיזמי אנתרופולוגיה ב. סדר נבחרים יוצרים התפתחות של, אנא או רפואה הגרפים, בקר אם מיותר אינטרנט. לכאן אירועים או היא, ערכים נבחרים התפתחות ב',
    link: { url: 'https://reactjs.org', text: 'ה הגרפים,' },
  },
]

function HomeFaq() {
  return (
    <div className="container my-16 ">
      <div className="mb-4">
        <SectionHeader title="שאלות נפוצות" />
      </div>
      {faqData.map((faq, index) => (
        <Faq
          key={index}
          question={faq.question}
          answer={faq.answer}
          link={faq.link}
        />
      ))}
    </div>
  )
}

export default HomeFaq
