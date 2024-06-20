// promise constructor

// promise settled with resolve
const promise = new Promise( (resolve, reject) => {
    resolve('success')
    reject('failure')
})

const doPromise =new Promise((resolve, reject) => {
    setTimeout(() =>{
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 0) {
        resolve(skills)
    } else{
        reject('something went wrong')
    }
    }, 2000)
})

doPromise .then(result => {
    console.log(result)
})
.catch(error => console.log(error))

// promise settled with reject.

const makePromise = new Promise((resolve, reject)=> {
    setTimeout(() => {
        const skill = ['HTML', 'CSS', 'React']
        if (skill.includes('Node')){
            resolve('H]fullstack dveloper')
        } else {
            reject('oops, you do not have enough skills')
        }
    }, 2000)
})

makePromise .then(result => {
    console.log(result)
})
.catch(error => {
    console.log(error)
})