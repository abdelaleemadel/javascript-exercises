const findTheOldest = people => {
    const sorted = people.sort(function (firstPerson, secondPerson) {
        const thisYear = new Date().getFullYear();
        return (((secondPerson.yearOfDeath || thisYear) - secondPerson.yearOfBirth) - ((firstPerson.yearOfDeath || thisYear) - firstPerson.yearOfBirth))
    })
    return sorted[0];
}

// Do not edit below this line
module.exports = findTheOldest;


