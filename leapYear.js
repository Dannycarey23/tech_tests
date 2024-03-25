export function calculateLeapYear(year) {

    let chosenYear = year
    let isLeapYear

    if (chosenYear % 4 === 0 && chosenYear % 400 === 0) {
        return isLeapYear = true
    } else if (chosenYear % 4 === 0 && chosenYear % 100 === 0) {
        return isLeapYear = false
    } else if (chosenYear % 4 === 0){
        return isLeapYear = true
    }else{
        return isLeapYear = false
    }

}