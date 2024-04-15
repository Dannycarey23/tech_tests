// ** 8.  Filter even numbers from an array **
//     - Input: Array of integers
//         - Output: Array containing only the even numbers
//             - Example:
// ```javascript
//     filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => [2, 4, 6, 8, 10]
//     ```


export function filterEvenNumbers(numbers) {

    // let answer = [];

    // numbers.forEach((number) => {
    //     if (parseInt(number) % 2 === 0) {
    //         answer.push(number)
    //     }
    // })

    // return answer

    console.log(numbers.filter((num) => num % 2 === 0))
    return numbers.filter((num) => num % 2 === 0);
}