const palindromes = function (str) {
    
    let string1 = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let palindrome = "";

    for(let i = string1.length-1; i >=0; i--) {
      palindrome = palindrome + string1[i]
    }
    
    if(string1 === palindrome) {
      return true;
    } else {
      return false;
    }
 
};




// Do not edit below this line
module.exports = palindromes;
