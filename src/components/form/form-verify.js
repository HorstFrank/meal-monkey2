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

const createMsg = createElement('p',{})

// function createMsg (msg) {
//     createElement('p',{innerText:msg})
// }




const inputpswd0 = createOTPinputElement();
const inputpswd1 = createOTPinputElement();
const inputpswd2 = createOTPinputElement();
const inputpswd3 = createOTPinputElement();

export const formVerify  = () => {

const form = createElement('form',{
className: 'xx',
children: [
    createElement('h1',{
        className: 'title',
        innerText: 'We have sent an OTP to your Mobile'
    }),
    createElement('p',{
        className: 'title',
        innerText: 'Please check your mobile number 071*****12 continue to reset your password'
    }),
    createMsg,
    createElement('div',{
        className: 'otp-container',
        children: [
            inputpswd0,inputpswd1,inputpswd2,inputpswd3
        ]
    }),
    createElement('input',{
        className: 'otp-container',
        value: 'Next',
        className: 'btn btn-solid',
        type: 'submit',
    })
],
onsubmit: function (event) {
    event.preventDefault();
    const secretPswd = '3217';
    const input = inputpswd0.value+inputpswd1.value+inputpswd2.value+inputpswd3.value;
    
    if (secretPswd === input) {
        // alert(`${input} ist richtig`)
         createMsg.innerText = 'Willkommen';
        } else {
        createMsg.innerText = 'VERSCHWINDE';

        // alert('verschwinde');
    }
}
})
 
return form

}