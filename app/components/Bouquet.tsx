"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Flower } from "lucide-react"

interface BouquetProps {
  note: string
  hasVideo?: boolean
  onVideoClick?: () => void
  isActive: boolean
  onClick: () => void
}

export default function Bouquet({ note, hasVideo, onVideoClick, isActive, onClick }: BouquetProps) {
  const handleClick = () => {
    if (hasVideo && onVideoClick) {
      onVideoClick()
    } else {
      onClick()
    }
  }

  return (
    <motion.div
      className={`flex flex-col items-center transition-all duration-300 ease-in-out`}
      animate={{
        opacity: isActive ? 1 : 0.6,
        scale: isActive ? 1 : 0.95,
        filter: isActive ? "blur(0px)" : "blur(1px)",
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg cursor-pointer bg-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
      >
        <Flower className="w-16 h-16 text-[#493D9E]" />
      </motion.div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-4 p-6 rounded-lg shadow-xl max-w-md bg-white bg-opacity-90 backdrop-blur-md border border-[#B2A5FF]"
          >
            <p className="text-center font-semibold text-[#493D9E]">
              {note.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

