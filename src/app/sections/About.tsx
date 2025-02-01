'use client'
import AnimatedSVG from '@/components/AnimateTimeline'
import React from 'react'

function About() {
  return (
    <section className="relative z-10  ">
      <div className="flex flex-col items-end md:mr-60">
        <AnimatedSVG />
        <AnimatedSVG />
        <AnimatedSVG />
      </div>
    </section>
  )
}
export default About
