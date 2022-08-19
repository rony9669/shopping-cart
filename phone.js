// console.log("case.js added") use for test purpose


function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');

    const phoneNumberString = phoneNumberField.value;

    const previousPhoneNumber = parseInt(phoneNumberString);





    let newPhoneNumber;

    if (isIncrease === true) {
        newPhoneNumber = previousPhoneNumber + 1;
        // totalCaseAmount = newCaseNumber * previousCaseAmount;


    } else {

        newPhoneNumber = previousPhoneNumber - 1;
        // 

    }


    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;

}

function updatePhoneTotalAmount(newPhoneNumber) {

    if (newPhoneNumber >= 0) {

        totalPhoneAmount = newPhoneNumber * 1219;

        // case amount
        const phoneAmountField = document.getElementById('phone-amount');
        phoneAmountField.innerText = totalPhoneAmount;



    } else {
        alert('select a valid number');

    }

}
//Total amount  pabo id pass kore phone and case er jnno
function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;

}
//bujte hobe
function setTextElementValueById(elementId, value) {

    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;

}

function calculateSubTotal() {

    // calculate total

    const currentPhoneTotal = getTextElementValueById('phone-amount');
    const currentCaseTotal = getTextElementValueById('case-amount');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;

    setTextElementValueById('sub-total', currentSubTotal);


    //calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    // final amount calculation
    const finalAmount = currentSubTotal + taxAmount;

    setTextElementValueById('final-total', finalAmount);




}

document.getElementById('btn-phone-plus').addEventListener('click', function() {



    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalAmount(newPhoneNumber);

    calculateSubTotal();




})

document.getElementById('btn-phone-minus').addEventListener('click', function() {

    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalAmount(newPhoneNumber);
    calculateSubTotal();





})