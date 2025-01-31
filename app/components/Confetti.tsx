"use client"

import { useEffect, useState } from "react"
import "../styles/confetti.css"

const CONFETTI_COLORS = ["#ffd300", "#00e600", "#ff1a1a", "#1aa3ff", "#ff66ff"]

export default function Confetti() {
  const [pieces, setPieces] = useState<JSX.Element[]>([])

  useEffect(() => {
    const newPieces = Array.from({ length: 100 }, (_, i) => (
      <div
        key={i}
        className="confetti-piece"
        style={{
          left: `${Math.random() * 100}%`,
          backgroundColor: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
          animation: `confetti-fall ${3 + Math.random() * 2}s linear forwards`,
          animationDelay: `${Math.random() * 3}s`,
        }}
      />
    ))
    setPieces(newPieces)
  }, [])

  return <div className="confetti">{pieces}</div>
}

