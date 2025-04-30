import React from 'react';

interface SriLankaIconProps {
  className?: string;
  color?: string;
}

export default function SriLankaIcon({ className = "w-6 h-6", color = "#2E7D32" }: SriLankaIconProps) {
  return (
    <svg
      viewBox="0 0 100 150"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Forma más precisa de Sri Lanka con la característica forma de lágrima */}
      <path d="
        M 50 20
        C 42 25, 38 35, 35 45
        C 32 55, 30 65, 30 75
        C 30 90, 32 100, 35 110
        C 40 120, 45 125, 50 130
        C 55 125, 60 120, 65 110
        C 68 100, 70 90, 70 75
        C 70 65, 68 55, 65 45
        C 62 35, 58 25, 50 20
        Z
      " />
    </svg>
  );
} 