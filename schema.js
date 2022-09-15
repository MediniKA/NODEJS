
const mongoose = require('mongoose');

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
    validate: [arrayLimit, 'exceeds the limit of 2']
}
});

    module.exports = mongoose.model("Student", studentSchema)

   

   