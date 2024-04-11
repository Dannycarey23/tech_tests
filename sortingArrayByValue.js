// ** 11. Sort an array of objects by a property value **
//     - Input: Array of objects, property name to sort by
//         - Output: Array of objects sorted by the specified property value
//             - Example:
// ```javascript
//     const people = [
//       { name: "John", age: 25 },
//       { name: "Jane", age: 30 },
//       { name: "Alice", age: 20 }
//     ];
//     sortByProperty(people, "age") => [
//       { name: "Alice", age: 20 },
//       { name: "John", age: 25 },
//       { name: "Jane", age: 30 }
//     ]
//     ```

export function sortByProperty(array, value) {

    return array.sort((a, b) =>  a[value] - b[value]);
}