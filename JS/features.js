// show cash out form
document.getElementById('btn-show-cash-out').addEventListener('click' , function(){
    // remove class from a tag by id and show cashout form
    document.getElementById('cash-out-form').classList.remove('hidden');

    // hide the add money form when cashing out
    document.getElementById('add-money-form').classList.add('hidden');

});

// show add money form and hide the cash out form
document.getElementById('input-add-money').addEventListener('click' , function(){

    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');

});