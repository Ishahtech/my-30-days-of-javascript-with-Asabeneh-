
// Print out all the cat names in to catNames variable.
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

const getCatnames = async () => {
    try {
      const response = await fetch(catsAPI)
      const cats = await response.json()
      const catNames =  cats.map(cat => cat.name)
      console.log(catNames)
    } catch (err) {
      console.error(err)
    }
  }
  console.log('===== async and await')
  getCatnames()

