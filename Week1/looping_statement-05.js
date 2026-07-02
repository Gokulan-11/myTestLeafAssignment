function printOddNumbers(num) {
    for (let i = 0; i <= num; i++) {
        if ((i % 2) > 0) {
            console.log(`The number ${i} is an Odd number`)
        }


    }
}

printOddNumbers(25);