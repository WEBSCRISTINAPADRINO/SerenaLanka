'use client';

import React from 'react';

interface MapProps {
  latitude: number;
  longitude: number;
  title: string;
}

const Map: React.FC<MapProps> = ({ latitude, longitude, title }) => {
  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${latitude},${longitude}&zoom=12`}
        allowFullScreen
        title={title}
      />
    </div>
  );
};

export default Map; 