// set event handler
document.getElementById('btn-login').addEventListener('click' , function(event){
    // prevent default behaviour-reloading browser
    event.preventDefault();
    

    // get the phone number and pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('login-pin').value;

    if(phoneNumber === '5' && pinNumber=== '1234'){
        console.log('log in succcess!');
        window.location.href = '/home.html';

    }
    else{
        alert('you are wrong!');

    }



})