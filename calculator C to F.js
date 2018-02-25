const multiplyByNineFifths = (celsius) => {
  return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
  return multiplyByNineFifths(celsius) + 32;
};

console.log('The temperature is ' + getFahrenheit(15) + '°F');
// Output: The temperature is 59°F
/*Take a look at the getFahrenheit() function. Inside of its block, we called multiplyByNineFifths() 
and passed it the degrees in celsius. 
The multiplyByNineFifths() function multiplied the celsius by (9/5). 
Then it returned its value so the getFahrenheit() function could continue on to add 32 to it.

Finally, on the last line, we interpolated the function call within a console.log() statement. 
This works because getFahrenheit() returns its value.

We can use functions to section off small bits of logic or tasks, then use them when we need to.
Writing functions can help take large and difficult problems and break them into small and manageable problems.*/
