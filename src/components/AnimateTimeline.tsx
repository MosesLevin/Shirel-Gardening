import { motion } from 'framer-motion'

function AnimateTimeline() {
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
    <div>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 80"
        x="0px"
        y="0px"
      >
        <g data-name="Eclipse">
          <motion.path
            d="M32,50.72A18.72,18.72,0,1,0,13.28,32,18.68,18.68,0,0,0,32,50.72ZM48.72,32A16.61,16.61,0,0,1,37.13,47.9a16.63,16.63,0,0,1-9.88-8.51A17.48,17.48,0,0,1,25.54,32,16.61,16.61,0,0,1,37.13,16.1,16.61,16.61,0,0,1,48.72,32Zm-24.5,5a18.39,18.39,0,0,0,.72,2.09,1.21,1.21,0,0,1-1.12-1.2A1.23,1.23,0,0,1,24.22,37ZM32,15.28c.56,0,1.12,0,1.67.08A18.6,18.6,0,0,0,23.54,32a19.4,19.4,0,0,0,.24,3A3.21,3.21,0,0,0,25,41.14a3.1,3.1,0,0,0,.81-.11,18.53,18.53,0,0,0,7.82,7.61c-.56,0-1.11.08-1.67.08a16.72,16.72,0,0,1,0-33.44Z"
            variants={draw}
            initial="hidden"
            animate="visible"
            custom={0}
            stroke="#000" // Add a stroke color
            strokeWidth={2} // Add a stroke width
            fill="none" // Ensure fill is transparent (optional)
          />
          <motion.path
            d="M32,12a3,3,0,0,0,3-3V6a3,3,0,0,0-6,0V9A3,3,0,0,0,32,12ZM31,6a1,1,0,0,1,2,0V9a1,1,0,1,1-2,0Z"
            variants={draw}
            initial="hidden"
            animate="visible"
            custom={0.5}
            stroke="#000"
            strokeWidth={1}
            fill="currentColor"
          />
          <motion.path
            d="M17.41,32a3.08,3.08,0,0,0,1.51.4,3,3,0,0,0,1.52-5.65,1,1,0,0,0-1,1.74,1,1,0,0,1,.48.62,1,1,0,0,1-.1.78,1,1,0,0,1-1.41.38,1,1,0,0,0-1.36.36A1,1,0,0,0,17.41,32Z"
            variants={draw}
            initial="hidden"
            animate="visible"
            custom={1}
            stroke="#000"
            strokeWidth={1}
            fill="currentColor"
          />
          <motion.path
            d="M29,55.05v3a3,3,0,0,0,6,0v-3a3,3,0,0,0-6,0Zm4,0v3a1,1,0,0,1-2,0v-3a1,1,0,0,1,2,0Z"
            variants={draw}
            initial="hidden"
            animate="visible"
            custom={1.5}
            stroke="#000"
            strokeWidth={0}
            fill="currentColor"
          />
          <motion.path
            d="M58,29h-3a3,3,0,0,0,0,6h3a3,3,0,0,0,0-6Zm0,4h-3a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z"
            variants={draw}
            initial="hidden"
            animate="visible"
            custom={2}
            stroke="#000"
            strokeWidth={1}
            fill="currentColor"
          />
          <motion.path
            d="M48.3,18.7a3,3,0,0,0,2.12-.87l2.09-2.09a3,3,0,0,0-4.25-4.25l-2.09,2.09A3,3,0,0,0,48.3,18.7ZM47.59,15l2.09-2.09a1,1,0,0,1,1.41,0h0a1,1,0,0,1,0,1.41L49,16.41a1,1,0,0,1-1.7-.71A1,1,0,0,1,47.59,15Z"
            variants={draw}
            initial="hidden"
            animate="visible"
            custom={2.5}
            stroke="#000"
            strokeWidth={1}
            fill="currentColor"
          />
          <motion.path
            d="M46.17,46.17a3,3,0,0,0,0,4.25l2.09,2.09a3,3,0,0,0,4.25-4.25l-2.09-2.09A3,3,0,0,0,46.17,46.17ZM49,47.59l2.09,2.09a1,1,0,0,1,0,1.41h0a1,1,0,0,1-1.41,0L47.59,49a1,1,0,0,1,0-1.41,1,1,0,0,1,1.41,0Z"
            variants={draw}
            initial="hidden"
            animate="visible"
            custom={3}
            stroke="#000"
            strokeWidth={1}
            fill="currentColor"
          />
          <motion.path
            d="M12.2,52.8a1,1,0,0,0,.71-.29l2.91-2.92a1,1,0,0,0-1.41-1.41l-2.92,2.91a1,1,0,0,0,0,1.42A1,1,0,0,0,12.2,52.8Z"
            variants={draw}
            initial="hidden"
            animate="visible"
            custom={3.5}
            stroke="#000"
            strokeWidth={1}
            fill="currentColor"
          />
          <motion.path
            d="M4,33H8.12a1,1,0,0,0,0-2H4a1,1,0,0,0,0,2Z"
            variants={draw}
            initial="hidden"
            animate="visible"
            custom={4}
            stroke="#000"
            strokeWidth={1}
            fill="currentColor"
          />
          <motion.path
            d="M14.41,15.82a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-2.91-2.92a1,1,0,1,0-1.42,1.42Z"
            variants={draw}
            initial="hidden"
            animate="visible"
            custom={4.5}
            stroke="#000"
            strokeWidth={1}
            fill="currentColor"
          />
        </g>
      </motion.svg>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="-5.0 -10.0 110.0 135.0"
        fill="currentColor"
        className="w-1/2"
      >
        <motion.path
          d="m4.0234 97.102 0.019531 0.011719c2.0586 1.1055 4.5703-0.27344 4.7578-2.6055 0.75781-9.3203 5.9766-12.316 11.406-12.195 47.984 1.1055 71.129-36.59 75.746-76.715 0.23828-2.0547-1.7734-3.6133-3.7305-2.9375-21.414 7.3867-95.195 5.2734-86.797 56.145 0.46484 2.8086 4.1875 3.4961 5.6836 1.0742 12.629-20.441 35.504-32.977 67.836-43.465-44.594 17.59-68.738 47.344-74.918 80.684z"
          variants={draw}
          initial="hidden"
          animate="visible"
          custom={0}
          stroke="#000"
          strokeWidth={1}
          fill="transparent"
        />
      </motion.svg>
    </div>
  )
}

export default AnimateTimeline
