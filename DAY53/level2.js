// Level 2
// Create a closure which has three inner functions
function threeInnerFunction() {
    let brandName = 'La Mode Nouvelle';
    let brandColour = 'gold and purple'
    let brandLaunch = '25th of June'

    function brandDetail() {
        return brandName
    }
    function brandIdentity() {
        return brandColour
    }
    function brandPlan() {
        return brandLaunch
    }
    return{
        brandDetail: brandDetail(),
        brandIdentity: brandIdentity(),
        brandPlan: brandPlan()
    }
}
const innerFunc = threeInnerFunction()

console.log(innerFunc.brandDetail)
console.log(innerFunc.brandIdentity)
console.log(innerFunc.brandPlan)