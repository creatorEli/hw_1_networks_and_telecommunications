export function getErrorSyndrome(Vector) {
    let errorSyndrome = [0, 0, 0]

    errorSyndrome[0] = Vector[0] ^ Vector[1] ^ Vector[2] ^ Vector[3]
    errorSyndrome[1] = Vector[0] ^ Vector[1] ^ Vector[4] ^ Vector[5]
    errorSyndrome[2] = Vector[0] ^ Vector[2] ^ Vector[4] ^ Vector[6]

    return errorSyndrome
}