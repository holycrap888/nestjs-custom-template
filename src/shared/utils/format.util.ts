export function formatResponse<T>(data: T): { success: boolean; data: T } {
  return {
    success: true,
    data,
  };
}