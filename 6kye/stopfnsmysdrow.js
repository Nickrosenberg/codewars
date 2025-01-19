// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

function spinWords(string) {
    return string.split(' ').map(word => {
        // Проверяем длину слова
        if (word.length >= 5) {
            // Если длина 5 или больше, переворачиваем слово
            return word.split('').reverse().join('');
        }
        // Если меньше 5, возвращаем слово без изменений
        return word;
    }).join(' '); // Объединяем слова обратно в строку
}

// Примеры использования
console.log(spinWords("Hey fellow warriors")); // "Hey wollef sroirraw"
console.log(spinWords("This is a test")); // "This is a test"
console.log(spinWords("This is another test")); // "This is rehtona test"