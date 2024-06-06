export const validateNbrPlayer = (value: number): boolean => {
  return value > 0;
};

export const validateDay = (value: Date | null): boolean => {
  return value !== null && value > new Date();
};

export const validateHour = (value: string): boolean => {
  return value.trim() !== "";
};
