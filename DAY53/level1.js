// Create a closure which has one inner function

function oneInnerFunction() {
    let brandName = 'La Mode Nouvelle'
    function brandingDetails() {
        return brandName
    }
    return brandingDetails
}

const innerFunc = oneInnerFunction()

console.log(innerFunc())