import * as readline from 'node:readline/promises';
import {
    stdin as input,
    stdout as output,
} from 'node:process';

import { infoVecLen } from '../main.js';

export async function readInfoVector() {
    const rl = readline.createInterface({ input, output });

    const answer = await rl.question(
        'Введите информационный вектор: '
    );

    rl.close();
    //console.log(`result: ${answer}`);
    //return answer

    if (answer.length != 4) {
        throw Error("Информационный вектор должен быть длинной 4!");
    }

    let infoVector = [];

    if (answer == null) {
        console.log("необходимо ввести информационный вектор!");
        return;
    }

    for (let i = 0; i < infoVecLen; i++) {
        switch (answer[i]) {
            case "0":
                infoVector[i] = 0;
                break;
            case "1":
                infoVector[i] = 1;
                break;
            default:
                //console.log()
                throw Error("Информационный вектор должен содержать только 0 или 1!");
        }
    }

    return infoVector;
}
