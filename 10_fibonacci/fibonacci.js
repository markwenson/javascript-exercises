const fibonacci = function(arg) {
    let number = Number(arg);
    const fibArray = [0,1];
    let sequence = 0;

    if (number<0) {
        return "OOPS";
    }
    for (let i = 0; i < number; i++) {
        sequence = fibArray[i] + fibArray[i+1];
        fibArray.push(sequence);
    }
    return fibArray[number];
};
fibonacci("1");
fibonacci("2");
fibonacci("8");




// Do not edit below this line
module.exports = fibonacci;
