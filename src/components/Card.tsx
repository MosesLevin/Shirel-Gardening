import BackgroundTexture from '@/assets/walltexture.jpg'
import { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  backgroundTexture?: boolean
}

function Card({
  className,
  children,
  backgroundTexture = false, // Default to false
  ...other
}: CardProps) {
  return (
    <div
      className={twMerge(
        "rounded-3xl relative z-0 after:content-[''] after:absolute after:inset-0 after:z-10 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-black/10 after:pointer-events-none overflow-hidden",
        className
      )}
      {...other}
    >
      {backgroundTexture && (
        <div
          className="absolute inset-0 -z-10 opacity-5"
          style={{ backgroundImage: `url(${BackgroundTexture.src})` }}
        ></div>
      )}
      {children}
    </div>
  )
}

export default Card
