const chopStr = (str, size = str.length) => {
    let output = [];
    let i = 0;
    while(i < str.length) {
        output.push(str.slice(i, i + size));
        i += size;
    }
    return output;
}

chopStr('JavaScript', 3) // ['Jav', 'aSc', 'rip', 't']
