import React from "react";
const CUREENCY_FORMATTER = new Intl.NumberFormat("en-IN", {
  currency: "USD",
  style: "currency",
});

const formatCurrency = (number: number) => {
  return CUREENCY_FORMATTER.format(number);
};

export default formatCurrency;
