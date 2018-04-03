document.addEventListener('DOMContentLoaded', () => {
    // solveMultiples();
    // solveFibonacci();
    // solvePrimeFactor();

    
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