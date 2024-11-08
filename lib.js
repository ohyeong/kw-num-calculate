function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num) {   // 소수 판별
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function factorial(num) {
    if (num < 0 || num > 15) return -1;
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

module.exports = {
    avg,
    prime,
    factorial
}