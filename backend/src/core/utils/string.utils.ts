export const generateRandomTraceNumber = (length: number): string => {
  const randomVal = Math.random().toFixed(length);
  return randomVal.substring(2);
};
