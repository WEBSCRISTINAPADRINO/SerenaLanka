export default function Loading() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="relative">
        {/* Círculo exterior */}
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-tropical-green/20 border-t-tropical-green"></div>
        
        {/* Círculo interior */}
        <div className="absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 animate-spin rounded-full border-4 border-sunset-orange/20 border-t-sunset-orange" style={{ animationDuration: '1.5s' }}></div>
        
        {/* Punto central */}
        <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ocean-blue"></div>
      </div>
    </div>
  );
} 