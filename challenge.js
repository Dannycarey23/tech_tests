
export function sum(a, b) {
    return a + b
}


export function calculateFactorial(num) {

    let startingNumber = parseInt(num);
    let nextInteger = startingNumber - 1;
    let numberArray = [];
    let answer = 0;

    numberArray.push(startingNumber, nextInteger)

    while (nextInteger >= 2) {
        nextInteger--
        numberArray.push(nextInteger)
    }

    console.log(numberArray)

    function reducer(accumulator, currentValue) {
        const returns = accumulator * currentValue
        return returns
    }

    answer = numberArray.reduce(reducer)
    console.log(answer)

    return answer
}