document.addEventListener('DOMContentLoaded', () => {
    // solveMultiples();
    // solveFibonacci();
    // solvePrimeFactor();
    // solvePalindromProduct();
    // console.time("adi");
    // solveSmallestMultiple();
    // console.timeEnd("adi");
    // solveSumSquareDifference();
    // solve10001Prime();
});

function solveMultiples() {
    var sum=0;
    for (var i=1;i<1000;i++) {
        if ((i%3 == 0) || (i%5 == 0)) {
            sum += i;
        }
    }
    console.log(sum);
}

function solveFibonacci() {
    const array = [1,2], maxNr = 4000000;
    let flag = true, 
        sum = 0;

    do { 
        let lastNr = array[array.length-1], 
            secondLastNr = array[array.length-2], 
            currentNr = lastNr + secondLastNr;

        if (currentNr < maxNr) {
            array.push(currentNr);
        }
        else 
            flag = false;
    }
    while(flag);

    for (let i=0; i<array.length; i++) {
        if (array[i] % 2 === 0) {
            sum+=array[i];
        }
    }

    return("Sum is: ", sum);
}

function solvePrimeFactor() {
    let number = 9988656372846; //given number
    const primeFactorArray = [];
    let currentNr = 2; //start from 2 because divizion by 0 = Infinity and because any number can be divided by 1
    
    do {
        if (number % currentNr === 0) {
            primeFactorArray.push(currentNr);
            number = number / currentNr;
        }
        else {
            currentNr+=1;
        }
    }
    while(number>=currentNr);

    return("Largest prime factor of given number is: ", primeFactorArray[primeFactorArray.length-1]);
}

function solvePalindromProduct() {
    let maxNr = 1;
    for (let i = 999; i>=1; i--) {
        for (let j = 999; j>=1;j--) {
            let product = i * j;
            let productString = product.toString();
            let productStringReversed = productString.split("").reverse().join("");

            if (productString === productStringReversed) {
                if (product > maxNr) {
                    maxNr = product;
                }
            }
        }
    }
    return("Largest palindrome product: ", maxNr);
}

function solveSmallestMultiple() {
    let smallestMultiple = 1,
        sum = 1,
        flag = true;

    do {
        for (let i=1;i<=20;i++) {
            sum += (Math.floor(smallestMultiple % i));
        }
        if (sum == 1){
            flag = false;
        }
        else
            smallestMultiple++;
            sum = 1;
    }
    while (flag);
    return("Smallest multiple is: ",smallestMultiple);
}

function solveSumSquareDifference() {
    let sumOfSquares = 0,
        squareOfSum  = 0;

    for (let i=1; i<=100; i++) {
        sumOfSquares += i*i;
        squareOfSum += i;
    }

    squareOfSum = squareOfSum * squareOfSum;
    return("Sum square difference is: ",squareOfSum - sumOfSquares);    
}

function solve10001Prime() {
    // Math.sqrt(9);
    // do not check division by 2
    let array = [2];
    let flag = true;
    let number = 3;

    if (array.length <= 10001) {
        for (let i=Math.floor(Math.sqrt(number)); i>=1;i--) {
            if (number % i !== 0) {

            }
        }
    }
    else
        console.log(array[array.length-1]);

}