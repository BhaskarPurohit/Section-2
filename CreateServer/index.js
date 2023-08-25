const fs = require('fs')
const http = require('http')

const callbackFn =(req,res)=>{
    console.log(req)
    res.end("hello from the server")
}


const server = http.createServer(callbackFn)

server.listen(3000,'127.0.0.1', ()=>{   // application running on  127.0.0.1:3000 
    console.log('app is running on port ')
})