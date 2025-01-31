"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Button from "./components/Button"
import Bouquet from "./components/Bouquet"
import VideoModal from "./components/VideoModal"
import Confetti from "./components/Confetti"
import AnimatedBackground from "./components/AnimatedBackground"

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [showBouquets, setShowBouquets] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [activeBouquet, setActiveBouquet] = useState<number | null>(null)

  const handleButtonClick = () => {
    setShowConfetti(true)
    setTimeout(() => {
      setShowConfetti(false)
      setShowBouquets(true)
    }, 3000)
  }

  const handleBouquetClick = (index: number) => {
    setActiveBouquet((prevActive) => (prevActive === index ? null : index))
  }

  const bouquets = [
    {
      note: "Happy Valentine's, Pihu! 🌹\n\nTwo years, two months—countless memories of joy and growth. Through highs and lows, your 101% effort inspires me daily. Thank you for teaching me love, patience, and maturity. You're my strength, my joy, my cutest everything. Forever grateful for us. I adore you endlessly. 💖",
    },
    {
      note: "You light up my world! 🌟\n\nYour smile brightens my darkest days, and your love fills my heart with warmth. Thank you for being the amazing person you are. I cherish every moment with you.",
    },
    {
      note: "Our love story continues... 💕\n\nClick to watch a special video message just for you!",
      hasVideo: true,
    },
  ]

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-4">
      <AnimatedBackground />
      <AnimatePresence>{!showBouquets && <Button onClick={handleButtonClick} />}</AnimatePresence>

      {showConfetti && <Confetti />}

      <AnimatePresence>
        {showBouquets && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {bouquets.map((bouquet, index) => (
              <Bouquet
                key={index}
                note={bouquet.note}
                hasVideo={bouquet.hasVideo}
                onVideoClick={() => setShowVideo(true)}
                isActive={activeBouquet === index}
                onClick={() => handleBouquetClick(index)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <VideoModal isOpen={showVideo} onClose={() => setShowVideo(false)} />
    </main>
  )
}

