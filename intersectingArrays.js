// ** 9.  Find the intersection of two arrays **
//     - Input: Two arrays of integers
//         - Output: Array containing the common elements of both arrays
//             - Example:
// ```javascript
//     findIntersection([1, 2, 3, 4], [3, 4, 5, 6]) => [3, 4]
//     ```

export function findIntersection(array1, array2) {

    // let intersections = []

    // array1.forEach((number) => {
    //     if (array2.includes(number)) {
    //         intersections.push(number)
    //     }
    // })

    // return intersections;

    console.log(array1.filter((num) => array2.includes(num)))
    return array1.filter((num) => array2.includes(num))
} 