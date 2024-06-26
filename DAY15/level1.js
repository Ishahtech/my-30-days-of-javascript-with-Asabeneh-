//1
//Explain the difference between forEach, map, filter, and reduce.
//forEach() takes a callback function and does'nt return a new Array. It is use on Arrays onplay
//map() takes a callback and returns a new Array. It iterates the array elements and modify them.
//filter() takes a callback and returns a new Array. It filters out items that fulfill filtering conditions.
//reduce() takes a callback. the callback function takes an accumulator and current value and also an initial value
            //if specified. If not, it starts with the value of the first array. If array is empty,it throws an error.

//2
//Define a callback function before you use it in forEach, map, filter or reduce.
//Function used as a parameter is called a 'Callback'

//3
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
//3
//Use forEach to console.log each country in the countries array.
countries.forEach((country) => console.log(country))

//4
//Use forEach to console.log each name in the names array.
names.forEach((name) => console.log(name))

//5
//Use forEach to console.log each number in the numbers array.
numbers.forEach((number) => console.log(number))

//6
//Use map to create a new array by changing each country to uppercase in the countries array.
const countryToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countryToUpperCase)

//7
//Use map to create an array of countries length from countries array.
const countriesLength = countries.map((country) => country.length)
console.log(countriesLength)

//8
//Use map to create a new array by changing each number to square in the numbers array
const numbersSquare = numbers.map((number) => number * number)
console.log(numbersSquare)

//9
//Use map to change each name to uppercase in the names array
const namesToUppercase = names.map((name) => name.toUpperCase())
console.log(namesToUppercase)

//10
//Use map to map the products array to its corresponding prices.
const productsToPrice = products.map((product) => product.price)
console.log(productsToPrice)

//11
//Use filter to filter out countries containing land
const countriesWithLand = countries.filter((country) => country.includes('land'))
console.log(countriesWithLand)

//12
//Use filter to filter out countries having six character.
const countriesWithSixCharacters = countries.filter((country) => country.length === 6)
console.log(countriesWithSixCharacters)

//13
//Use filter to filter out countries containing six letters and more in the country array.
const  countriesWithSixLettersAndMore = countries.filter((country) => country.length >= 6)
console.log(countriesWithSixLettersAndMore)

//14
//Use filter to filter out country start with 'E';
const countryBeginWithE = countries.filter((country) => country.startsWith('E'));
console.log(countryBeginWithE)

//15
//Use filter to filter out only prices with values.
const pricesWithValues = products.filter((product) => product.price !== '' )
console.log(pricesWithValues)

//16
//Declare a function called getStringLists which takes an array 
//as a parameter and then returns an array only with string items.
function getStringLists(array) {
    return array.filter((item) => typeof item === 'string')
}

//17
//Use reduce to sum all the numbers in the numbers array.
const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum)

//18
//Use reduce to concatenate all the countries and to produce this 
//sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const concatCountries = countries.reduce((acc, country) => acc + ', ' + country)
console.log(concatCountries)

//19
//Explain the difference between some and every
//some checks if some of the elements are similar in one aspect and returns a boolean while 
//every check if all the elements are similar in one aspect and return a boolean 

//20
// Use some to check if some names' length greater than seven in names array
const namesLengthGreaterThanSeven = names.some((name) => name.length > 7);
console.log(namesLengthGreaterThanSeven)

//21
// Use every to check if all the countries contain the word land
const countryWithLand = countries.every((country) => country.includes('land'));
console.log(countryWithLand)

//22
// Explain the difference between find and findIndex.
//find returns the first element which satisfies the given condition while
 //findIndex returns the position of the element which satisfies the given condition.

 //23
// Use find to find the first country containing only six letters in the countries array
const ctryWSixLetters = countries.find((country) => country.length === 6)
console.log(ctryWSixLetters)

//24
// Use findIndex to find the position of the first country containing only six letters in the countries array
const countryWith6Index = countries.findIndex((country) => country.length === 6)
console.log(countryWith6Index)

//25
// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const positionOfNorway = countries.findIndex((country) => "Norway" === country)
console.log(positionOfNorway)

//26
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const positionOfRussia = countries.findIndex((country) => "Russia" === country)
console.log(positionOfRussia)
