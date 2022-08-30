const Money = Intl.NumberFormat("th-TH", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const Number = Intl.NumberFormat();

const MoneyFormat = (payload: any) => {
  return Money.format(payload);
};

const NumFormat = (payload: any) => {
  return Number.format(payload);
};

const PhoneFormat = (payload: any) => {
  if (payload.length === 9) {
    return payload.replace(/(\d{3})(\d{3})(\d{3})/, "$1-$2-$3");
  } else if (payload.length === 10) {
    return payload.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  } else {
    return payload;
  }
};

const IdentityFormat = (payload: any) => {
  if (payload.length === 13) {
    return payload.replace(
      /(\d{1})(\d{4})(\d{5})(\d{2})(\d{1})/,
      "$1-$2-$3-$4-$5"
    );
  } else {
    return payload;
  }
};

const DateFormat = (payload: any) => {
  const today = new Date(payload);
  let day: any = today.getDay();
  let month: any = today.getMonth();
  let year: any = today.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }

  const date = day + "/" + month + "/" + year;
  return date;
};

export { MoneyFormat, NumFormat, PhoneFormat, IdentityFormat, DateFormat };
