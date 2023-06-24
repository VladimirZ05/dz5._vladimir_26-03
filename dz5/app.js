function convert() {
  const amountElement = document.getElementById("amount");
  const fromElement = document.getElementById("from");
  const toElement = document.getElementById("to");
  const resultElement = document.getElementById("result");

  const amount = parseFloat(amountElement.value);
  const fromCurrency = fromElement.value;
  const toCurrency = toElement.value;

  let result;

  if (fromCurrency === "som" && toCurrency === "dollar") {
    result = somToDollar(amount);
  } else if (fromCurrency === "dollar" && toCurrency === "som") {
    result = dollarToSom(amount);
  } else if (fromCurrency === "som" && toCurrency === "euro") {
    result = somToEuro(amount);
  } else if (fromCurrency === "euro" && toCurrency === "som") {
    result = euroToSom(amount);
  } else if (fromCurrency === "dollar" && toCurrency === "euro") {
    result = dollarToEuro(amount);
  } else if (fromCurrency === "euro" && toCurrency === "dollar") {
    result = euroToDollar(amount);
  } else {
    result = amount;
  }

  resultElement.textContent = result.toFixed(2);
}

function somToDollar(amount) {
  const exchangeRate = 0.011;
  return amount * exchangeRate;
}

function dollarToSom(amount) {
  const exchangeRate = 87.30;
  return amount * exchangeRate;
}

function somToEuro(amount) {
const exchangeRate = 0.01;
return amount * exchangeRate;
}

function euroToSom(amount) {
const exchangeRate = 95.46;
return amount * exchangeRate;
}

function dollarToEuro(amount) {
const exchangeRate = 0.91;
return amount * exchangeRate;
}

function euroToDollar(amount) {
const exchangeRate = 1.09;
return amount * exchangeRate;
}
