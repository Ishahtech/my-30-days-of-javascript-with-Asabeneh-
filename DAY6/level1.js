//1
const arr = Array()
//2
const newArray = ['Independent', 'Nation', 'Country', 'Place', 'Year', 'Parks', 'Home']
//3
console.log(newArray.length)
//4
console.log(newArray[0])
console.log(newArray[3])
let lastIndex = newArray.length - 1
console.log(newArray[lastIndex])
//5
const mixedDataTypes = ['string', 'number', 'boolean', 'number', 'boolean', 'undefined']
console.log(mixedDataTypes.length)
//6
// Declare an array variable name itCompanies and assign 
//initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//7
// Print the array using console.log()
console.log(itCompanies)
//8
//Print the number of companies in the array
console.log(itCompanies.length)
//9
//Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])
//10
//Print out each company
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])
//11
//Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())
//12
//Print the array like as a sentence: Facebook, Google, Microsoft,
// Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString() + 'are big IT companies')
//13
/*Check if a certain company exists in the itCompanies array.
 If it exist return the company else return a company is not found*/
 let index = itCompanies.indexOf('Google')
 index === -1 ? console.log('a company is not found') : console.log(itCompanies[index])