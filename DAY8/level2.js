//Develop a small script which generate any number of characters random id:

// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
// let randomId = '';

// let idLength = prompt('Enter a random number', 10)
//     idLength = parseInt(idLength)
// for (let i = 0; i <= idLength; i++){
//     let randomIds = Math.floor(Math.random() * characters.length)
//     randomId += characters[randomIds]
// }
// console.log(randomId)

//2
//Write a script which generates a random hexadecimal number.
const hexadecimalNumber = '0123456789abcdef'
let randomHexadecimalNumber = ''
 for (let i = 0; i < 7; i++) {
    let randomHexaNumber = Math.floor(Math.random() * hexadecimalNumber.length)
    randomHexadecimalNumber += hexadecimalNumber[randomHexaNumber]
 }
console.log(randomHexadecimalNumber)

//3
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  //4
  //Using the above countries array, create the following new array.
  const newArr = []
  for (country of countries){
    newArr.push(country.toUpperCase())
  }
  console.log(newArr)
  //5
  //Using the above countries array, create an array for countries length'
  const newAr = []
  for (country of countries){
    newAr.push(country.length)
  }
  console.log(newAr)

  //6
//  const newSlice = []
//  let finalArray = []
//   for (country of countries){
    
//     newSlice.push[(country)]
//      newSlice.push[(country.substring(0,3).toUpperCase())]
//     newSlice.push[(country.length)]

//   }
// //   console.log(`[${country}, ${capitalAlpha}, ${countryLength}]`)

// console.log(newSlice)

  
// console.log ('i i^2 i^3') 
// for (let i = 0; i <= 10; i++){
//     const iSquared = i * i
//     const iCubed = i * i * i
// console.log(`${i} ${iSquared} ${iCubed}`)
let newCountry = []
for (let i = 0; i < countries.length; i++) {
    const country = countries[i]
    const countryReduced = countries.substring(0,3).toUpperCase()
    const countryLength = country.length
newCountry.push([country, countryReduced, countryLength ])
}
console.log(newCountry)