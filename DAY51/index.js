// Fetch API
// The Fetch API provides an interface for fetching resources 
// (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set. In this challenge we will use fetch to request url and APIS. In addition to that let us see demonstrate use case of promises in accessing network resources using the fetch API.

const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens

//   Async and Await
// Async and await is an elegant way to handle promises. 
// It is easy to understand and it clean to write.

const square = async function (n) {
  return n * n
}

square(2)
