export const validateAge = (num: number): string => {
  if (isNaN(num)) {
    return "Age must be a number.";
  }

  if (num <= 0) {
    return "Age must be greater than 0.";
  }

  if (num > 200) {
    return "Age must not exceed 200.";
  }

  return ""; // valid
};
