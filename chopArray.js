// Added chop method to prototype of array

Array.prototype.chop = function(size = this.length) {
    const output = [];
    let i = 0;
    while( i < this.length) {
        output.push(this.slice(i, i+size));
        i+= size;
    }
    return output;
}


const choped = (arr, size = arr.length) => {
    let i = 0;
    let output = [];
    while(i < arr.length) {
        output.push(arr.slice(i, i + size))
        i += size;
    }
    return output;
}

choped([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3); // [[1,2,3], [4,5,6], [7,8,9], [10]];
