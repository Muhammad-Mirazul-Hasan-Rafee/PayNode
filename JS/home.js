// add money to the account


// step-1: add event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click' , function(event){
    // prevent page reload after form submit
    event.preventDefault();

    // get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    

    // get the pin number
    const pinNumber = document.getElementById('input-pin').value;
    

})