const fibonacci = function(num) {
    if (typeof num instanceof String) {
        num = Number(num);
    }
    if (num < 0) {
        return 'OOPS'
    }
    else if (num == 0) {
        return 0;
    }
    else if (num == 1) {
        return 1;
    }
    else {
        return (fibonacci(num-1) + fibonacci(num-2));
    }
};

// Do not edit below this line
module.exports = fibonacci;
