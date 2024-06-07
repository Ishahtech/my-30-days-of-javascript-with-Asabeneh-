//Reference Error
let firstName = 'Asabeneh'
let fullName = firstName + ' ' + lastName
console.log(fullName)

//SyntaxError
let square = 2 x 2
console.log(square)
console.log('Hello, world")

//TypeError
let num = 10
console.log(num.toLowerCase())

//try and catch 
try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.error(err) // we can use console.log() or console.error()
  } finally {
    console.log('In any case I will be executed')
  }

  try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log('Name of the error', err.name)
    console.log('Error message', err.message)
  } finally {
    console.log('In any case I will be executed')
  }