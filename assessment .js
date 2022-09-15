const mongoose = require('mongoose');
const user = require('./user');

mongoose.connect('mongodb://localhost:27017/student');


const studentSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    usn :{
        type : String,
        required : true
    },
    dob :{
        type : Date,
        required : true,
    },
    email :{
        type : String,
        required : true
    },
    phone_no :{
        type : Number,
        required : true
    },
    mainAddress :{
        type: [{
        address:String,
    }],
    validate: [arrayLimit, 'exceeds the limit of 5']                //to limit number of entries in address 
}
});

function arrayLimit(val) {
    return val.length <= 5;
  }


// studentSchema.virtual('addressCount').get(function () {
//     return this.address.length;
// });


const Student = mongoose.model('Student',studentSchema);

// Student.schema.path('mainAddress.address').validate(function(value) {
//     return value.length <= 2;
//   }, 'Max limit Reached');
  
//   const opts = { runValidators: true };

run()
async function run(){
    try{
        const student = await Student.create({
            name:'Varshini',
            usn: "4MK18cs010",
            dob :'2000-12-31',
            email :'varshini@gmail.com',
            phone_no :9663865628,
            mainAddress:[{_id: new mongoose.Types.ObjectId(),address:"Hosanagara"}]
        })

        
// to insert the address
        // const updatedSrtudent = await Student.updateOne({_id:"6321a0082e800bae301c04d1" }, {
        //     $push: {
        //       "mainAddress": {address: "Mysore"}
        //     }
        //   });
        // // },opts);                                                                         //to limit number of entries in address


// to delete the address
        // const updatedSrtudent = await Student.updateOne({ _id: '6321a0082e800bae301c04d1' }, { 
        //         "$pull": { 
        //             "mainAddress": { "address": 'Mysore'} }});


// to edit the address
        // const updatedStudent = await Student.updateOne({'mainAddress._id': '6321ad5598ad395b8962f329'}, {'$set': {
        //     'mainAddress.$.address': 'updated item2',
        // }})

    }catch (e){
        console.log(e.message)
        // console.log(e.errors.age)
    }
}