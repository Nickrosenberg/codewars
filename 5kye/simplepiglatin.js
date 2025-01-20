// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
    return str.split(' ').map(word => {
        // Проверяем, является ли слово буквой (не содержит знаков препинания)
        if (/[a-zA-Z]/.test(word)) {
            // Перемещаем первую букву в конец и добавляем "ay"
            return word.slice(1) + word[0] + 'ay';
        }
        // Если это не слово, просто возвращаем его без изменений
        return word;
    }).join(' ');
}

// Примеры использования
console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !
