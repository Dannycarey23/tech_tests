// ** 7.  Count the occurrences of each character in a string **
//          - Input: String
//          - Output: Object mapping characters to their respective counts
//          - Example:
//          ```javascript
//     countCharacterOccurrences("hello") => { h: 1, e: 1, l: 2, o: 1 }
//     ```

export function countOccurences(word) {
    let characterCount = {}
    let wordSplit = word.toLowerCase().split('')

    wordSplit.forEach((letter) => {
        if (!characterCount[letter]) {
            characterCount[letter] = 1
        } else {
            characterCount[letter]++
        }
    })

    return characterCount;
}