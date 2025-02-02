import { motion } from "framer-motion"

interface ButtonProps {
  onClick: () => void
}

export default function Button({ onClick }: ButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <motion.div
        className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fas fa-star text-[#493D9E] text-6xl"></i>
      </motion.div>
      <motion.p
        className="mt-4 text-white text-center font-semibold text-lg text-shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Click me!
      </motion.p>
    </motion.button>
  )
}

