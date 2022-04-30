const reverseString = function(str) {

    let string = "";
    for(i = str.length -1; i >= 0; i--) {
        string = string + str[i];
    }
    return string;

};

reverseString("");

// Do not edit below this line
module.exports = reverseString;
