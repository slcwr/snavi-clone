// types/api.d.ts
export interface SearchParams {
    keyword?: string;
    modelNumber?: string;
    modelName?: string;
  }
  
  export interface ApiResponse<T> {
    data: T;
    error?: string;
  }