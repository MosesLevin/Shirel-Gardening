import SectionHeader from '@/components/SectionHeader'

function About() {
  return (
    <section className="container font-sans">
      <div className="flex-col">
        <SectionHeader
          title="אודות גינון בר-קיימא"
          eyeCatch="מי אנחנו"
          underlinedWord="גינון בר-קיימא"
        />
        <p className="mt-8 max-w-3xl text-gray-900 text-lg text-end p-1 mx-10">
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט
          לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק
          מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג
          ישבעס.
        </p>
        <p className="mt-4 max-w-3xl text-gray-900 text-lg text-end p-1 mx-10">
          וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום
          בעליק. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר
          בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג -
          ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט
        </p>
      </div>
    </section>
  )
}
export default About
