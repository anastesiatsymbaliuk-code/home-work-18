/*   #1   */
var myNum = 10;

let myStr = 'some string';

let myBool = true;

var numbers = [1, 2, 3, 4, 5];

const person = {
    first: 'First Name', 
    last: 'Last Name'
};
/*   #2   */
var myNum = 10;
myNum.name = 'decimal2';
console.log(myNum.toFixed(2));
/*   #3   */
const myBigInt = 123n;
const sum = Number(myBigInt) + 1;
console.log(sum.toString());