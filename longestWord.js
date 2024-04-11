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