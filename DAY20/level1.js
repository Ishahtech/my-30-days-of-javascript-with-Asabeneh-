// Level 1
// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]
// const countries = ['Finland', 'Sweden', 'Norway']
//1
// create an empty set
const set = new Set()
//2
// Create a set containing 0 to 10 using loop
const setOfNumbers = new Set()
for (let i = 0; i <= 10; i++)
setOfNumbers.add(i)

//3
// Remove an element from a set
set.delete('element')
//4
// Clear a set
set.clear()
// Create a set of 5 string elements from array
const names = new Set()
names.add('Awwal')
names.add('Ade')
names.add('Adefowope')
names.add('Yosi')
names.add('Omoyosola')
console.log(names)
//5
// Create a map of countries and number of characters of a country
 countries = ['Finland', 'Sweden', 'Norway']
const map = new Map(countries, [])

