// Override the method you create in Animal class

class Student extends Person {
    constructor(firstName, lastName, age, country, city, gender) {
      super(firstName, lastName, age, country, city)
      this.gender = gender
    }
  
    saySomething() {
      console.log('I am a child of the person class')
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
  
      let formattedSkills = skills ? `He knows ${skills}` : ''
      let pronoun = this.gender == 'Male' ? 'He' : 'She'
  
      let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
      return info
    }
  }
  
  const s1 = new Student(
    'Asabeneh',
    'Yetayeh',
    250,
    'Finland',
    'Helsinki',
    'Male'
  )
  const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
  s1.setScore = 1
  s1.setSkill = 'HTML'
  s1.setSkill = 'CSS'
  s1.setSkill = 'JavaScript'
  
  s2.setScore = 1
  s2.setSkill = 'Planning'
  s2.setSkill = 'Managing'
  s2.setSkill = 'Organizing'
  
  console.log(s1)
  
  console.log(s1.saySomething())
  console.log(s1.getFullName())
  console.log(s1.getPersonInfo())
  
  console.log(s2.saySomething())
  console.log(s2.getFullName())
  console.log(s2.getPersonInfo())