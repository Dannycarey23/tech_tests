export function calculateFactorial(num) {

    let startingNumber = parseInt(num);
    let nextInteger = startingNumber - 1;
    let numberArray = [];
    let answer = 0;

    numberArray.push(startingNumber, nextInteger)

    if(startingNumber === 0){
        return answer
    }else if(startingNumber === 1){
        return answer = 1
    }else{
        while (nextInteger >= 2) {
            nextInteger--
            numberArray.push(nextInteger)
        }

        function reducer(accumulator, currentValue) {
            const returns = accumulator * currentValue
            return returns
        }

        return answer = numberArray.reduce(reducer)
    }
}