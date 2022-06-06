const fibonacci = function(member) {
    let number = member;
    if (number<0) {return "OOPS"}

    let fibArray = [0, 1]
    let fibNum = 0;

    for (let i = 0; i < number; i++) {
        fibNum = fibArray[i] + fibArray[i+1]
        fibArray.push(fibNum)
    }

    return fibArray[number]
};

fibonacci("1");
fibonacci("2");
fibonacci("21");




// Do not edit below this line
module.exports = fibonacci;
