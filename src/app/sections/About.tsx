'use client'
import { motion, Variants } from 'framer-motion'

export default function ScrollTriggered() {
  return (
    <div
      style={{
        margin: '100px auto',
        maxWidth: 500,
        paddingBottom: 100,
        width: '100%',
      }}
    >
      {food.map(([emoji, hueA, hueB], i) => (
        <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
      ))}
    </div>
  )
}

interface CardProps {
  emoji: string
  hueA: number
  hueB: number
  i: number
}

function Card({ emoji, hueA, hueB, i }: CardProps) {
  // Generate a gradient background using the provided hue values
  const background = `linear-gradient(306deg, hsl(${hueA}, 100%, 50%), hsl(${hueB}, 100%, 50%))`

  return (
    <motion.div
      className={`card-container-${i}`}
      style={{
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingTop: 20,
        marginBottom: -120,
      }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      {/* Splash background with gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
          background,
        }}
      />

      {/* Animated card */}
      <motion.div
        style={{
          fontSize: 164,
          width: 300,
          height: 430,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          background: '#f5f5f5',
          boxShadow:
            '0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)',
          transformOrigin: '10% 60%',
        }}
        variants={cardVariants}
        className="card"
      >
        {emoji}
      </motion.div>
    </motion.div>
  )
}

// Animation variants for the card
const cardVariants: Variants = {
  offscreen: {
    y: 300, // Start offscreen (below the viewport)
  },
  onscreen: {
    y: 50, // Move up to this position
    rotate: -10, // Rotate slightly
    transition: {
      type: 'spring', // Use a spring animation
      bounce: 0.4, // Add some bounce
      duration: 0.8, // Duration of the animation
    },
  },
}

// Data for the cards
const food: [string, number, number][] = [
  ['🍅', 340, 10],
  ['🍊', 20, 40],
  ['🍋', 60, 90],
  ['🍐', 80, 120],
  ['🍏', 100, 140],
  ['🫐', 205, 245],
  ['🍆', 260, 290],
  ['🍇', 290, 320],
]
