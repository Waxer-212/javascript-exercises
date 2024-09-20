const fibonacci = function(position) {
    if(position < 0) return 'OOPS';
    
    if(typeof position === 'string') {
        return fibonacci(parseInt(position));
    }
    if(position === 0) return 0;
    let firstNumber = 1;
    let secondNumber = 1;
    
    position -= 2;

    while(position > 0)
    {
        let temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp + secondNumber;
        position--;
    }

    return secondNumber;

};

// Do not edit below this line
module.exports = fibonacci;
