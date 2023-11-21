var fs = require('fs'); 
var input = fs.readFileSync('input.txt').toString().split(' ');



let A = prompt('반복 숫자','');
let B = '*';

for (; +A * +B;) {
    console.log(B++);
}