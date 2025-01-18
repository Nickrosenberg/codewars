// In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

// Create as many "shufflings" as you can!

// Examples:

// With input 'a':
// Your function should return: ['a']

// With input 'ab':
// Your function should return ['ab', 'ba']

// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']

// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// Note: The order of the permutations doesn't matter.

function permutations(string) {
    // Функция для генерации перестановок
    const permute = (str, l, r, result) => {
        if (l === r) {
            result.add(str); // Добавляем перестановку в множество для удаления дубликатов
        } else {
            for (let i = l; i <= r; i++) {
                // Меняем символы местами
                str = swap(str, l, i);
                permute(str, l + 1, r, result); // Рекурсивно вызываем для следующего индекса
                str = swap(str, l, i); // Возвращаем символы на место
            }
        }
    };

    // Функция для обмена символов в строке
    const swap = (s, i, j) => {
        const charArray = s.split('');
        [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
        return charArray.join('');
    };

    const result = new Set(); // Используем множество для хранения уникальных перестановок
    permute(string, 0, string.length - 1, result);
    return Array.from(result); // Преобразуем множество обратно в массив
}

// Примеры использования:
console.log(permutations('a')); // ['a']
console.log(permutations('ab')); // ['ab', 'ba']
console.log(permutations('abc')); // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
console.log(permutations('aabb')); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']