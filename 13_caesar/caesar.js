function caesar(string, shift) {
  const array = string.split("");
  const array1 = array.map(letter => shiftLetter(letter, shift));
  return array1.join("");
};

function letterSet(uCode) {
  if (uCode < 97) {
    return 65;
  } else {
    return 97;
  }  
}

function shiftLetter(letter, shift) {

  const uCode = letter.charCodeAt();

  if ((uCode >= 65 && uCode <= 90) || (uCode >= 97 && uCode <=122)) {
    return String.fromCharCode(mod((uCode + shift - letterSet(uCode)), 26) + letterSet(uCode));
  }
  return letter;
}

function mod(n, m) {
  return (n % m + m) % m;
};

caesar("Hello World", -5)
caesar("A",1);
caesar('Aaa', 1);
caesar('Hello, World!', 5);
caesar('Mjqqt, Btwqi!', -5);
caesar('Z', 1);
caesar('Hello, World!', 75);
caesar('Hello, World!', -29);

// Do not edit below this line
module.exports = caesar;
