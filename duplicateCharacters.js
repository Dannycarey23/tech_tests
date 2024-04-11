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