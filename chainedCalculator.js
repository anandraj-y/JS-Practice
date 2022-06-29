function cal(val) {
    let output = val;
    return {
        add: (x) => {
            output += x;
            return cal(output)
        },
        sub: (x) => {
            output -= x;
            return cal(output);
        },
        mult: (x) => {
            output *= x;
            return cal(output)
        },
        divide: (x) => {
            output /= x;
            return cal(output)
        },
        val: () => {
            return output;
        }
    }
}


cal(10).add(10).add(10).mult(3).divide(3).val() //30
