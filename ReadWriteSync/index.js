const fs = require('fs')

const fileText = fs.readFileSync('file.txt','utf8')

console.log(fileText)

const textAdd = `i am added to the file ${Date.now()}`

fs.writeFileSync('file.txt',textAdd)

//writing a new file
fs.writeFileSync('output.txt', textAdd)

console.log(fileText)
