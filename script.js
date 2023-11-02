document.addEventListener('DOMContentLoaded', (event) => {
    const billTotal = document.getElementById('bill_total');
    const tipSlider = document.getElementById('tip_slider');
    const tipPercentage = document.getElementById('tip_percentage');
    const tipAmount = document.getElementById('tip_amount');
    const totalBill = document.getElementById('total_bill');

    document.getElementById('tip-form').addEventListener('input', function() {
        let bill = parseFloat(billTotal.value);
        let tip = parseFloat(tipSlider.value);

        if (isNaN(bill)) {
            alert("Please enter a valid number for the bill total.");
            return;
        }

        let tipValue = bill * (tip / 100);
        let totalValue = bill + tipValue;

        tipPercentage.value = `${tip.toFixed(2)}%`;
        tipAmount.value = `$${tipValue.toFixed(2)}`;
        totalBill.value = `$${totalValue.toFixed(2)}`;
    });
});
