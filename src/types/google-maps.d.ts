declare namespace google.maps {
  class Map {
    constructor(element: HTMLElement, options: MapOptions);
  }

  interface MapOptions {
    center: LatLngLiteral;
    zoom: number;
    styles?: MapTypeStyle[];
  }

  interface LatLngLiteral {
    lat: number;
    lng: number;
  }

  interface MapTypeStyle {
    featureType?: string;
    elementType?: string;
    stylers: MapTypeStyler[];
  }

  interface MapTypeStyler {
    color?: string;
    lightness?: number;
    weight?: number;
  }

  class Marker {
    constructor(options: MarkerOptions);
    setMap(map: Map | null): void;
  }

  interface MarkerOptions {
    position: LatLngLiteral;
    map?: Map;
    title?: string;
  }
}

interface Window {
  google: typeof google;
} 