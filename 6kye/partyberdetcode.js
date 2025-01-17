// In telecomunications we use information coding to detect and prevent errors while sending data.

// A parity bit is a bit added to a string of binary code that indicates whether the number of 1-bits in the string is even or odd. Parity bits are used as the simplest form of error detecting code, and can detect a 1 bit error.

// In this case we are using even parity: the parity bit is set to 0 if the number of 1-bits is even, and is set to 1 if odd.

// We are using them for the transfer of ASCII characters in binary (7-bit strings): the parity is added to the end of the 7-bit string, forming the 8th bit.

// In this Kata you are to test for 1-bit errors and return a new string consisting of all of the correct ASCII caracters in 7 bit format (removing the parity bit), or "error" in place of ASCII characters in which errors were detected.

// For more information on parity bits: https://en.wikipedia.org/wiki/Parity_bit

// Examples
// Correct 7 bit string with an even parity bit as the 8th bit:

// "01011001" <-- The "1" on the right is the parity bit.
// In this example, there are three 1-bits. Three is an odd number, and the parity bit is set to 1. No errors are detected, so return "0101100" (7 bits).

// Example of a string of ASCII characters:

// "01011001 01101110 01100000 01010110 10001111 01100011"
// This should return:

// "0101100 error 0110000 0101011 error 0110001"

function parityBit(binary) {
    // Разделяем входную строку на отдельные 8-битные блоки
    const bytes = binary.split(' ');

    // Массив для хранения результатов
    const result = [];

    // Обрабатываем каждый 8-битный блок
    for (let byte of bytes) {
        // Проверяем, что длина блока равна 8
        if (byte.length !== 8) {
            result.push("error");
            continue;
        }

        // Получаем 7-битную часть и бит четности
        const dataBits = byte.slice(0, 7);
        const parityBit = byte[7];

        // Считаем количество единиц в 7-битной части
        const countOnes = dataBits.split('').filter(bit => bit === '1').length;

        // Определяем, должен ли бит четности быть 0 или 1
        const expectedParityBit = countOnes % 2 === 0 ? '0' : '1';

        // Проверяем, совпадает ли бит четности с ожидаемым
        if (parityBit === expectedParityBit) {
            result.push(dataBits); // Если нет ошибок, добавляем 7-битную часть
        } else {
            result.push("error"); // Если есть ошибка, добавляем "error"
        }
    }

    // Возвращаем результат в виде строки, соединяя элементы массива через пробел
    return result.join(' ');
}

// Примеры использования
console.log(parityBit("01011001 01101110 01100000 01010110 10001111 01100011")); 
// Ожидаемый вывод: "0101100 error 0110000 0101011 error 0110001"