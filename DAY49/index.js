// call back Let us see a callback function which can take two parameters. The first parameter is err and the second is result. If the err parameter is false, there will not be error other wise it will return an error.

// In this case the err has a value and it will return the err block.
//Callback
const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback('It did not go well', skills)
    }, 2000)
  }
  
  const callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }
  
  doSomething(callback)

//   In this case the err is false and
//    it will return the else block which is the result.

  const didSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback(false, skills)
    }, 2000)
  }
  
  didSomething((err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  })