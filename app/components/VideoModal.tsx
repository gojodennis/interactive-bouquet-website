import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg p-6 relative"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
          >
            <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
            <video src="/placeholder.mp4" controls className="w-full max-w-2xl rounded-lg shadow-lg">
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

