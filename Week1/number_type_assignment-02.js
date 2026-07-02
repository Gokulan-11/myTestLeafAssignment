function numberType(number) {
    if(number > 0){
        return `Given number ${number} is a Positive Number`;
    }
    else if (number < 0) {
        return `Given number ${number} is a Negative Number`;
    }
    else{
        return `Given number ${number} is a Neutral Number`;
    }
}

console.log(numberType(5));
console.log(numberType(-6));
console.log(numberType(0));