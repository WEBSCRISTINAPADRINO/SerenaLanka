/// <reference types="node" />
/// <reference types="axios" />
/// <reference types="sharp" />

declare module 'axios' {
  export interface AxiosInstance {
    request<T = any>(config: AxiosRequestConfig): Promise<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    options<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  }
}

declare module 'sharp' {
  interface Sharp {
    resize(width?: number, height?: number, options?: any): Sharp;
    toBuffer(): Promise<Buffer>;
    toFile(fileOut: string): Promise<{ info: any }>;
  }
  function sharp(input?: string | Buffer): Sharp;
  export = sharp;
} 