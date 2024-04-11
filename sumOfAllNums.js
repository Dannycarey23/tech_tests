export function sumOfAllNumbers(nums) {

    let numberArray = nums.toString().split('')
    let total = 0;

    numberArray.forEach((number) => {
        total = total + parseInt(number)
    })

    return total
}