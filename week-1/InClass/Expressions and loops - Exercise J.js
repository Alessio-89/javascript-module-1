//Complete this function so that, if the second index in the array contains the name "Amy", it returns "Second index matched!"

const arrayNames = ['John', 'Amy', 'Paul', 'Sarah'];

function secondMatchesAmy(array) {
    if (array[1] === 'Amy') {
      return "Second index matched!";
    }
    else {return "Second index not matched"};
  }

  console.log(secondMatchesAmy(arrayNames))