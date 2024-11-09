// types/api.d.ts
export interface SearchParams {
    keyword?: string;
    modelNumber?: string;
  }
  
  export interface ApiResponse<T> {
    data: T;
    error?: string;
  }