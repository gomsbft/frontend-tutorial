let john = { name: "John", age: 25 };

let pete = { name: "Pete", age: 30 };

let mary = { name: "Mary", age: 28 };

function sortByAge(arr) {
    return arr.sort((a, b) => a - b);
}

let arr = [ pete, john, mary ];

console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete