export function stringToInt(stringNumber) {
    let result = []
    for (let i = 0; i < stringNumber.length; i++) {
        switch (stringNumber[i]) {
            case "0":
                result[i] = 0;
                break;
            case "1":
                result[i] = 1;
                break;
            default:
                //console.log()
                throw Error("Информационный вектор должен содержать только 0 или 1!");
        }
    }
    return result
}