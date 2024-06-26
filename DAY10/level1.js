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
}
console.log(density(17,23))
//10
//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken.
// Write a function which calculates a speed of a moving object, speed.
function speed(distance,time){
    speed = distance / time;
    return speed
}
console.log(speed(24, 8))
//11
//Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass, gravity){
   return mass * gravity
}
console.log(weight(63, 9.8))
//12
//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. 
//Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(oC) {
    return (oC * 9/5) + 32;
}
console.log(convertCelsiusToFahrenheit(6700000))

/*
    Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
    Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
    Check if a person is underweight, normal, overweight or obese based the information given below.

    The same groups apply to both men and women.
    Underweight: BMI is less than 18.5
    Normal weight: BMI is 18.5 to 24.9
    Overweight: BMI is 25 to 29.9
    Obese: BMI is 30 or more
    */
   