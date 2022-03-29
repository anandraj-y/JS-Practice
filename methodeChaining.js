class Calculator {
    constructor() {
        this.value = 0;
        this.add = this.add.bind(this);
        this.subs = this.subs.bind(this);
        this.multiply = this.multiply.bind(this);
        this.divide = this.divide.bind(this);
    }
    add(num) {
        this.value += num;
        return this
    }
    subs(num){
        this.value -= num;
        return this;
    }
    multiply(num) {
        this.value *= num;
        return this
    }
    divide(num) {
        this.value /= num;
        return this
    }
}

let calc = new Calculator();
calc.add(10).multiply(5).subs(10);
calc.value // 40;
