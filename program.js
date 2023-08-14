// perfect square program
n = 36
if (n<0){
    return false;
}
Math.sqrt(n);
Number.isInteger(Math.sqrt(n)) 
    if(Number.isInteger(Math.sqrt(n))){
    console.log(true)
}
else{
    console.log(false)
}


// program to generate fibonicci series
const number = parseInt(prompt('Enter a positive number: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= 18) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}



