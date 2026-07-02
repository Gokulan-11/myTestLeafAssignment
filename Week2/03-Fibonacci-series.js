function fibonacci(n) {

    if (n === 0) {
        return `Fibonacci Series for the given number ${n} is 0`
    }

    let num1 = 0;
    let num2 = 1;


    for (let i = 2; i <= n; i++) {

        let next = num1 + num2;

        num1 = num2
        num2 = next;

    }

    return num2;

}

console.log(`Fibonacci Series for the given number 0 is ${fibonacci(0)}`);
console.log(`Fibonacci Series for the given number 1 is ${fibonacci(1)}`);
console.log(`Fibonacci Series for the given number 5 is ${fibonacci(5)}`);
console.log(`Fibonacci Series for the given number 8 is ${fibonacci(8)}`);
console.log(`Fibonacci Series for the given number 20 is ${fibonacci(20)}`);

