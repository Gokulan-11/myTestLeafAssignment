//named function
function userProfile(name) {
    console.log(`Hello ${name}!`);

}

userProfile(`Gokul`);

//arrow function
let double = (num) => {
    return num * 2;
}

console.log(`Doubled value of the num is ${double(75)}`);
console.log(`Doubled value of the num is ${double(23)}`);

//anonymous function
// let anonymous = function () {
//     console.log(`This message is delayed by 2 seconds`);

// }

// setTimeout(anonymous, 2000);

setTimeout(function () {
    console.log(`This Message is delayed by 2seconds`);

}, 2000);

//callback function
function getUserData(callBackFunction) {
    setTimeout(function () {
        callBackFunction();
    }, 3000);
}

function callBackFunction() {
    console.log(`Call Back function after 3seconds`);

}

getUserData(callBackFunction);