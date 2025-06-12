"use client"

import { useEffect, useState } from "react"

export default function LoadingSpinner() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-green-50 via-white to-green-50 z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Main Logo */}
        <div className="mb-8 animate-pulse">
          <img
            src="/images/india-marketing-logo-new.jpeg"
            alt="India Marketing - Grow With Us"
            className="w-80 h-auto mx-auto"
          />
        </div>

        {/* Agricultural Animation */}
        <div className="relative mb-8">
          {/* Soil Base */}
          <div className="w-64 h-4 bg-gradient-to-r from-amber-800 to-amber-900 rounded-full mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 animate-pulse"></div>
          </div>

          {/* Growing Plants */}
          <div className="flex justify-center space-x-8 relative -mt-2">
            {[1, 2, 3, 4, 5].map((plant, index) => (
              <div
                key={plant}
                className="relative"
                style={{
                  animationDelay: `${index * 0.3}s`,
                }}
              >
                {/* Plant Stem */}
                <div
                  className="w-1 bg-green-600 mx-auto origin-bottom animate-grow"
                  style={{
                    height: `${20 + index * 8}px`,
                    animationDelay: `${index * 0.3}s`,
                  }}
                ></div>

                {/* Plant Leaves */}
                <div
                  className="absolute -top-1 left-1/2 transform -translate-x-1/2 animate-leaf-grow"
                  style={{
                    animationDelay: `${index * 0.3 + 0.5}s`,
                  }}
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full transform rotate-45"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full absolute -top-1 -left-1 transform -rotate-45"></div>
                </div>

                {/* Water Droplets */}
                <div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  {[1, 2, 3].map((drop) => (
                    <div
                      key={drop}
                      className="w-1 h-1 bg-blue-400 rounded-full absolute animate-water-drop opacity-70"
                      style={{
                        left: `${(drop - 2) * 4}px`,
                        animationDelay: `${index * 0.2 + drop * 0.1}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Loading Premium Products...</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Loading Text with Typewriter Effect */}
        <div className="text-gray-700 font-medium text-lg mb-4">
          <span className="animate-typewriter">Connecting Farms to Global Markets</span>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              {i % 4 === 0 && <div className="w-2 h-2 bg-green-500 rounded-full"></div>}
              {i % 4 === 1 && <div className="w-1 h-1 bg-blue-400 rounded-full"></div>}
              {i % 4 === 2 && <div className="w-3 h-1 bg-green-400 rounded-full transform rotate-45"></div>}
              {i % 4 === 3 && <div className="w-1 h-3 bg-green-600 rounded-full"></div>}
            </div>
          ))}
        </div>

        {/* Certification Badges */}
        <div className="flex justify-center space-x-4 mt-6">
          {["APEDA", "FSSAI", "GST", "IEC"].map((cert, index) => (
            <div
              key={cert}
              className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium animate-fade-in-up"
              style={{
                animationDelay: `${2 + index * 0.2}s`,
              }}
            >
              {cert} Certified
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes grow {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }

        @keyframes leaf-grow {
          from {
            transform: translate(-50%, 0) scale(0);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0) scale(1);
            opacity: 1;
          }
        }

        @keyframes water-drop {
          0% {
            transform: translateY(-10px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-grow {
          animation: grow 1s ease-out forwards;
        }

        .animate-leaf-grow {
          animation: leaf-grow 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-water-drop {
          animation: water-drop 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }

        .animate-typewriter {
          overflow: hidden;
          border-right: 2px solid #22c55e;
          white-space: nowrap;
          animation: typewriter 3s steps(40, end) forwards, blink-caret 0.75s step-end infinite;
          display: inline-block;
          width: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes blink-caret {
          from, to {
            border-color: transparent;
          }
          50% {
            border-color: #22c55e;
          }
        }
      `}</style>
    </div>
  )
}
