//Using the variables provided in the exercise calculate the percentage of mentors and students in the group 
//(percentages must be rounded to the nearest integer)

let numberOfStudents = 8;

let numberOfMentors = 4;

let group = numberOfStudents+numberOfMentors;

let percentage = (variable) => {
    return Math.floor((100 * variable)/group)

};

//I created a function that takes a "variable" parameter, calculates its % and rounds it with Math.floor()

console.log(percentage(numberOfMentors)) //prints 33

console.log(percentage(numberOfStudents)) //prints 66

