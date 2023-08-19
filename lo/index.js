var colors = require('colors');
 
console.log('hello'.green); 
console.log('i like cake and pies'.underline.red) 
console.log('inverse the color'.inverse); 
console.log('OMG Rainbows!'.rainbow); 
console.log('Run the trap'.trap); 

//colors()

const calculator = require('birthday-calculator');

const date = new Date('1990,10,01');
const result = calculator.getDayWhenBorn(date);
console.log(result);