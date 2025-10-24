export function getCountOf1(Vector) {
    let count = 0;
    for (let i = 0; i < Vector.length; i++) if (Vector[i] == 1) count++;
    return count
}