// Level 2
//1
// Find a union b
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

let c = [...a, ...b]

// let A = new Set(a)
// let B = new Set(b)
let C = new Set(c)

console.log(C)

// Find a intersection b
let A = new Set(a)
let B = new Set(b)
let intersection = a.filter((num)=> B.has(num))
let intersect = new Set(intersection)
console.log(intersect)

// Find a with b
console.log(A.has(b))