// MY COMPONENT
'use client'
import { useRef, useEffect, useState } from 'react'

export default function Timeline() {
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const [combinedHeight, setCombinedHeight] = useState<number>(0)

  useEffect(() => {
    if (div1Ref.current && div2Ref.current) {
      const height1 = div1Ref.current.clientHeight
      const height2 = div2Ref.current.clientHeight
      setCombinedHeight(height1 + height2)
    }
  }, [])

  return (
    <div className="relative mt-4 bg-orange-500 h-screen ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="absolute left-0 top-0 w-4 bg-blue-500 "
          style={{ height: `${combinedHeight}px` }}
        ></div>
        <div ref={div1Ref} className="w-full h-20 bg-red-500 ml-6">
          Div 1
        </div>
        <div ref={div2Ref} className="w-full h-12 bg-green-500 ml-6">
          Div 2
        </div>
      </div>
    </div>
  )
}

/* Timeline Vertical Line */
/* <div */
//         className="absolute w-1 bg-gradient-to-b from-blue-400 to-blue-600"
//         style={{
//           height: `${animationProgress * 100}%`, // Dynamic height based on scroll
//           transition: 'height 100ms linear',
//           top: '0', // Line starts from the top
//         }}
//       />

// 'use client'
// import { useEffect, useRef, useState } from 'react'

// const Timeline = () => {
//   const timelineRef = useRef<HTMLDivElement>(null)
//   const [animationProgress, setAnimationProgress] = useState(0)

//   const steps = [
//     {
//       icon: '🌱',
//       text: 'Step 1: Planting seeds',
//       description: 'Begin by planting your seeds in nutrient-rich soil',
//     },
//     {
//       icon: '💧',
//       text: 'Step 2: Adding water',
//       description: 'Water regularly to keep soil moist but not waterlogged',
//     },
//     {
//       icon: '🌿',
//       text: 'Step 3: Growing plants',
//       description: 'Watch your plants grow and flourish with proper care',
//     },
//     {
//       icon: '🌸',
//       text: 'Step 4: Flowering',
//       description: 'See your plants start flowering with vibrant colors',
//     },
//     {
//       icon: '🍅',
//       text: 'Step 5: Harvesting',
//       description:
//         'Finally, harvest your plants and enjoy the fruits of your labor',
//     },
//   ]

//   useEffect(() => {
//     const startTime = Date.now()
//     const duration = 3000 // 3 seconds total

//     const animate = () => {
//       const elapsed = Date.now() - startTime
//       const progress = Math.min(elapsed / duration, 1)
//       setAnimationProgress(progress)

//       if (progress < 1) {
//         requestAnimationFrame(animate)
//       }
//     }

//     requestAnimationFrame(animate)
//   }, [])

//   return (
//     <div
//       ref={timelineRef}
//       className="relative flex flex-col items-center min-h-screen py-20 px-4"
//     >
//       {/* Timeline Vertical Line */}
//       <div
//         className="absolute w-1 bg-gradient-to-b from-blue-400 to-blue-600"
//         style={{
//           height: `${animationProgress * 100}%`, // Dynamic height based on scroll
//           transition: 'height 100ms linear',
//           top: '0', // Line starts from the top
//         }}
//       />

//       {/* Timeline Steps with Icons */}
//       {steps.map((step, index) => (
//         <div
//           key={index}
//           className="relative z-10 mb-16 w-full max-w-md opacity-0 -translate-x-10"
//           style={{
//             animation: `fadeSlideIn 0.7s ease-out forwards ${index * 1000}ms`,
//             position: 'relative',
//           }}
//         >
//           <div className="flex items-start space-x-4">
//             {/* Icon */}
//             <div
//               className="w-12 h-12 flex-shrink-0 flex justify-center items-center bg-blue-500 text-white rounded-full shadow-lg transform hover:scale-110 transition-transform"
//               style={{
//                 position: 'absolute',
//                 left: '-1.5rem', // Align the icon to the left of the line
//                 top: `${(index / (steps.length - 1)) * 100}%`, // Dynamically position the icon along the line
//                 transform: 'translateY(-50%)', // Center the icon vertically on the line
//               }}
//             >
//               {step.icon}
//             </div>
//             {/* Step Text */}
//             <div className="flex-1 ml-16">
//               {/* Added margin to the left to avoid overlap with icon */}
//               <h3 className="text-xl font-semibold mb-2">{step.text}</h3>
//               <p className="text-gray-600">{step.description}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//       <style jsx>{`
//         @keyframes fadeSlideIn {
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </div>
//   )
// }

// export default Timeline
