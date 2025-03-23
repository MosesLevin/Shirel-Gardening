import SectionHeader from '@/components/SectionHeader'

function About() {
  return (
    <section className="container font-sans mb-10">
      <div className="flex-col hebrew-text">
        <SectionHeader
          title="אודות תרבות גן"
          eyeCatch="מי אנחנו"
          underlinedWord="תרבות גן"
        />
        <p className="mt-8 max-w-3xl text-gray-900 text-lg p-1 mx-4">
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט
          לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושעגט ליבם סולגק. בראיט ולחת צורק
          מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג
          ישבעס.
        </p>
        <p className="mt-4 max-w-3xl text-gray-900 text-lg p-1 mx-4">
          וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום
          בעליק.
        </p>
      </div>
    </section>
  )
}
export default About

// my customer teamphotoss/recommendations

// <div className="mt-12 lg:mt-8 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] md:py-4 ">
// {/* use keyframe from tailwind config to animate, pause animation on hover */}
// <div className="flex flex-none gap-8 pr-8 animate-left-movement [animation-duration:90s] hover:[animation-play-state:paused]">
//   {/* duplicate teamphotoss for animation like in Banner creating 2 sets of teamphotoss in the map instead of 1 */}
//   {[...new Array(2)].fill(0).map((_, idx) => (
//     <Fragment key={idx}>
//       {teamphotos.map((teamphotos, index) => (
//         <Card
//           key={index}
//           className="md:hover:rotate-2 transition-transform duration-200"
//         >
//           <Image
//             src={teamphotos.image}
//             alt={teamphotos.alt}
//             className="size-48 md:size-64 object-cover"
//           />
//         </Card>
//       ))}
//     </Fragment>
//   ))}
// </div>
// </div>
