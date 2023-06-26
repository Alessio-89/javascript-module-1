function exponential(number) {
    return number * number;
  }
  
  function isEven(number) {
    return number % 2 === 0;
  }

  const printExponentials = (number1, number2) => 
 
  {
    for (let i=number1; i<number2; i++)
     
    if (isEven(i))
  {
    console.log('The exponential of ' + i + ' is ' + exponential(i))
  }

  }

  printExponentials(5, 20);