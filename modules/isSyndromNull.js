export function isSyndromeNull(errorSyndrome) {
    for (let i = 0; i < errorSyndrome.length; i++) {
        if (errorSyndrome[i] == 1) return false
    }
    return true
}