function Calculator() {

        this.read = function(one, two) {
            this.first = one;
            this.second = two;
        }

        this.sum = function() {
            return this.first + this.second;
        }

        this.mul = function() {
            return this.first * this.second;
        }
}



let calculator = new Calculator();

calculator.read(3, 4);
console.log(calculator.sum());
console.log(calculator.mul());