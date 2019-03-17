const numbers = [1,2,3];
const newNumbers = [...numbers, 4];
const newNumbers2 = [numbers, 4];

console.log(newNumbers);
console.log(newNumbers2);

const person = {
  name: 'Hyunju'
};

//spread operator
const newPerson = {
  ...person,
  job: 'Full Stack Developer'
}

console.log(newPerson);

//rest operator
const filter = (...args) => {
  return args.filter(el => el > 1);
}

console.log(filter(1,2,3,1,4,1)); // [2,3,4]
