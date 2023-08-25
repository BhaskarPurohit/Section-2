const fs = require('fs')

//Sync way

// const fileText = fs.readFileSync('file.txt','utf8')

// console.log(fileText)

// const textAdd = `i am added to the file ${Date.now()}`

// fs.writeFileSync('file.txt',textAdd)

// //writing a new file
// fs.writeFileSync('output.txt', textAdd)

// console.log(fileText)


//Async way

// const callbackFn= (err,data)=>{
//     if(err){
//         console.error("could not find the file")
//     }
//     console.log(data) 
// }


// fs.readFile('async.txt','utf8',callbackFn)

//non blocking way to access the files

fs.readFile('file.txt','utf8',(err,data)=>{
    fs.readFile(`${data}`)
})