const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/student')



// const Student = require("./studSchema")



// studentCreation()

// deleteAddress()

// async function studentCreation(){

//     try{

//         const student = await Student.insertMany([

//             {

//                 name : "Sameeksha",

//                 usn : "4mk18cs015",

//                 dob : 25-06-2000,

//                 email : "sameeksha@gmail.com",

//                 phone_no : 9945713577,

//                 address :

//                 [{

//                     state : "Karnataka",

//                     city : "Shimoga",

//                     street1 : "Sagar",

//                     pincode : 577401

//                 }]

//             },  
//             {

//                 name : "Medini",

//                 usn : "4mk18cs010",

//                 dob : 11-05-2000,

//                 email : "medini@gmail.com",

//                 phone_no : 8546912225,

//                 address : [{

//                     state : "Karnataka",

//                     city : "Mysore",

//                     street1 : "Mandya",

//                     street2 : "Maddur",

//                     pincode : 577401  

//                 }]

//             },

//     ])

//     console.log("User inserted !!")

//     }

//     catch(error){

//         console.log(error)

//     }

// }
// async function updateAddress(){

//     try{

//         const findStudent = await Student.find({

//             name : "Medini"

//         })

//     }

// }
// async function deleteAddress(){

//     try{

//         const deleteStudent = await Student.findOneAndDelete({

//             name : "Medini"

//         })

//         console.log("Deleted the user " + deleteStudent)

//     }catch(error){

//         console.log(error.message)

//     }

// }

