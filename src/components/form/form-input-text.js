export const formInput = (str) => {

// str = (typeof str != 'undefined') ? str : 'bla';
// str = 'xxx';

const form = document.createElement('form');
const input = document.createElement('input');

input.type = 'text';
input.placeholder = str;

form.append(input);


return form

}