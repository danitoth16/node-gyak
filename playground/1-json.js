const fs = require('fs')

/* const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',

}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON) */


// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.author)

const dataLoad = fs.readFileSync('1-json.json')
const JSONdata = dataLoad.toString()
const data = JSON.parse(JSONdata)

data.name = 'Daniel'
data.age = '24'

const myJSON = JSON.stringify(data)

fs.writeFileSync('1-json.json', myJSON)
