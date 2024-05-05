let score = prompt('enter your score')
if (score >= 90 && score <= 100) {
    console.log('A')
} else if (score >= 70 && score <= 89){
    console.log('B')
}else if (score >= 60 && score <= 69){
    console.log('C')
}else if (score >= 50 && score <= 59){
    console.log('B')
}else{
    console.log('D') 
}

//2
let season = prompt('what month are we in')
switch (season) {
    case 'September':
    case 'October':
    case 'November':
        console.log('the season is Autumn')
        break;
    case 'December':
    case 'January':
    case 'February':
        console.log('the season is Winter')
        break;
    case 'March':
    case 'April':
    case 'May':
        console.log('the season is Spring')
        break;
    case 'June':
    case 'July':
    case 'August':
        console.log('the season is Summer')
        break;
    default:
        console.log('season is unknown');
}

//3
let dayInput = prompt('What is the day  today?')
let day = dayInput.toLowerCase()

switch (day) {
    case 'sunday':
    case 'saturday':
        console.log(`${day} is a weekend`)
    break;
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(`${day} is a working day`)
    break;
    default:
        console.log(`${day} is invalid`)
}