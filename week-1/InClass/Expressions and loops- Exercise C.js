function numberChecker(num) {
    if (num > 20) {
      return `${num} is greater than 20`;
    } else if (num === 20) {
      return `${num} is equal to 20`;
    } else if (num < 20) {
      return `${num} is less than 20`;
    } else {
      return `${num} isn't even a number :(`;
    }
  }

  //This function takes a number as an argument and then prints different strings depending on the number you chose.

  //If you pass in a string (say, abc), it prints "abc isn't even a number :("