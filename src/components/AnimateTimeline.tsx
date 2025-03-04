import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface InterfaceTimeline {
  text: string
  icon: React.ReactNode | string
}

function AnimateTimeline({ text, icon }: InterfaceTimeline) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '0px 0px -50px 0px', once: true })
  const [showLogoText, setShowLogoText] = useState(false)

  function handleShowLogoText() {
    setShowLogoText(true)
  }

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
      <motion.svg
        ref={ref}
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
          animate={isInView ? 'visible' : 'hidden'}
          stroke="currentColor"
          strokeWidth={3}
          fill="none"
          onUpdate={(latest) => {
            if (
              typeof latest.pathLength === 'number' &&
              latest.pathLength >= 0.5 &&
              !showLogoText
            ) {
              handleShowLogoText()
            }
          }}
        />
      </motion.svg>
      <div className="absolute min-w-64 min-h-32 top-24 md:top-36 right-16 md:right-[88px]">
        <div className="flex flex-row-reverse items-center gap-4 w-full h-full">
          {showLogoText && (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.div>
          )}

          {showLogoText && (
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-sans text-xl max-w-[200px] md:max-w-[400px] overflow-wrap-break-word hebrew-text"
            >
              {text}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AnimateTimeline
