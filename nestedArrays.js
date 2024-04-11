// ** 10. Write a function to flatten nested arrays **
//     - Input: Array containing nested arrays
//         - Output: Flattened array
//             - Example:
// ```javascript
//     const arr = [1, [2, [3, 4], 5], 6];
//     flattenArray(arr) => [1, 2, 3, 4, 5, 6]
//     ```

export function flattenArray(array) {

    let flattenedArray = array.flat(Infinity)

    console.log(flattenedArray);

    return flattenedArray
}