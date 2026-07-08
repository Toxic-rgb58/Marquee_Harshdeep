let result = 0;
let operator = '';

function calculate(num1, num2, op) {
    switch(op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.error("Cannot divide by zero");
                return null;
            }
            break;
        default:
            console.error("Invalid operator");
            return null;
    }
    return result;
}

result = calculate(10, 5, '+');
console.log(`Result: ${result}`);
