const findTheOldest = function(people) {
    let oldest = "";
    let oldestAge = 0;

    for (let i = 0; i < people.length; i++) {
        
        if(!people[i].yearOfDeath){
            people[i].yearOfDeath = new Date().getFullYear();
        }
        let age = people[i].yearOfDeath - people[i].yearOfBirth;
        if (age > oldestAge) {
            oldest = people[i];
            console.log(oldest);
            oldestAge = age;
        }
    }

    return oldest;
};



// Do not edit below this line
module.exports = findTheOldest;
