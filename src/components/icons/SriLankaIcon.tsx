import React from 'react';

interface SriLankaIconProps {
  className?: string;
  color?: string;
}

export default function SriLankaIcon({ className = "w-6 h-6", color = "currentColor" }: SriLankaIconProps) {
  return (
    <svg
      viewBox="0 0 500 500"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M120 180 L110 220 L105 280 L115 320 L125 350 L130 380 L140 400 L160 420 L180 430 L200 440 L240 445 L280 440 L320 430 L350 410 L370 390 L380 350 L385 300 L390 250 L385 200 L375 150 L340 130 L300 120 L250 115 L200 120 L150 130 L120 180 Z" />
    </svg>
  );
} 