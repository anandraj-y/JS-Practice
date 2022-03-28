Array.prototype.polyfilter = function(callback, context) {
    const output = [];
    for(let i = 0; i < this.length; i++) {
        if(callback.call(context, this[i], i, this)) {
            output.push(this[i]);
        }
    } 
    return output;
};
