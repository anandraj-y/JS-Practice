function flatten(obj, parent) {
    let output = {}
    for(let key in obj) {
        const keyName = parent ? parent + '.' + key : key;
        if(typeof obj[key] === 'object') {
            output = {
                ...output,
                ...flatten(obj[key], keyName)
            }
        } else {
            output[keyName] = obj[key]
        }
    }
    return output;
}

const input = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
       L: 56
    },
    Q: [1, 2]
   }
}

flatten(input) 
// {
    "A": "12",
    "B": 23,
    "C.P": 23,
    "C.O.L": 56,
    "C.Q.0": 1,
    "C.Q.1": 2
}
