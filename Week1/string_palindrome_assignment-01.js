function stringReverse(input) {

    let stringLength = input.length;
    let reverseString = "";

    for (let i = stringLength - 1; i >= 0; i--) {
        
        reverseString = reverseString + input.charAt(i);
       
    }
     return reverseString;
}

function isPalindrome(input){

    if (input === stringReverse(input)) {
        console.log(`The entered String ${input} is a Palindrome`);
        
    }
    else{
         console.log(`The entered String ${input} is Not a Palindrome`);
    }
}

isPalindrome(`madam`);
isPalindrome(`racecar`);
isPalindrome(`testing`);