import React from 'react'
import CtaButton from '@/components/CTAButtons'
import PlaceholderIcon from '@/assets/SVGs/icons/icon.svg'

function CTA() {
  return (
    <div className="flex justify-center items-center py-6 gap-2">
      <CtaButton
        text={'יקימדיה בקר'}
        icon={<PlaceholderIcon className="text-white size-5" />}
      />
      <CtaButton
        text={'יקימדיה בקר'}
        className="border-p1c1 bg-[#25d366] shadow-[0_10px_0_0_#224E41] hover:shadow-[0_7px_0_0_#224E41] button-animation"
        icon={<PlaceholderIcon className="text-white size-5" />}
      />
    </div>
  )
}

export default CTA
