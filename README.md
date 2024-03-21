## Tech test questions

**1.  Calculate the factorial of a given number**
   - Input: Integer
   - Output: Factorial of the input number
   - Example: 
     ```javascript
     // 5 * 4 * 3 * 2 * 1 = 120
     calculateFactorial(5) => 120
     ```


**2.  Check if a given year is a leap year**
   - Input: Integer
   - Output: Boolean (`true` if leap year, `false` otherwise)
   - Example: 
     ```javascript
     isLeapYear(2020) => true
     ```

**3.  Remove duplicate characters from a string**
  - Input: String
  - Output: String with duplicate characters removed
  - Example: 
    ```javascript
    removeDuplicates("hello") => "helo"
    ```

**4.  Check if string is an isogram (no repeating characters)**
  - Input: String
  - Output: Boolean (`true` if all characters are unique, `false` otherwise)
  - Example: 
    ```javascript
    hasUniqueCharacters("hello") => false
    ```

**5.  Find the longest word in a sentence**
  - Input: String (sentence)
  - Output: Longest word in the sentence
  - Example: 
    ```javascript
    findLongestWord("This is a sentence.") => "sentence"
    ```

**6.  Calculate the sum of digits in a number**
  - Input: Integer
  - Output: Sum of digits in the number
  - Example: 
    ```javascript
    sumOfDigits(12345) => 15
    ```
      
**7.  Count the occurrences of each character in a string**
  - Input: String
  - Output: Object mapping characters to their respective counts
  - Example: 
    ```javascript
    countCharacterOccurrences("hello") => { h: 1, e: 1, l: 2, o: 1 }
    ```

**8.  Filter even numbers from an array**
  - Input: Array of integers
  - Output: Array containing only the even numbers
  - Example: 
    ```javascript
    filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => [2, 4, 6, 8, 10]
    ```

**9.  Find the intersection of two arrays**
  - Input: Two arrays of integers
  - Output: Array containing the common elements of both arrays
  - Example: 
    ```javascript
    findIntersection([1, 2, 3, 4], [3, 4, 5, 6]) => [3, 4]
    ```

**10. Write a function to flatten nested arrays**
  - Input: Array containing nested arrays
  - Output: Flattened array
  - Example: 
    ```javascript
    const arr = [1, [2, [3, 4], 5], 6];
    flattenArray(arr) => [1, 2, 3, 4, 5, 6]
    ```


**11. Sort an array of objects by a property value**
  - Input: Array of objects, property name to sort by
  - Output: Array of objects sorted by the specified property value
  - Example: 
    ```javascript
    const people = [
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
      { name: "Alice", age: 20 }
    ];
    sortByProperty(people, "age") => [
      { name: "Alice", age: 20 },
      { name: "John", age: 25 },
      { name: "Jane", age: 30 }
    ]
    ```