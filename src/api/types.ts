export type ApiResponse<T> =
  | {
      isSuccess: true;
      data: T;
    }
  | { isSuccess: false; error?: string };
