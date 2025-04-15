declare module '@react-google-maps/api' {
  import { ComponentType, ReactNode } from 'react';
  import { Map as GoogleMap } from '@googlemaps/js-api-loader';

  export interface Libraries {
    places?: boolean;
    geometry?: boolean;
  }

  export interface LoadScriptProps {
    googleMapsApiKey: string;
    libraries?: Libraries;
    language?: string;
    region?: string;
    version?: string;
    loadingElement?: ReactNode;
    onLoad?: () => void;
    onError?: (error: Error) => void;
  }

  export interface GoogleMapProps {
    mapContainerClassName?: string;
    center: { lat: number; lng: number };
    zoom: number;
    options?: google.maps.MapOptions;
    onLoad?: (map: GoogleMap) => void;
    children?: ReactNode;
  }

  export interface MarkerProps {
    position: { lat: number; lng: number };
    onClick?: () => void;
    icon?: {
      url: string;
      scaledSize: google.maps.Size;
    };
  }

  export interface InfoWindowProps {
    position: { lat: number; lng: number };
    onCloseClick?: () => void;
    children?: ReactNode;
  }

  export const GoogleMap: ComponentType<GoogleMapProps>;
  export const Marker: ComponentType<MarkerProps>;
  export const InfoWindow: ComponentType<InfoWindowProps>;
  export function useLoadScript(props: LoadScriptProps): {
    isLoaded: boolean;
    loadError: Error | undefined;
  };
} 