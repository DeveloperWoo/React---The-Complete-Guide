// function printMyName(name) {
//   console.log(name);
// }

/*
 * ES6
 */
const printMyName = (name, job) => {
  console.log(name, job)
}

//with only one argument, we dont' have to put ()
// const printMyName = name => {
//   console.log(name)
// }

printMyName('Hyunju', 'Full Stack Developer');

// const multiply = (number) => {
//   return number * 2;
// }

//short version of writing multiply function
const multiply = number => number * 2;

console.log(multiply(4));


