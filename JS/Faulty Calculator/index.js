function faultyCalculator(operator, Number1, Number2) {
    switch (operator) {
        case '+':
            console.log(Number1 - Number2);
            break;
        case '*':
            console.log(Number1 + Number2);
            break;
        case '-':
            console.log(Number1 / Number2);
            break;
        case '/':
            console.log(Number1 ** Number2);
            break;
        default:
            return "invalid operator";
    }
}

faultyCalculator('+', 4, 2);  
faultyCalculator('*', 4, 2);  
faultyCalculator('-', 4, 2);  
faultyCalculator('/', 4, 2);  

