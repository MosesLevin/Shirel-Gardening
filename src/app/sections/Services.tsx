import SectionHeader from '@/components/SectionHeader'

export default function Services() {
  // const service = [
  //   {
  //     title: 'Service 1',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nullam non ligula ut dolor suscipit iaculis. Sed ac lacus nec nunc ultricies ultricies. Nam ut sapien auctor, commodo purus sit amet, vulputate nunc. Sed nec libero non felis ornare tincidunt. Nullam nec eros nec mi blandit tincidunt. Donec auctor, nunc nec ultricies aliqu',
  //     icon: 'icon1',
  //   },
  // ]

  return (
    <div className="bg-slate-100">
      <div className="container  py-12">
        <SectionHeader
          eyeCatch="מי אנחנו"
          title="שירותי גננות בר קיימא"
          description="ב החופשית בהיסטוריה עוד. אל בהשחתה טכניים היא. עמוד ראשי קולנוע בה זאת, רבה מה יוני צילום מיוחדים, דת לערכים מבוקשים אנציקלופדיה זכר. ישראל לעריכה זכר בה. שער ב שמות בגרסה והגולשים, כדי אם יסוד הבקשה, צרפתית הספרות אחר גם. בדף רב־לשוני לויקיפדים בהתייחסות של, אל החול צרפתית ויקימדיה בקר. גם ספרות איטליה מתמטיקה אנא, יכול בהתייחסות אל ארץ, בה טיפול הספרות לויקיפדיה תנך. את שונה נבחרים ואמנות צעד, סדר גם ספרות יוצרים, שתי ב והגולשים וספציפיים. זאת של החלה לערך. זכר את הרוח לערך והוא, מלא לערך כלשהו אם, שתי או שאלות משפטים ארכיאולוגיה. ליום בשפה או דרס"
          underlinedWord="בר קיימא"
        />
        {/* {service.map((service, index) => (
          <div key={index} className="">
            <div className="flex overflow-hidden">
              <div className="">{service.title}</div>
              <div>{service.description}</div>
              <div>{service.icon}</div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  )
}
