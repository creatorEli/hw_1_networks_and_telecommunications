import { infoVecLen } from '../main.js';

export function getCodeVector(infoVector) {
    if (infoVector.length != infoVecLen) {
        throw Error("некорректная длина входного вектора");
    }

    let codeVector = [0, 0, 0, 0, 0, 0, 0];

    console.log("Получен информационный вектор: " + infoVector);

    codeVector[0] = infoVector[0];
    console.log(`Информационный бит ${infoVector[0]} помещен в позицию (индекс 0)`);

    codeVector[1] = infoVector[1];
    console.log(`Информационный бит ${infoVector[1]} помещен в позицию (индекс 1)`);

    codeVector[2] = infoVector[2];
    console.log(`Информационный бит ${infoVector[2]} помещен в позицию (индекс 2)`);

    codeVector[4] = infoVector[3];
    console.log(`Информационный бит ${infoVector[3]} помещен в позицию (индекс 4)`);

    console.log("Промежуточный кодовый вектор (без паритетных битов): " + codeVector);

    codeVector[3] = infoVector[0] ^ infoVector[1] ^ infoVector[2]
    console.log("Вычислен паритетный бит p1 (индекс 3): " + codeVector[3]);

    codeVector[5] = infoVector[0] ^ infoVector[1] ^ infoVector[3]
    console.log("Вычислен паритетный бит p2 (индекс 5): " + codeVector[5]);

    codeVector[6] = infoVector[0] ^ infoVector[2] ^ infoVector[3]
    console.log("Вычислен паритетный бит p3 (индекс 6): " + codeVector[6]);

    console.log("Конечный кодовый вектор: " + codeVector)

    return codeVector
}