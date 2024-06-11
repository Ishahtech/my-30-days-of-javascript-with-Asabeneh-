// Exercises Level 1
// Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
    constructor(name, age, color, legs, isDog, isCat){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
        this.isDog = isDog;
        this.isCat = isCat;
    }
    getFullAnimalDetails(){
        const fullDetails = this.name + "  is " + this.age + " years old and has " + this.color 
        + " color with " + this.legs + " legs."  
        return fullDetails
    }

    getAnimal(){
        const getAnimal = this.isDog ? this.name + " is a Dog" : this.name + " is a Cat"
        return getAnimal
   }
}

const Animal1 = new Animal('Binta', 28, 'white', 4)
console.log(Animal1.getFullAnimalDetails())

//2
// Create a Dog and Cat child class from the Animal Class.
const Dog = new Animal('Chubi',21, 'brown', 5, true)
console.log(Dog.getFullAnimalDetails())
console.log(Dog.getAnimal())

const Cat = new Animal('MIMI',14, 'GOLD', 4, false)
console.log(Cat.getFullAnimalDetails())
console.log(Cat.getAnimal())