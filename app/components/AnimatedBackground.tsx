import type React from "react"

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#DAD2FF]">
      <div className="wave-container">
        <div className="wave"></div>
      </div>
      <style jsx>{`
        .wave-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 100%;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23493D9E' fill-opacity='1' d='M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,176C672,160,768,160,864,176C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
          background-size: 100% 100%;
          animation: wave 20s linear infinite;
        }
        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}

export default AnimatedBackground

