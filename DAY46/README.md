## HTML5 Web Storage, focusing on localStorage and sessionStorage.

 These storage solutions are vital for web applications to store data on the client-side.
 
  I learned how to use localStorage.setItem(key, value) to store data in the browser with no expiration time, and how localStorage.getItem(key) retrieves the stored data. 
  
  Additionally, I explored how localStorage.removeItem(key) removes the specified data item, and localStorage.clear() clears all stored data. Understanding how to utilize web storage effectively can significantly enhance the performance and user experience of web applications.

  When we set data to be stored in a localStorage, it will be stored as a string. If we are storing an array or an object, we should stringify it first to keep the format unless otherwise we lose the array structure or the object structure of the original data.

We store data in the localStorage using the localStorage.setItem method.

//syntax
localStorage.setItem('key', 'value')
Storing string in a localStorage
localStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it
console.log(localStorage)
Storage {firstName: 'Asabeneh', length: 1}
Storing number in a local storage
localStorage.setItem('age', 200)
console.log(localStorage)
 Storage {age: '200', firstName: 'Asabeneh', length: 2}