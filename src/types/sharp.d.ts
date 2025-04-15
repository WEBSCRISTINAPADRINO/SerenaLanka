declare module 'sharp' {
  export interface SharpOptions {
    failOnError?: boolean;
    limitInputPixels?: boolean;
    sequentialRead?: boolean;
  }

  export interface ResizeOptions {
    width?: number;
    height?: number;
    fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
    position?: 'center' | 'top' | 'right top' | 'right' | 'right bottom' | 'bottom' | 'left bottom' | 'left' | 'left top';
    background?: string | object;
    withoutEnlargement?: boolean;
  }

  export interface OutputOptions {
    quality?: number;
    progressive?: boolean;
    chromaSubsampling?: string;
  }

  export interface SharpInstance {
    resize(width?: number, height?: number, options?: ResizeOptions): SharpInstance;
    jpeg(options?: OutputOptions): SharpInstance;
    png(options?: OutputOptions): SharpInstance;
    webp(options?: OutputOptions): SharpInstance;
    toBuffer(): Promise<Buffer>;
    toFile(output: string): Promise<{ info: any }>;
  }

  function sharp(input?: string | Buffer | object, options?: SharpOptions): SharpInstance;
  export default sharp;
} 