// HTTP Modules

const http = require('http')

// const server = http.createServer((req,res) => {
//     if(req.url == '/'){
//         res.write('Hello world')
//         res.end()
//     }
//     if(req.url === '/api/courses'){
//         res.write(JSON.stringify([1,2,3]))
//         res.end()
//     }
// })

// // server.on('connection', (socket) =>{
// //     console.log('New Connection')
// // })
// server.listen(3000)
// console.log('Listening on port 3000...')



// http.createServer((req,res) =>{
//     res.write('Hello world');
//     res.end()
    
// }).listen(5000, () => console.log('Server Running'))


// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-type':'text/html'})
//     res.end("Welcome Back")
// }).listen(8080)


const server = http.createServer((req,res) =>{
    console.log(req.url,req.method)

    // set header content type

    res.setHeader('Content-Type','text/plain')

    res.write('hello, Medini')
    res.end()
})

server.listen(3000,'localhost',()=>{
    console.log('listening for request on port 3000')
})
