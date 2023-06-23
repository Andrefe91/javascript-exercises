const findTheOldest = function(persons) {

    let currentYear = (new Date).getFullYear();

    function sortPersons(a,b){

        if (a.yearOfDeath == undefined) {
            a.yearOfDeath = currentYear;
        } else if (b.yearOfDeath == undefined) {
            b.yearOfDeath = currentYear;
        }

        let ageLastPerson = a.yearOfDeath - a.yearOfBirth;
        let ageNextPerson = b.yearOfDeath - b.yearOfBirth;

        if (ageLastPerson < ageNextPerson) {
            return 1;
        } else {
            return -1;
        }
    }

    persons.sort(sortPersons);
    return persons[0];
    
};

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

const people2 = [
    {
      name: "Carly",
      yearOfBirth: 2018,
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

const people3 = [
    {
      name: "Carly",
      yearOfBirth: 1066,
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

console.log(findTheOldest(people2));


// Do not edit below this line
module.exports = findTheOldest;
