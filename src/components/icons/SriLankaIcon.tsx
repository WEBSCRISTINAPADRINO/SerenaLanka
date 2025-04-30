import React from 'react';

interface SriLankaIconProps {
  className?: string;
  color?: string;
}

export default function SriLankaIcon({ className = "w-6 h-6", color = "currentColor" }: SriLankaIconProps) {
  return (
    <svg
      viewBox="0 0 100 150"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Forma más precisa de Sri Lanka, como una gota o lágrima */}
      <path d="
        M 50 20
        C 45 22, 40 25, 38 30
        C 35 38, 33 45, 32 50
        C 30 60, 28 70, 30 80
        C 32 90, 35 100, 40 110
        C 45 120, 50 125, 55 128
        C 60 130, 65 130, 70 128
        C 75 125, 78 120, 80 115
        C 82 110, 83 105, 83 100
        C 83 90, 82 80, 80 70
        C 78 60, 75 50, 70 40
        C 65 30, 60 25, 55 22
        C 53 21, 51 20, 50 20
        Z
      " />
    </svg>
  );
} 