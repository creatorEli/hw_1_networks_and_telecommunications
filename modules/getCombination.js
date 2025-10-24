import { factorial } from "./factorial.js"

export function getCombination(n, i) {
    //sconsole.log(factorial(n) + " / (" + factorial(n - i) + " * " + factorial(i) + ")")
    return factorial(n) / (factorial(n - i) * factorial(i))
}