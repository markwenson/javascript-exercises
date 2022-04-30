const number = Math.floor(Math.random() * 10);

const repeatString = function(string, number) {
    let repeatedString = "";
    
    if (number >= 0) {
    while (number > 0) {
        repeatedString = repeatedString + string;
        number--;
    }
    return repeatedString;
    } 
    else {
        return "ERROR";
    }
};

repeatString('', number);

// Do not edit below this line
module.exports = repeatString;
