// You need to write a password generator that meets the following criteria:

// 6 - 20 characters long
// contains at least one lowercase letter
// contains at least one uppercase letter
// contains at least one number
// contains only alphanumeric characters (no special characters)
// Return the random password as a string.

// Note: "randomness" is checked by counting the characters used in the generated passwords - all characters should have less than 50% occurance. Based on extensive tests, the normal rate is around 35%.

function passwordGen() {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    
    // Объединяем все возможные символы
    const allCharacters = lowerCase + upperCase + numbers;

    // Генерируем длину пароля от 6 до 20
    const passwordLength = Math.floor(Math.random() * (15)) + 6; // 6-20 символов

    let password = '';

    // Убедимся, что в пароле есть хотя бы одна буква в нижнем регистре, одна в верхнем регистре и одна цифра
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];

    // Заполняем оставшуюся длину пароля случайными символами
    for (let i = 3; i < passwordLength; i++) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    // Перемешиваем символы пароля для повышения случайности
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;
}

// Пример использования
console.log(passwordGen());