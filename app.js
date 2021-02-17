'use strict'
let firstName = prompt('what is your first name?');
let age = prompt('enter your age');
const print = function (firstName,age){
    console.log ('your first name is ' + firstName + ' ' + 'and your age is ' + age);
    return(firstName,age);
}
print(firstName,age);
