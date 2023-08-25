// const fs = require("fs")


// const callbackFn = ()=>{
//     console.log("timer finished")
// }


// const callbackImmediate = ()=>{
//     console.log("immediate 1 finished")
// }

// const fileRead = ()=>{
//     console.log("I/O finished")
// }

// setTimeout(callbackFn, 0)
// setImmediate(callbackImmediate)

// fs.readFile("test-file","utf-8", fileRead)

// console.log("hello from top level code")

const fs = require("fs")

setTimeout(()=>{
    console.log("timer 1 finished")
}, 0)

setImmediate(()=>{
    console.log("immediate 1 finished")
})


fs.readFile("test-file.txt",()=>{
    console.log("I/O finished")
    console.log("---------------")

    setTimeout(()=>{
        console.log("timer 2 finished")
    },0)

    setTimeout(()=>{
        console.log("timer 3 finished")
    },3000)

    setImmediate(()=>{
        console.log("immmediate 2 finished")
    })

    process.nextTick(()=> console.log("procees.nextTick"))
})


console.log("hello from top level code")