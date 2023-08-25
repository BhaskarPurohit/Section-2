const http = require("http")
const fs = require("fs")
const superagent = require("superagent")



fs.readFile(`${__dirname}/dog.txt`,(err, data)=>{
    console.log(`Breed: ${data}`)

    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err, result)=>{
        console.log(result.body)

        fs.writeFile('dog-img.txt', result.body.message, err=>{
            console.log("random dog image saved to the file")
        })
    })
})