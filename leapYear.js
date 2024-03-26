export function calculateLeapYear(year) {

    let isLeapYear

    if (year % 4 === 0 && year % 400 === 0) {
        return isLeapYear = true
    } else if (year % 4 === 0 && year % 100 === 0) {
        return isLeapYear = false
    } else if (year % 4 === 0) {
        return isLeapYear = true
    } else {
        return isLeapYear = false
    }

}