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