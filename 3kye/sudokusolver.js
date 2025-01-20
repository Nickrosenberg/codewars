// Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.

// The Sudokus tested against your function will be "easy" (i.e. determinable; there will be no need to assume and test possibilities on unknowns) and can be solved with a brute-force approach.

// For Sudoku rules, see the Wikipedia article.

// var puzzle = [
//             [5,3,0,0,7,0,0,0,0],
//             [6,0,0,1,9,5,0,0,0],
//             [0,9,8,0,0,0,0,6,0],
//             [8,0,0,0,6,0,0,0,3],
//             [4,0,0,8,0,3,0,0,1],
//             [7,0,0,0,2,0,0,0,6],
//             [0,6,0,0,0,0,2,8,0],
//             [0,0,0,4,1,9,0,0,5],
//             [0,0,0,0,8,0,0,7,9]];

// sudoku(puzzle);
// /* Should return
// [[5,3,4,6,7,8,9,1,2],
// [6,7,2,1,9,5,3,4,8],
// [1,9,8,3,4,2,5,6,7],
// [8,5,9,7,6,1,4,2,3],
// [4,2,6,8,5,3,7,9,1],
// [7,1,3,9,2,4,8,5,6],
// [9,6,1,5,3,7,2,8,4],
// [2,8,7,4,1,9,6,3,5],
// [3,4,5,2,8,6,1,7,9]] 

function sudoku(puzzle) {
    // Функция для проверки, можно ли вставить число в заданную позицию
    function isValid(num, row, col) {
        // Проверка строки
        for (let i = 0; i < 9; i++) {
            if (puzzle[row][i] === num) {
                return false;
            }
        }
        // Проверка столбца
        for (let i = 0; i < 9; i++) {
            if (puzzle[i][col] === num) {
                return false;
            }
        }
        // Проверка 3x3 квадрата
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (puzzle[startRow + i][startCol + j] === num) {
                    return false;
                }
            }
        }
        return true;
    }

    // Функция для решения судоку
    function solve() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (puzzle[row][col] === 0) { // Найти пустую ячейку
                    for (let num = 1; num <= 9; num++) { // Пробуем числа от 1 до 9
                        if (isValid(num, row, col)) {
                            puzzle[row][col] = num; // Вставляем число
                            if (solve()) { // Рекурсивно пытаемся решить дальше
                                return true;
                            }
                            puzzle[row][col] = 0; // Если не удалось, откатываем
                        }
                    }
                    return false; // Если не нашли подходящее число
                }
            }
        }
        return true; // Если все ячейки заполнены
    }

    solve(); // Запускаем решение
    return puzzle; // Возвращаем решенную судоку
}

// Пример использования
var puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
];

console.log(sudoku(puzzle));