// Level 1
// Store you first name, last name, age, country, city in your browser localStorage.$
// Level 2
// Create a student object. The student object will have first name, 
// last name, age, skills, country, enrolled keys and values for the keys. 
// Store the student object in your browser localStorage.

const student = {
    firstName: 'Asabeneh',
    lastName:'Salawudeen',
    age: 20,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Tailwind'],
    country: 'Namibia'
  }
  
  const studentText = JSON.stringify(student, undefined, 4)
  localStorage.setItem('student', studentText)
