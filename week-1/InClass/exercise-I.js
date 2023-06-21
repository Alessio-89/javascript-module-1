//Write a function that returns the year someone is born given their age as input
//Using the answer from step 1, write a function that takes someone's name and age as input and returns a string that states the person's name and year they were born in a sentence

const calculateBirthYear = (age) => {

return 2023-age;

};


const nameAndBirthYear = (yourname, age) => {

    return "your name is " + yourname + " and you were born in " + calculateBirthYear(age)
}

console.log(nameAndBirthYear("Alessio", 34))