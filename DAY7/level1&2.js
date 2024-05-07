//level 1
//1
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
  //1
//   Iterate 0 to 10 using for loop, do the same using while and do while loop
//for loop
  for ( i = 0; i <= 10; i++) {
    console.log(i)}
 //while loop
   let j = 0
    while (j <= 10){
        console.log(j)
        j++;
    }
// do while loop
    let k = 0
    do {
        console.log(k)
        k++
    } while (k <= 10)

//2
//Iterate 10 to 0 using for loop, do the same using while and do while loop
//for loop
for ( d = 10; d >= 0; d--)
 //while loop
  m = 10
 while (m >= 0){
     console.log(m)
     m--;
 }
 // do while loop
 let f = 10
 do {
     console.log(f)
     f--
 } while (f >= 0)

//3
//Iterate 0 to n using for loop
// for (let a = 0; a <= n; a++ ){
//     console.log(a)
// }
//4
/* 
Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
for (let i = 1; i <= 7; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += '#';
    }
    console.log(line);
}

//5
for (let l = 0; l <= 10; l++) {
    console.log(`${l} * ${l} = ${l * l}`)
}

//6
console.log ('i i^2 i^3') 
for (let i = 0; i <= 10; i++){
    const iSquared = i * i
    const iCubed = i * i * i
console.log(`${i} ${iSquared} ${iCubed}`)
} 

//7
//Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) 
console.log(i)
}
//8
//Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 1) 
console.log(i)
}
//9
//Use for loop to iterate from 0 to 100 and print only prime numbers
// for (let i = 0; i <= 100; i++){
//     if ((i / i == 1 ) && (i / 1 == i))
//     console
// }
//10
// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
const num = []
let add = 0
for (let i = 0; i<= 100; i++){
    add = add + num[[i]]
}
console.log(add)
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]

}

console.log(sum)  // 15