import {createElement} from "../utils/createElement.js";

function createOTPinputElement () {

    const inputpswd = createElement('input',{
        type: 'password',
        placeholder: '*',
        className: 'otp-element',
        maxLength: '1',
    });
    // inputpswd.type = 'password';
    // inputpswd.classList.add('otp-element');
    return inputpswd;

}

// function 


export const formVerify  = () => {

    const form = document.createElement('form')
    const title = document.createElement('h1')
    const subline = document.createElement('p')
    const button = document.createElement('button')
    const inputpswdContainer = document.createElement('div')
    const fallbackline = document.createElement('p')

    
    title.innerText = 'We have sent an OTP to your Mobile';
    title.class = 'title'
    subline.innerText = 'Please check your mobile number 071*****12 continue to reset your password';
    subline.class = 'title'
    
    const inputpswd0 = createOTPinputElement();
    const inputpswd1 = createOTPinputElement();
    const inputpswd2 = createOTPinputElement();
    const inputpswd3 = createOTPinputElement();
    
    inputpswdContainer.classList.add('otp-container');
    inputpswdContainer.append(inputpswd0,inputpswd1,inputpswd2,inputpswd3)
    


    button.innerText = 'Next'
    button.addEventListener('click', function (event) {
        event.preventDefault();
        
        const secretPswd = '3217';
        const input = '' +inputpswd0.value+inputpswd1.value+inputpswd2.value+inputpswd3.value;



        if (secretPswd === input) {
            alert(`${input} ist richtig`)
        } else {
            alert('verschwinde');
        }
    
    
    })

    button.type = 'submit';
    // button.className  = 'btn'
    // button.className  = 'btn-sjkdfh'
    button.classList.add('btn')
    button.classList.add('btn-solid')

    fallbackline.innerHTML = "Didn't Receive? <a href='#'>Click Here</a>"

    form.append(title,subline,inputpswdContainer,button,fallbackline)

// form



return form

}