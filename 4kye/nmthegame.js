// This kata explores writing an AI for a two player, turn based game called NIM.

// The Board
// The board starts out with several piles of straw. Each pile has a random number of straws.

// Pile 0: ||||

// Pile 1: ||

// Pile 2: |||||

// Pile 3: |

// Pile 4: ||||||

// ...or more concisely: [4,2,5,1,6]
// The Rules
// The players take turns picking a pile, and removing any number of straws from the pile they pick
// A player must pick at least one straw
// If a player picks the last straw, she wins!
// The Task
// In this kata, you have to write an AI to play the straw picking game.

// You have to encode an AI in a function choose_move (or chooseMove, or choose-move) that takes a board, represented as a list of positive integers, and returns

// [pile_index, number_of_straws]
// Which refers to an index of a pile on the board, and some none-zero number of straws to draw from that pile.

// The test suite is written so that your AI is expected to play 50 games and win every game it plays.

function chooseMove(state) {
    // Calculate the XOR of all pile sizes
    let xor = state.reduce((acc, val) => acc ^ val, 0);

    // If the XOR is zero, the current position is losing, so we can't force a win
    // In this case, just pick any pile and take one straw (since we have to make a move)
    if (xor === 0) {
        for (let i = 0; i < state.length; i++) {
            if (state[i] > 0) {
                return [i, 1];
            }
        }
    }

    // Otherwise, find a move that makes the XOR of all piles zero
    for (let i = 0; i < state.length; i++) {
        let target = state[i] ^ xor;
        if (target < state[i]) {
            return [i, state[i] - target];
        }
    }

    // If no move is found (shouldn't happen if the input is valid), return a default move
    return [0, 1];
}

// Example usage:
console.log(chooseMove([3, 4, 5])); // Example output: [0, 2]
27 seconds agoRefactorDiscuss
6 kyu
Transform To Prime
C++:
#include <vector>
#include <numeric>

using namespace std;

bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

int nextPrime(int n) {
    while (!isPrime(n)) {
        n++;
    }
    return n;
}

int minimumNumber(vector<int> numbers) {
    int sum = accumulate(numbers.begin(), numbers.end(), 0);
    int prime = nextPrime(sum);
    return prime - sum;
}