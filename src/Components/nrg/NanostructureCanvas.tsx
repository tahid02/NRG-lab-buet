import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// CSS-based 3D visualization as fallback (no external 3D libraries needed)
export default function NanostructureCanvas() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePos({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center perspective-1000"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
        animate={{
          rotateX: mousePos.y * 20,
          rotateY: mousePos.x * 20,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Floating animation wrapper */}
        <motion.div
          className="w-full h-full"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Top Layer - Maroon Metallic */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(60px)',
            }}
            animate={{ rotateZ: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          >
            <div
              className="w-64 h-40 sm:w-72 sm:h-44 lg:w-80 lg:h-48 rounded-lg shadow-2xl"
              style={{
                background:
                  'linear-gradient(135deg, #630e1d 0%, #8b1a2d 50%, #630e1d 100%)',
                boxShadow:
                  '0 20px 60px rgba(99, 14, 29, 0.4), inset 0 2px 4px rgba(255,255,255,0.2)',
                transform: 'rotateX(5deg)',
              }}
            >
              {/* Hexagonal pattern overlay */}
              <div className="w-full h-full opacity-30 overflow-hidden rounded-lg">
                <svg width="100%" height="100%" className="absolute inset-0">
                  <pattern
                    id="hexagons"
                    width="30"
                    height="26"
                    patternUnits="userSpaceOnUse"
                  >
                    <polygon
                      points="15,0 30,7.5 30,22.5 15,30 0,22.5 0,7.5"
                      fill="none"
                      stroke="rgba(255,255,255,0.4)"
                      strokeWidth="1"
                      transform="translate(0,-2)"
                    />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#hexagons)" />
                </svg>
              </div>
              {/* Atomic nodes */}
              <div className="absolute inset-0 flex items-center justify-center gap-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 rounded-full bg-white/60"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Middle Layer - Teal Glass */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(0px)',
            }}
            animate={{ rotateZ: [0, -360] }}
            transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          >
            <div
              className="w-56 h-36 sm:w-64 sm:h-40 lg:w-72 lg:h-44 rounded-lg"
              style={{
                background:
                  'linear-gradient(135deg, rgba(0,137,123,0.7) 0%, rgba(0,137,123,0.4) 50%, rgba(0,137,123,0.7) 100%)',
                backdropFilter: 'blur(8px)',
                boxShadow:
                  '0 15px 50px rgba(0,137,123,0.3), inset 0 2px 4px rgba(255,255,255,0.3)',
                transform: 'rotateX(-3deg) rotateY(5deg)',
              }}
            >
              {/* Glass reflection */}
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
                }}
              />
              {/* Grid lines */}
              <div className="absolute inset-0 opacity-40">
                <svg width="100%" height="100%">
                  <pattern
                    id="grid"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 20 0 L 0 0 0 20"
                      fill="none"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="0.5"
                    />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Bottom Layer - Dark Maroon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(-60px)',
            }}
            animate={{ rotateZ: [0, 360] }}
            transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
          >
            <div
              className="w-52 h-32 sm:w-60 sm:h-36 lg:w-68 lg:h-40 rounded-lg"
              style={{
                background:
                  'linear-gradient(135deg, #4a0a15 0%, #630e1d 50%, #4a0a15 100%)',
                boxShadow:
                  '0 10px 40px rgba(74, 10, 21, 0.5), inset 0 2px 4px rgba(255,255,255,0.1)',
                transform: 'rotateX(-8deg) rotateY(-5deg)',
              }}
            />
          </motion.div>

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: i % 2 === 0 ? '#630e1d' : '#00897b',
                left: `${20 + i * 10}%`,
                top: `${30 + i * 5}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, i % 2 === 0 ? 10 : -10, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                delay: i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Energy ring */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{ rotateZ: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <div
              className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-dashed opacity-20"
              style={{ borderColor: '#00897b' }}
            />
          </motion.div>

          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{ rotateZ: [360, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            <div
              className="w-80 h-80 sm:w-88 sm:h-88 lg:w-[28rem] lg:h-[28rem] rounded-full border opacity-10"
              style={{ borderColor: '#630e1d' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
