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
  let reduced = array.reduce(reducer)
  return reduced;
};

function reducer(accumulator, item){
  let firstBirth = accumulator.yearOfBirth;
  let firstDeath = accumulator.yearOfDeath;
  if(!accumulator.yearOfDeath) {
    firstDeath = new Date().getFullYear();
  }

  let nextBirth = item.yearOfBirth;
  let nextDeath = item.yearOfDeath;
  if(!item.yearOfDeath) {
    nextDeath = new Date().getFullYear();
  }

  let firstYearsLived = firstDeath - firstBirth;
  let nextYearsLived = nextDeath - nextBirth;

  if (firstYearsLived>nextYearsLived) {
    return accumulator;
  } else {
    return item;
  }

}


findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
