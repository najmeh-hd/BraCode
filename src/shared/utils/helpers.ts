export const formatAmount = (amount: number) => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return Intl.NumberFormat()
    .format(amount)
    .replace(/[0-9]/g, (w) => persianDigits[Number(w)]);
};

export const toPersianDigit = (str: string | number): string => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return (str ?? "")
    .toString()
    .replace(/[0-9]/g, (w) => persianDigits[Number(w)]);
};