//reference
const person = {
  name: 'Hyunju'
};

//Copy the values inside person using ...(spread operator)
const firstPerson = {
  ...person
};
console.log(firstPerson); //name: "Hyunju"

//Copy the reference of person
const secondPerson = person;
person.name = 'Woo';
console.log(secondPerson); //name: "Woo"
console.log(firstPerson); //name: "Hyunju"


