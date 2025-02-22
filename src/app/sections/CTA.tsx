import React from 'react'
import CtaButton from '@/components/CTAButtons'
import PlaceholderIcon from '@/assets/SVGs/icons/WhatsApp.svg'

function CTA() {
  return (
    <div className="flex justify-center items-center py-6 gap-2 hebrew-text">
      <CtaButton
        text={'שלח הודעה'}
        className="border-p1c1 bg-[#25d366] shadow-[0_10px_0_0_#224E41] hover:shadow-[0_7px_0_0_#224E41]"
        icon={<PlaceholderIcon className="text-white size-5" />}
      />
      <CtaButton
        className=" button-animation"
        text={'לייעוץ חינם'}
        icon={<PlaceholderIcon className="text-white size-5" />}
      />
    </div>
  )
}

export default CTA
