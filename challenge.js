
export function sum(a, b) {
    return a + b
}

// Factorial 

export function calculateFactorial(num) {

    let startingNumber = parseInt(num);
    let nextInteger = startingNumber - 1;
    let numberArray = [];
    let answer = 0;

    numberArray.push(startingNumber, nextInteger)

    while (nextInteger >= 2) {
        nextInteger--
        numberArray.push(nextInteger)
    }

    console.log(numberArray)

    function reducer(accumulator, currentValue) {
        const returns = accumulator * currentValue
        return returns
    }

    answer = numberArray.reduce(reducer)
    console.log(answer)

    return answer
}

// Leap Year

export function calculateLeapYear(year) {

    let chosenYear = year
    let isLeapYear

    if (chosenYear % 4 === 0) {
        return isLeapYear = true
    } else {
        return isLeapYear = false
    }

    return isLeapYear
}

// Remove duplicate characters from a string

export function removeDuplicateCharacters(string) {
    let testString = string.toLowerCase().split('')
    let loopedString = []

    testString.forEach(character => {
        if (!loopedString.includes(character)) {
            loopedString.push(character)
        }
    });

    return loopedString.join('')
}

// Check if string is an isogram 

export function isIsogram(string) {
    let testString = string.toLowerCase().split('')
    let loopedString = []

    testString.forEach(character => {
        if (!loopedString.includes(character)) {
            loopedString.push(character)
        }
    })

    let answer = testString.length === loopedString.length

    return answer

}

// Return the longest word in the sentence

export function findLongestWord(string) {

    // edge cases: multiple words of the same length. special characters being included in the words length.

    let testString = string.toLowerCase().split(' ')
    let longestWord = ""

    testString.forEach((word) => {
        if (word.length > longestWord.length) {
            return longestWord = word;
        }
    })

    return longestWord;

}