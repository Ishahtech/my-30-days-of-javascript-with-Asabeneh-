//1
let youAge = prompt('enter your age')
if (youAge >= 18 ){
    console.log('You are old enough to drive.')
} else {
console.log(`You are left with ${18 - youAge} years to drive.`)
}

//2
let myAge = 24
let yourAge = prompt("enter your age")
if (yourAge > myAge){
    console.log(`you are ${yourAge - myAge} years older than me`)
} else{
    console.log(`I am ${myAge - yourAge} years older than you`)
}

//3
// let a = 4
// let b = 3
// if (a > b){
//     console.log('a is greater than b') 
// }else {
//     console.log('a is less than b')
// }

//ternary operator
let a = 4
let b = 3
a > b ?  console.log('a is greater than b') : console.log('a is less than b')

//4
let even = prompt('enter a number')
let evenNumber = even % 2 
evenNumber = 0 ? console.log(`${even} is an even number`) : console.log(`${even} is an odd number`)