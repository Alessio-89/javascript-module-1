//Write a function which takes your students array as an input. In the function, use a for loop to iterate over the array and print the name of each student to the console.

const studentsNames = ['John', 'Mary', 'Paul', 'Jake', 'Alex', 'Susan', 'Sarah']

const printStudents = (array) => {

    for (let i=0; i<array.length; i++)

    console.log(array[i])
}

printStudents(studentsNames);