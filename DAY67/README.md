Document Object Model (DOM) - Day 1
HTML document is structured as a JavaScript Object. Every HTML element has a different properties which can help to manipulate it. It is possible to get, create, append or remove HTML elements using JavaScript. Check the examples below. Selecting HTML element using JavaScript is similar to selecting using CSS. To select an HTML element, we use tag name, id, class name or other attributes.

Getting Element
We can access already created element or elements using JavaScript. To access or get elements we use different methods. The code below has four h1 elements. Let us see the different methods to access the h1 elements.

<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Document Object Model</title>
    </head>
    <body>

     <h1 class='title' id='first-title'>First Title</h1>
     <h1 class='title' id='second-title'>Second Title</h1>
     <h1 class='title' id='third-title'>Third Title</h1>
     <h1></h1>

    </body>
  </html>
Getting elements by tag name
getElementsByTagName():takes a tag name as a string parameter and this method returns an HTMLCollection object. An HTMLCollection is an array like object of HTML elements. The length property provides the size of the collection. Whenever we use this method we access the individual elements using index or after loop through each individual items. An HTMLCollection does not support all array methods therefore we should use regular for loop instead of forEach.

// syntax
document.getElementsByTagName('tagname')
const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}
Getting elements by class name
getElementsByClassName() method returns an HTMLCollection object. An HTMLCollection is an array like list of HTML elements. The length property provides the size of the collection. It is possible to loop through all the HTMLCollection elements. See the example below

//syntax
document.getElementsByClassName('classname')
const allTitles = document.getElementsByClassName('title')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}
Getting an element by id
getElementsById() targets a single HTML element. We pass the id without # as an argument.

//syntax
document.getElementById('id')
let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>
Getting elements by using querySelector methods
The document.querySelector method can select an HTML or HTML elements by tag name, by id or by class name.

querySelector: can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.

let firstTitle = document.querySelector('h1') // select the first available h1 element
let firstTitle = document.querySelector('#first-title') // select id with first-title
let firstTitle = document.querySelector('.title') // select the first available element with class title
querySelectorAll: can be used to select html elements by its tag name or class. It returns a nodeList which is an array like object which supports array methods. We can use for loop or forEach to loop through each nodeList elements.

const allTitles = document.querySelectorAll('h1') # selects all the available h1 elements in the page

console.log(allTitles.length) // 4
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i])
}

allTitles.forEach(title => console.log(title))
const allTitles = document.querySelectorAll('.title') // the same goes for selecting using class
Adding attribute
An attribute is added in the opening tag of HTML which gives additional information about the element. Common HTML attributes: id, class, src, style, href,disabled, title, alt. Lets add id and class for the fourth title.

const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'
Adding attribute using setAttribute
The setAttribute() method set any html attribute. It takes two parameters the type of the attribute and the name of the attribute. Let's add class and id attribute for the fourth title.

const titles = document.querySelectorAll('h1')
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')
Adding attribute without setAttribute
We can use normal object setting method to set an attribute but this can not work for all elements. Some attributes are DOM object property and they can be set directly. For instance id and class

//another way to setting an attribute
titles[3].className = 'title'
titles[3].id = 'fourth-title'
Adding class using classList
The class list method is a good method to append additional class. It does not override the original class if a class exists rather it adds additional class for the element.

//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.add('title', 'header-title')
Removing class using remove
Similar to adding we can also remove class from an element. We can remove a specific class from an element.

//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.remove('title', 'header-title')