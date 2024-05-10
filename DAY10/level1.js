//Declare a function fullName and it print out your full name.
//1
function fullName(){
    let fullName = 'Aishat Olabisi'
    console.log(fullName)
}
fullName()
//2
//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName){
    return(`${firstName} ${lastName}`)
}
console.log(fullName('Aishat', 'Salawudeen'))
//3
//Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a, b){
    let sum = a + b
    return sum
}
console.log(addNumbers(6, 8))
//4
//An area of a rectangle is calculated as follows: area = length x width. 
//Write a function which calculates areaOfRectangle
function areaOfRectangle(length, width){
    let area = length * width
    return area
}
console.log(areaOfRectangle(14,6))
//5
//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width).
// Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width){
    let perimeter = 2 * (length + width)
    return perimeter
}
console.log(perimeterOfRectangle(4,8))
//6
//A volume of a rectangular prism is calculated as follows: volume = length x width x height. 
//Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height){
    let volume = length * height * width
    return volume
}
console.log(volumeOfRectPrism(48,3,3))
//7
//Area of a circle is calculated as follows: area = π x r x r. 
//Write a function which calculates areaOfCircle
function areaOfCircle(radius){
    area = Math.PI * radius * radius
    return area
}
console.log(areaOfCircle(26))
//8
//Circumference of a circle is calculated as follows: circumference = 2πr. 
//Write a function which calculates circumOfCircle
function circumOfCircle(radius) {
    circumference = 2 * Math.PI * radius
    return circumference
}
console.log(circumOfCircle(35))
//9
//Density of a substance is calculated as follows:density= mass/volume.
//Write a function which calculates density.
function density(mass,volume){
    density = mass / volume
    return density
}10

console.log(density(17,23))
//10
//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken.
// Write a function which calculates a speed of a moving object, speed.
