import { motion } from 'framer-motion'

// interface AnimateTimeline {
//   icon: string
// }

function AnimateTimeline({}) {
  const draw = {
    hidden: { pathLength: 0 },
    visible: (custom: number) => {
      const delay = custom
      return {
        pathLength: 1,
        transition: {
          pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        },
      }
    },
  }

  return (
    <div className="relative">
      <div className="absolute w-full ">
        <div className="flex ">
          <p className="mt-20 w-30">צרפתית ויקימדיה בקר</p>
          <div className="size-10 mt-36 -ml-8 bg-blue-400 "></div>
        </div>
      </div>
      <motion.svg
        className="size-40 md:size-52 -mb-4 text-p1c1"
        width="36"
        height="101"
        viewBox="0 0 36 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M35 0V91.7127C35 102.027 21.6 99.7968 0 99.7968"
          variants={draw}
          initial="hidden"
          whileInView="visible" // Trigger animation when in view
          viewport={{ margin: '0px 0px -50px 0px', once: true }} // Adjust margin (negative bottom margin for earlier trigger)
          stroke="currentColor"
          strokeWidth={3}
          fill="none"
        />
      </motion.svg>
    </div>
  )
}

export default AnimateTimeline
