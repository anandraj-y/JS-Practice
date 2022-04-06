// Class based approach

class Stream {
    
    constructor() {
        this.streamArr = [];
    }
    
    subscribe(callback) {
        if(typeof callback !== 'function') throw new Error('Invalid method!');
        this.streamArr.push(callback);
    }
    
    push(val) {
        this.streamArr.forEach(cb => {
            cb.call(this, val);
        })
    }
    
}

let z = new Stream();

z.subscribe((value)=> console.log(value));
z.subscribe((value)=> console.log(value * 2));
z.subscribe((value)=> console.log(value * 3));

z.push(3);

// output
// 3
// 6
// 9

--------------------------------------------------------------------------------------

// Function based approach
