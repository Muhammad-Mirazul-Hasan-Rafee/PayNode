/**
 * input field hle value diye access korte hy
 * onno kisu hle innerText use kora lage
 */



    /**----------------------------------------Add Money....................................................... */


// step-1: add event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click' , function(event){
    // prevent page reload after form submit
    event.preventDefault();

    // get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    

    // get the pin number
    const pinNumberInput = document.getElementById('input-pin').value;

    // verify pin number(wrong way)
    if(pinNumberInput === '1234'){
        

        // get the current balance
        const balance = document.getElementById('account-balance').innerText;
        
        
        // add addMoneyInput and balance
        const addMoneyAmount = parseFloat(addMoneyInput);
        const balanceAmount = parseFloat(balance);

        const updatedBalance = addMoneyAmount + balanceAmount;
    

        // update the balance in the ui/dom

        document.getElementById('account-balance').innerText = updatedBalance;



    }
    else{
        alert('Failed! Please try again!');
    }
});



    /**----------------------------------------Cash out money....................................................... */

// step-1: add event handler to the cash out button inside the form
document.getElementById('btn-cash-out').addEventListener('click' , function(event){

    // prevent page reload after form submit
    event.preventDefault();

    // get Cashout amount 
    const cashoutInput = document.getElementById('input-cashout').value;

    // get pin number
    const inputPinNumber = document.getElementById('input-cashout-pin').value;

    // verify pin number(wrong way)
    if(inputPinNumber === '1234'){

        // get the current balance
        const balance = document.getElementById('account-balance').innerText;

         // reduce operation between addMoneyInput and balance
         const inputAmount = parseFloat(cashoutInput);
         const balanceAmountNumber = parseFloat(balance);

         const remainingAmount = balanceAmountNumber - inputAmount;

        //  check if input amount is valid and less than or equal to balance

         if (isNaN(inputAmount) || inputAmount <= 0 || inputAmount > balanceAmountNumber) {
            alert("Invalid cashout amount!");
            return;
        }

         // reduce the balance in the ui/dom
         document.getElementById('account-balance').innerText = remainingAmount;
         
        
    }
    else{
        alert("Sorry! Try again!");
    } 


});