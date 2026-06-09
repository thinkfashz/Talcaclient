import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NailSimulatorProps {
  color: string;
  shapeId: string;
  selectedExtras: string[];
}

export const NailSimulator: React.FC<NailSimulatorProps> = ({
  color,
  shapeId,
  selectedExtras,
}) => {
  const hasExtra = (id: string) => selectedExtras.includes(id);

  // Define nail paths based on shape
  // Cuticle starts at x=160, y=240, ends at x=240, y=240. Width is 80.
  // Tip of nail extends up to y=100-120.
  const getNailPath = () => {
    switch (shapeId) {
      case 'almond':
        // Almendra: Curves to a tapered rounded point at x=200, y=105
        return 'M 160,240 C 158,185 172,112 200,105 C 228,112 242,185 240,240 Z';
      case 'square':
        // Cuadrada: Straight sides, flat tip at y=120 with soft corner rounds
        return 'M 160,240 L 161,126 Q 161,122 165,122 L 235,122 Q 239,122 239,126 L 240,240 Z';
      case 'coffin':
        // Coffin: Tapered sides ending in a narrow flat tip at y=118
        return 'M 160,240 C 162,192 174,124 180,120 L 220,120 C 226,124 238,192 240,240 Z';
      case 'stiletto':
        // Stiletto: Sharp dramatic point tip at x=200, y=90
        return 'M 160,240 C 162,185 175,102 200,90 C 225,102 238,185 240,240 Z';
      case 'oval':
        // Ovalada: Broadly rounded tip at y=115
        return 'M 160,240 C 158,192 168,115 200,115 C 232,115 242,192 240,240 Z';
      default:
        // Default Almond
        return 'M 160,240 C 158,185 172,112 200,105 C 228,112 242,185 240,240 Z';
    }
  };

  // Positions for Crystals along the cuticle base arc (around y=240, x=160-240)
  const crystalPositions = [
    { x: 172, y: 242, scale: 0.7 },
    { x: 185, y: 247, scale: 0.95 },
    { x: 200, y: 249, scale: 1.2 },
    { x: 215, y: 247, scale: 0.95 },
    { x: 228, y: 242, scale: 0.7 },
  ];

  // Glitter positions scattered across the central part of the nail plate
  const glitterParticles = [
    { x: 185, y: 190, size: 5, delay: 0 },
    { x: 215, y: 205, size: 4, delay: 0.2 },
    { x: 178, y: 160, size: 6, delay: 0.1 },
    { x: 222, y: 170, size: 5, delay: 0.3 },
    { x: 200, y: 150, size: 7, delay: 0.05 },
    { x: 192, y: 215, size: 4, delay: 0.4 },
    { x: 208, y: 130, size: 6, delay: 0.15 },
    { x: 202, y: 180, size: 5, delay: 0.25 },
  ];

  return (
    <div className="relative w-full aspect-[4/5] bg-stone-950 rounded-[2.5rem] overflow-hidden border border-white/5 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex items-center justify-center p-2">
      
      {/* Background Lighting Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-stone-800/20 via-black to-black -z-10" />

      {/* SVG Container holding the modular vectors */}
      <svg
        id="nail-simulator-svg"
        viewBox="0 0 400 500"
        className="w-full h-full max-h-full select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Soft blur for glows and shadows */}
          <filter id="shadow-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
          <filter id="glow-light" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" />
          </filter>

          {/* Skin smooth 3D gradient */}
          <linearGradient id="skin-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e1b18" />
            <stop offset="25%" stopColor="#322c26" />
            <stop offset="50%" stopColor="#4f453a" />
            <stop offset="75%" stopColor="#322c26" />
            <stop offset="100%" stopColor="#1e1b18" />
          </linearGradient>

          {/* Deep shadow for under-cuticle and nail bed depth */}
          <radialGradient id="cuticle-shadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,0,0,0.85)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>

          {/* Mirror / Chrome dynamic metallic gradient overlay */}
          <linearGradient id="mirror-metallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="20%" stopColor="#222222" stopOpacity="0.3" />
            <stop offset="40%" stopColor="#e5e5e5" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#111111" stopOpacity="0.4" />
            <stop offset="80%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#555555" stopOpacity="0.4" />
          </linearGradient>

          {/* Platinum foil gradient for foliage */}
          <linearGradient id="platinum-foil" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#b5b5b5" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>

        {/* 1. FINGER BACKDROP */}
        {/* Elegant hand/finger shape base resting in center */}
        <g id="finger-body">
          {/* Finger core shadow */}
          <path
            d="M 120,500 L 120,260 C 120,180 280,180 280,260 L 280,500"
            fill="black"
            opacity="0.4"
            filter="url(#shadow-blur)"
          />
          {/* Finger body with gradient */}
          <path
            d="M 125,500 L 125,255 C 125,185 275,185 275,255 L 275,500"
            fill="url(#skin-gradient)"
          />
          {/* Wrinkle lines representing finger knuckles */}
          <path
            d="M 145,390 Q 200,380 255,390"
            stroke="#1d1915"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M 152,398 Q 200,390 248,398"
            stroke="#5f5346"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.3"
          />
          
          <path
            d="M 140,460 Q 200,450 260,460"
            stroke="#1d1915"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M 147,468 Q 200,460 253,468"
            stroke="#5f5346"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.3"
          />
        </g>

        {/* 2. CHIC NAIL BED (UNDER-SHADOW) */}
        <ellipse
          cx="200"
          cy="255"
          rx="45"
          ry="15"
          fill="url(#cuticle-shadow)"
          opacity="0.9"
        />

        {/* 3. WORKSPACE NAIL BASE LAYER (CLIPPED FOR INTERACTIVE COLOUR RENDERING) */}
        <g id="nail-polish-system">
          {/* Clip path representation or simple base path with dynamic color transitions */}
          <motion.path
            key={`nail-base-${shapeId}`}
            initial={{ d: getNailPath(), scaleY: 0.95 }}
            animate={{ d: getNailPath(), scaleY: 1 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            d={getNailPath()}
            fill={color}
            stroke="#000000"
            strokeWidth="1"
            className="transition-colors duration-300"
            style={{
              filter: "drop-shadow(0px 8px 10px rgba(0,0,0,0.5))",
            }}
          />

          {/* Metallic Mirror Chrome effect overlay if active */}
          <AnimatePresence>
            {hasExtra('mirror') && (
              <motion.path
                key={`nail-mirror-${shapeId}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                d={getNailPath()}
                fill="url(#mirror-metallic)"
                style={{ mixBlendMode: 'overlay' }}
                pointerEvents="none"
              />
            )}
          </AnimatePresence>

          {/* Realistic 3D Curvature Shadows (ambient shades toward sides) */}
          <motion.path
            key={`nail-shade-${shapeId}`}
            d={getNailPath()}
            fill="black"
            opacity="0.25"
            style={{ mixBlendMode: 'multiply' }}
            pointerEvents="none"
          />
          
          {/* Glossy ring-light curves reflections (the signature wet gel visual shine) */}
          <motion.g id="nail-wet-highlights" key={`highlights-${shapeId}`} pointerEvents="none">
            {/* Soft wide blur focus shine */}
            <path
              d="M 172,228 Q 172,150 196,128"
              stroke="#ffffff"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              opacity="0.18"
              filter="url(#glow-light)"
            />
            {/* Sharp intense premium studio reflection */}
            <path
              d="M 172,228 Q 172,150 196,128"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.55"
            />
            {/* Secondary tiny accent reflection on right edge */}
            <path
              d="M 230,220 Q 231,180 225,160"
              stroke="#ffffff"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
              opacity="0.25"
            />
          </motion.g>

          {/* 4. DETAIL: ELEGANT FLORAL LACE ARTWORK */}
          <AnimatePresence>
            {hasExtra('floral') && (
              <motion.g
                id="nail-art-floral"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                pointerEvents="none"
              >
                {/* Handcrafted delicate vector twigs and leaves resting beautifully on the center */}
                <path
                  d="M 185,215 Q 200,185 210,140"
                  stroke="url(#platinum-foil)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.85"
                />
                {/* Intricate leaves */}
                <path
                  d="M 200,185 Q 208,181 206,177 Q 199,180 200,185 Z"
                  fill="#ffffff"
                  opacity="0.9"
                />
                <path
                  d="M 194,196 Q 185,193 188,189 Q 194,191 194,196 Z"
                  fill="#f0ede9"
                  opacity="0.85"
                />
                <path
                  d="M 205,162 Q 215,162 214,157 Q 206,157 205,162 Z"
                  fill="#ffffff"
                  opacity="0.95"
                />
                <path
                  d="M 190,175 Q 182,170 185,166 Q 191,170 190,175 Z"
                  fill="#f0ede9"
                  opacity="0.8"
                />
                {/* Secondary tiny stem */}
                <path
                  d="M 174,185 Q 192,165 200,150"
                  stroke="#ffffff"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.7"
                />
                <circle cx="203" cy="142" r="2.5" fill="#ffffff" />
                <circle cx="210" cy="140" r="1.5" fill="#f0ede9" />
              </motion.g>
            )}
          </AnimatePresence>

          {/* 5. DETAIL: SHINING GLITTER PARTICLE STARS */}
          <AnimatePresence>
            {hasExtra('glitter') && (
              <motion.g
                id="nail-art-glitter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                pointerEvents="none"
              >
                {glitterParticles.map((particle, idx) => (
                  <g
                    key={`glitter-${idx}`}
                    transform={`translate(${particle.x}, ${particle.y})`}
                  >
                    {/* Pulsing light aura behind sparkle */}
                    <circle
                      r={particle.size * 1.5}
                      fill="#ffffff"
                      opacity="0.3"
                      filter="url(#glow-light)"
                    />
                    {/* Star cross sparkle */}
                    <path
                      d={`M 0,-${particle.size} L ${particle.size * 0.25},-${particle.size * 0.25} L ${particle.size},0 L ${particle.size * 0.25},${particle.size * 0.25} L 0,${particle.size} L -${particle.size * 0.25},${particle.size * 0.25} L -${particle.size},0 L -${particle.size * 0.25},-${particle.size * 0.25} Z`}
                      fill={idx % 2 === 0 ? "#ffffff" : "#dfb24c"}
                      opacity="0.9"
                    />
                  </g>
                ))}
              </motion.g>
            )}
          </AnimatePresence>
        </g>

        {/* 6. REALISTIC CUTICLE SKIN SKIN FOLD OVERLAY (GIVES NATURAL BURIAL DEPTH TO THE NAIL) */}
        <g id="cuticle-fold" pointerEvents="none">
          {/* Deeper shadow under cuticle fold to blend the nail base */}
          <path
            d="M 154,233 C 172,246 228,246 246,233 C 248,235 249,239 248,242 C 230,254 170,254 152,242 C 151,239 152,235 154,233 Z"
            fill="black"
            opacity="0.65"
          />
          {/* Smooth cuticle fold overlay matching the fingers skin tone */}
          <path
            d="M 152,236 C 170,248 230,248 248,236 C 255,246 270,265 270,285 L 130,285 C 130,265 145,246 152,236 Z"
            fill="url(#skin-gradient)"
          />
          {/* Organic fine edge line highlight of the cuticle border */}
          <path
            d="M 153,235 C 171,247 229,247 247,235"
            stroke="#5c5043"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
        </g>

        {/* 7. DETAIL: SWAROVSKI SHINING CRYSTALS ATTACHED AT CUTICLE */}
        <AnimatePresence>
          {hasExtra('crystals') && (
            <motion.g
              id="nail-art-crystals"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 3 }}
              transition={{ duration: 0.35, type: 'spring' }}
              pointerEvents="none"
            >
              {crystalPositions.map((pos, idx) => (
                <g
                  key={`crystal-${idx}`}
                  transform={`translate(${pos.x}, ${pos.y}) scale(${pos.scale})`}
                >
                  {/* Outer lighting gem flare */}
                  <circle
                    r="8"
                    fill="#ffffff"
                    opacity="0.4"
                    filter="url(#glow-light)"
                  />
                  {/* Crystal facet geometries */}
                  <polygon
                    points="0,-6 5,-2 4,4 -4,4 -5,-2"
                    fill="#f4f9fc"
                    stroke="#a5c4d0"
                    strokeWidth="0.8"
                  />
                  <polygon points="0,-6 0,0 -5,-2" fill="#ffffff" />
                  <polygon points="0,-6 0,0 5,-2" fill="#d2e5ee" />
                  <polygon points="5,-2 0,0 4,4" fill="#ffffff" />
                  <polygon points="-4,4 0,0 4,4" fill="#8cb9cb" />
                  <polygon points="-5,-2 0,0 -4,4" fill="#cbdde5" />
                  {/* Gem dazzling core */}
                  <circle cx="0.5" cy="-0.5" r="1.8" fill="#ffffff" />
                  {/* Dynamic tiny light sparkles */}
                  <circle cx="2" cy="-2" r="0.6" fill="#ffffff" />
                  <circle cx="-2" cy="1" r="0.4" fill="#ffffff" />
                </g>
              ))}
            </motion.g>
          )}
        </AnimatePresence>
      </svg>
    </div>
  );
};
