var tipCalculatorForm = document.querySelector('#tc-form');
var billTotalInput = document.querySelector('#bill-total');
const tipPercentageSlider = document.querySelector('#tip-percent');
const tipPercentText = document.querySelector('#tip-percent-text');
var tipAmountInput = document.querySelector('#tip-amount');
var totalBillInput = document.querySelector('#total-bill-tip');

tipCalculatorForm.addEventListener('input', (event) => {

  var totBill = parseFloat(billTotalInput.value);
  var tipPercentage = parseFloat(tipPercentageSlider.value);

  if (isNaN(totBill)) {
    alert("Please enter a valid number for the Bill Total.");
    return;
}

  const tipAmount = totBill * (tipPercentage / 100);
  const totalBill = totBill + tipAmount;

  tipAmountInput.value = tipAmount.toFixed(2);
  totalBillInput.value = totalBill.toFixed(2);
  tipPercentText.value = tipPercentage;
});