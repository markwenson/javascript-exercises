const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]
const findTheOldest = function(array) {
  const reduced = array.reduce(reducer);
  return reduced;
};

function reducer(oldestPerson, currentPerson) {
   
  let oldBirth = oldestPerson.yearOfBirth;
  let oldDeath = oldestPerson.yearOfDeath;
  if (!oldDeath) {
     oldDeath = new Date().getFullYear();
 	}; 
  let currentBirth = currentPerson.yearOfBirth; 
  let currentDeath = currentPerson.yearOfDeath;
  if (!currentDeath) {
     currentDeath = new Date().getFullYear();
  };
    
  const oldestAge = oldDeath - oldBirth;
  const currentAge = currentDeath - currentBirth;

 
  if (oldestAge > currentAge) {
    return oldestPerson;
  } else {
    return currentPerson;
  }
};


findTheOldest(people);


findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
