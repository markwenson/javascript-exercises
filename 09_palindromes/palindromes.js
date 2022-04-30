const palindromes = function (str) {
    
    let string1 = str.toLowerCase().replace(/[&\/\\#, +()$~%.'":*?!<>{}]/g,'');
    
    let string2 = "";

    for(let i = string1.length - 1; i >= 0; i--) {
      string2 = string2 + string1[i];
    }
    
    if (string1 === string2) {
      return true;
    } else {
      return false;
    }
};

palindromes("ZZZZ car, a man, a maracaz.");
// Do not edit below this line
module.exports = palindromes;
