const sumAll = function(first, last) {
    if (typeof first != "number" || typeof last != "number") {
        return "ERROR";
    }
    if (first < 0 || last < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(first) || !Number.isInteger(last)) {
        return "ERROR";
    }
    if (first > last) {
        [first, last] = [last, first];
    }
    let sum = 0;
    for (let i = first; i <= last; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
