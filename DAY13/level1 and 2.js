//1
//Create an empty object called dog
const dog = {}

//2
//Print the the dog object on the console
console.log(dog)

//3
//Add name, legs, color, age and bark properties for the dog object.
// The bark property is a method which return woof woof
const Dog = {
    name: 'Sheila',
    legs: 4,
    color : 'black',
    age: 56,
    sound: 'woof',
    bark: function () {
        return `${this.sound} ${this.sound}`;
    }
}
//4
//Get name, legs, color, age and bark value from the dog object
const ppties = Object.values(Dog)
console.log(ppties)

//5
//Set new properties the dog object: breed, getDogInfo
Dog.breed = 'caucasian'
Dog.getDogInfo = function() {
    return `${this.name} is a ${this.breed} ${this.color} Dog`
}

console.log(Dog.getDogInfo())

//level2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  

// Find the person who has many skills in the users object.

let personWithMostSkills = ''
let highestSkill = 0;

for (const person in users) {
  let numOfSkills = users[person].skills.length;
  if (numOfSkills > highestSkill) {
    highestSkill = numOfSkills;
    personWithMostSkills = person
  }
}
console.log(`Person who has many skills is ${personWithMostSkills}`)

//2
//Count logged in users, count users having greater than equal to 50 points from the following object.
let isLoggedInUsers = 0

for (const person in users){
  if (users[person].isLoggedIn == true) {
    isLoggedInUsers++;
  }
}
console.log(`There are ${isLoggedInUsers} logged in persons`)

//2b
//count users having greater than equal to 50 points 
let usersWithGreaterPoints = 0  

for (const person in users){
  if (users[person].points >= 50){
    usersWithGreaterPoints++;
  }
}
console.log(`There are ${usersWithGreaterPoints} users having points greater than or equal to 50`)

//3
//Find people who are MERN stack developer from the users object
 let mernstackDevelopers = ' ';
 for (const person in users){
    if (users[person].skills.includes('MongoDB', 'Express', 'React', 'Node') == true){
      mernstackDevelopers += person
    }
 }
 console.log(mernstackDevelopers)

 //4
 //Set your name in the users object without modifying the original users object
 const copyUser = Object.assign({}, users) 
 
 copyUser.Aishat ={
      email: 'aishat@gmail.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
      age: 24,
      isLoggedIn: false,
      points: 80
 }
 console.log(copyUser)
 console.log(copyUser.Aishat)

 //5
 //Get all keys or properties of users object
 const keys = Object.keys(copyUser)
 console.log(keys)

 //6
 //Get all the values of users object
 const values = Object.values(copyUser)
 console.log(values)

 //7
 //Use the countries object to print a country name, capital, populations and languages.
 const countries = {
  Nigeria: {
    countryName: 'Nigeria',
    capital: 'Abuja',
    populations: 100000000,
    languages: ['English', 'Yoruba', 'Igbo', 'Hausa']
  },
  Kenya: {
    countryName: 'Kenya',
    capital: 'Nairobi',
    populations: 2000000,
    languages: ['English', 'KiSwahili', 'Swahili']
  }
 }
 console.log(countries);