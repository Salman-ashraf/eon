export const formatCurrency = (value: number): string => {
  if (isNaN(value) || value === null || value === undefined) {
    return " ";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};
