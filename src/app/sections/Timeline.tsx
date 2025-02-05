'use client'
// import IconPlaceholder from '@/assets/SVGs/icons/icon.svg'
import AnimateTimeline from '@/components/AnimateTimeline'

function Timeline() {
  return (
    <div className="relative">
      <div className="flex flex-col items-end md:items-center md:ml-56 mb-20">
        <AnimateTimeline
          text="צרפתית ויקימדיה בקר צרפתית ויקימדיה בקר"
          icon={
            <div className="size-10 md:size-12 bg-p1c1 rounded-full flex-shrink-0 text-white font-title text-3xl font-extrabold flex items-center justify-center">
              1
            </div>
          }
        />
        <AnimateTimeline
          text="צרפתית ויקימדיה בקר צרפתית ויקימדיה בקר"
          icon={
            <div className="size-10 md:size-12 bg-p1c2 rounded-full flex-shrink-0 text-white font-title text-3xl font-extrabold flex items-center justify-center">
              2
            </div>
          }
        />
        <AnimateTimeline
          text="צרפתית ויקימדיה בקר צרפתית ויקימדיה בקר"
          icon={
            <div className="size-10 md:size-12 bg-p1c3 rounded-full flex-shrink-0 text-white font-title text-3xl font-extrabold flex items-center justify-center">
              3
            </div>
          }
        />
      </div>
    </div>
  )
}

export default Timeline
