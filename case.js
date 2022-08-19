// console.log("case.js added") use for test purpose


function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');

    const caseNumberString = caseNumberField.value;

    const previousCaseNumber = parseInt(caseNumberString);





    let newCaseNumber;

    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
        // totalCaseAmount = newCaseNumber * previousCaseAmount;


    } else {

        newCaseNumber = previousCaseNumber - 1; 
        // 

    }


    caseNumberField.value = newCaseNumber;

    return newCaseNumber;

}

function updateCaseTotalAmount(newCaseNumber) {


    if (newCaseNumber >= 0) {

        totalCaseAmount = newCaseNumber * 59;

        // case amount
        const caseAmountField = document.getElementById('case-amount');
        caseAmountField.innerText = totalCaseAmount;



    } else {
        alert('select a valid number');

    }



}

document.getElementById('btn-case-plus').addEventListener('click', function() {



    const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalAmount(newCaseNumber);

    calculateSubTotal(); // function phone e likha ase




})

document.getElementById('btn-case-minus').addEventListener('click', function() {

    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalAmount(newCaseNumber);// // 

    calculateSubTotal(); // function phone e likha ase

})