let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [A, B] = input.map(e => +e);

if(A>B) {
  alert('>');
} else if(B>A) {
  alert('<')
} else if(A==B) {
  alert('==')
}


