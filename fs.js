
// fs Module

const fs = require('fs')
//read file

// const readMe = fs.readFileSync('./docs/readMe.txt','utf8')               //Synchronous Read
// console.log(readMe)
           

// fs.readFile('./docs/readMe.txt',(err, data)=>{              
//     if (err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })
// console.log('Last Line')                    //execute this line first

//writing File

// fs.writeFile('./docs/writeMe.txt',"Hello World", ()=>{
//     console.log("File was written")
// }) 

// fs.writeFile('./docs/blog.txt',"Hello World", ()=>{
//     console.log("File was written")
// }) 

// fs.writeFile('./docs/writeMe.txt','console.log("done")', function(err){             //to write a file... replace the entire content
//     console.log("Data Server")
// })

// directories
// if (!fs.existsSync('./assets')){
//     fs/fs.mkdir('./assets',(err)=>{
//         if (err){
//             console.log(err);
//         }
//         console.log('folder Created')
//     })
// }
// else{
//     fs.rmdir('./assets',(err)=>{
//         if (err){
//             console.log(err)
//         }
//         console.log('Folder deleted')
//     })
// }


// deleting files

if(fs.existsSync('./docs/deleteMe.txt')){
    fs.unlink('./docs/deleteMe.txt',(err)=>{
        if (err){
            console.log(err)
        }
        console.log('file deleted')
    })
}





// const counter = require('./count')
// console.log(counter(['abc','def','ghi']))

// var stuff = require('./stuff')
// console.log(stuff(['abc','def','ghi']))


// var calc = require('./cacl')
// result = calc.mul(4,5)

// console.log('The output is ' + result)










// fs.appendFile('calc.js','console.log("done")', function(err){             //to write a file ... add at the end
//     console.log("Data Server")
// })
