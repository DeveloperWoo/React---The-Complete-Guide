class Human{
  constructor(){
    this.gender = 'male'
  }
  
  printGender(){
    console.log(this.gender);
  }
}


class Person extends Human{
  //ctor
  constructor(){
    super();
    this.name = 'Hyunju';
    this.gender = 'female'
  }
  //method
  printMyName(){
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName(); //Hyunju
person.printGender(); //female
