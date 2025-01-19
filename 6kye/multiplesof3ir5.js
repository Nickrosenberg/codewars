// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
    if (number < 0) {
        return 0; // Если число отрицательное, возвращаем 0
    }

    let sum = 0; // Переменная для хранения суммы

    // Проходим по всем числам от 0 до number (не включая number)
    for (let i = 0; i < number; i++) {
        // Проверяем, является ли число кратным 3 или 5
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i; // Если да, добавляем его к сумме
        }
    }

    return sum; // Возвращаем итоговую сумму
}

// Примеры использования
console.log(solution(10)); // 23
console.log(solution(-5)); // 0
console.log(solution(0));  // 0
console.log(solution(15)); // 45