//1
let firstName = 'Abifarin'
let lastName = 'Tolu'
let country = 'Kenya' 
let city = 'Nairobi'
let age = 27
let isMarried = false
let year = '2024'

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

//2
let check = console.log(typeof('10')) == console.log(typeof(10))
console.log(check)

//3
let data = console.log(typeof(parseInt('9.8'))) == console.log(typeof(10))
console.log(data)

//5
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
let texts = console.log('python'.length) != console.log('jargon'.length)
console.log(texts)

//6
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log(!('dragon'.includes('on') && 'python'.includes('on')))

//7
let now = new Date
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now)
console.log(now.getDate())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())

//LEVEL2
//1
// let base = prompt('Enter base: ', 20)
// let height = prompt('Enter height: ', 10)
// let area = 0.5 * base * height
// console.log(area)

//2
let a = prompt('Enter side a: ', 5)
let b = prompt('Enter side b: ', 4)
let c = prompt('Enter side c: ', 3)
let perimeter = a+b+c
console.log(perimeter)
