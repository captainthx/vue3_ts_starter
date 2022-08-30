export const receiptNumber = (): string => {
  const today = new Date();
  return (
    "EXP-" +
    today.getFullYear() +
    today.getMonth() +
    today.getDay() +
    today.getMilliseconds()
  );
};
