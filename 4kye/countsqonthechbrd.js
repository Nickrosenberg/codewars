// Task
// You are given a chessBoard, a 2d integer array that contains only 0 or 1. 0 represents a chess piece and 1 represents a empty grid. It's always square shape.

// Your task is to count the number of squares made of empty grids.

// The smallest size of the square is 2 x 2. The biggest size of the square is n x n, where n is the size of chess board.

// A square can overlap the part of other squares. For example:

// If

// chessBoard=[
//   [1,1,1],
//   [1,1,1],
//   [1,1,1]
// ]
// ...there are four 2 x 2 squares in the chess board:

// [1,1, ]  [ ,1,1]  [ , , ]  [ , , ]
// [1,1, ]  [ ,1,1]  [1,1, ]  [ ,1,1]
// [ , , ]  [ , , ]  [1,1, ]  [ ,1,1]
// And one 3 x 3 square:

// [1,1,1]
// [1,1,1]
// [1,1,1]
// Your output should be an object/dict. Each item in it should be: size:number, where size is the square's size, and number is the number of squares.

// For example, if there are four 2 x 2 squares and one 3 x 3 square in the chess board, the output should be: {2:4,3:1} (or any equivalent hash structure in your language). The order of items is not important, {3:1,2:4} is also a valid output.

// If there is no square in the chess board, just return {}.

// Note
// 2 <= chessBoard.length <= 400
// 5 fixed testcases

// 100 random testcases, testing for correctness of solution

// 100 random testcases, testing for performance of code

// All inputs are valid.

// Pay attention to code performance.

// If my reference solution gives the wrong result in the random tests, please let me know(post an issue).

// Example
// For

// chessBoard = [
//   [1,1],
//   [1,1]
// ]
// the output should be {2:1}.

// For

// chessBoard = [
//   [0,1],
//   [1,1]
// ]
// the output should be {}.

// For

// chessBoard = [
//   [1,1,1],
//   [1,1,1],
//   [1,1,1]
// ]
// the output should be {2:4,3:1}.

// For

// chessBoard = [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]
// the output should be {}.

function count(chessBoard) {
    const n = chessBoard.length;
    if (n < 2) return {}; // Если размер доски меньше 2, возвращаем пустой объект

    const dp = Array.from({ length: n }, () => Array(n).fill(0));
    const result = {};

    // Заполняем dp массив
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (chessBoard[i][j] === 1) {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1; // На краях доски максимальный квадрат может быть только 1x1
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                }

                // Увеличиваем счетчик для квадратов размером 2 и больше
                for (let size = 2; size <= dp[i][j]; size++) {
                    if (!result[size]) {
                        result[size] = 0;
                    }
                    result[size]++;
                }
            }
        }
    }

    return result;
}

// Примеры использования
console.log(count([[1,1],[1,1]])); // {2: 1}
console.log(count([[0,1],[1,1]])); // {}
console.log(count([[1,1,1],[1,1,1],[1,1,1]])); // {2: 4, 3: 1}
console.log(count([[1,1,1],[1,0,1],[1,1,1]])); // {}