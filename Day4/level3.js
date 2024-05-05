let monthInput = prompt('Enter a month')
let month = monthInput.toLowerCase()

switch (month) {
    case 'september':
    case 'april':
    case 'june':
    case 'november':
        console.log(`${month} has 30 days`)
    break;
    case 'february':
        console.log(`${month} has 28 days`)
    break;
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${month} has 31 days`)
    break;
    default:
        console.log(`${month} does not exist`)
}