function add (a, b) {
    return a + b
}

console.log(add(2, 3))

function sortArray(arr) {
    return arr.sort((a, b) => a - b)
}
console.log(sortArray([5, 2, 9, 1, 5, 6]))

function reverseString(str) {
    return str.split('').reverse().join('')
}
console.log(reverseString('hello'))

function arrayLetters(arr) {
    return arr.map(word => word.split(''))
}
console.log(arrayLetters(['hello', 'world']))


function sortLetters(str) {
    return str.split('').sort().join('')
}
console.log(sortLetters('hello'))