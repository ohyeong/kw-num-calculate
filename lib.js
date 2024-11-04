function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num) {   // 소수 판별
    return false;
}

function factorial(num) {
    return -1;
}

module.exports = {
    avg,
    prime,
    factorial
}