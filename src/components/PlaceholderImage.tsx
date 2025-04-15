import React from 'react';

interface PlaceholderImageProps {
  width: number;
  height: number;
  text?: string;
  bgColor?: string;
  textColor?: string;
}

export default function PlaceholderImage({
  width,
  height,
  text = 'Imagen',
  bgColor = '#E5E7EB',
  textColor = '#6B7280'
}: PlaceholderImageProps) {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: textColor,
        fontSize: '1rem',
        fontWeight: 500,
        borderRadius: '0.375rem'
      }}
    >
      {text}
    </div>
  );
} 