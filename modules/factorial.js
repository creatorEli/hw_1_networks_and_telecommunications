export function factorial(a) {
    let res = 1;
    for (let i = 1; i <= a; i++) {
        res *= i
    }
    return res
}