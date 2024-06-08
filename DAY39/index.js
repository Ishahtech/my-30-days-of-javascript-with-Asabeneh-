// Class Constructor
// The constructor is a builtin function which allows as to create a blueprint for our object. The constructor function starts with a keyword constructor followed by a parenthesis. Inside the parenthesis we pass the properties of the object as parameter. We use the this keyword to attach the constructor parameters with the class.

// The following Person class constructor has firstName and lastName property. These properties are attached to the Person class using this keyword. This refers to the class itself.

class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person = new Person()

console.log(person)

class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
  const person1 = new Person('Asabeneh', 'Yetayeh')
  
  console.log(person1)

  class Person {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
  const person1 = new Person('Asabeneh', 'Yetayeh')
  const person2 = new Person('Lidiya', 'Tekle')
  const person3 = new Person('Abraham', 'Yetayeh')
  
  console.log(person1)
  console.log(person2)
  console.log(person3)