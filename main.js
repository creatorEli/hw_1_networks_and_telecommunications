import { readInfoVector } from "./modules/readInfoVector.js";
import { getCodeVector } from "./modules/getCodeVector.js";
import { stringToInt } from "./modules/stringToInt.js";
import { getErrorSyndrome } from "./modules/getErrorSyndrome.js";
import { getCombination } from "./modules/getCombination.js";
import { getCountOf1 } from "./modules/getCountOf1.js";
import { isSyndromeNull } from "./modules/isSyndromNull.js";
import { getDetectingAbility } from "./modules/getDetectingAbility.js";


import * as readline from 'node:readline/promises';
import {
    stdin as input,
    stdout as output,
} from 'node:process';


export const infoVecLen = 4;

async function main() {
    let detectedErrors = [0, 0, 0, 0, 0, 0, 0]
    let mainInfoVector;
    try {
        mainInfoVector = await readInfoVector();
        //console.log('Получен ввод:', userInput);
    } catch (error) {
        console.error('Ошибка чтения:', error);
        return;
    }

    let mainCodeVector = getCodeVector(mainInfoVector);

    // console.log(1 ^ 0 ^ 1 ^ 1)
    // console.log(1 ^ 1 ^ 0 ^ 0)
    // console.log(0 ^ 0 ^ 0 ^ 1)

    for (let i = 1; i < 2 ** mainCodeVector.length; i++) {
        let resultVector = [0, 0, 0, 0, 0, 0, 0]

        let stringNumber = i.toString(2)
        if (stringNumber.length < mainCodeVector.length) {
            while (stringNumber.length < 7) {
                stringNumber = "0" + stringNumber
            }
        }
        //console.log(stringNumber)

        let errorVector = stringToInt(stringNumber)

        for (let j = 0; j < errorVector.length; j++) {
            resultVector[j] = mainCodeVector[j] ^ errorVector[j]
        }

        let errorSyndrome = getErrorSyndrome(resultVector)

        if (!isSyndromeNull(errorSyndrome)) {
            detectedErrors[getCountOf1(errorVector) - 1]++;
        }
    }

    // Выводим результаты анализа
    console.log("--------------------------------------");
    console.log("| i | Сочетания |   N0   |    C0     |");
    console.log("--------------------------------------");
    for (var i = 0; i < 7; i++) {
        // Вычисляем комбинацию и способность обнаружения ошибок
        let comb = getCombination(7, i + 1);
        let ability = getDetectingAbility(comb, detectedErrors[i])
        console.log("| " + (i + 1) + " |    " + (comb < 10 ? " " : "") + comb + "     |  " + detectedErrors[i] + (detectedErrors[i] < 10 ? " " : "") + "    | " + ability + (ability == 1 || ability == 0 ? "        " : "") + (ability < 1 && ability > 0 ? "      " : "") + " |")
        console.log("--------------------------------------");
    }

    const rl = readline.createInterface({ input, output });

    const answer = await rl.question(
        'Нажимте любую клавишу для завершеня работы программы'
    );

    rl.close();
}

main();