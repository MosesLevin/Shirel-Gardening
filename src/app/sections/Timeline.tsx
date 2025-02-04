'use client'
import IconPlaceholder from '@/assets/SVGs/icons/icon.svg'
import AnimateTimeline from '@/components/AnimateTimeline'

function Timeline() {
  return (
    <div className="relative">
      <div className="flex flex-col items-center ml-48 mb-20">
        <AnimateTimeline
          text="צרפתית ויקימדיה בקר צרפתית ויקימדיה בקר"
          icon={<IconPlaceholder className="text-p1c5" />}
        />
        <AnimateTimeline
          text="צרפתית ויקימדיה בקר צרפתית ויקימדיה בקר"
          icon={<IconPlaceholder className="text-p1c4" />}
        />
        <AnimateTimeline
          text="צרפתית ויקימדיה בקר צרפתית ויקימדיה בקר"
          icon={<IconPlaceholder className="text-p1c3" />}
        />
      </div>
    </div>
  )
}

export default Timeline
