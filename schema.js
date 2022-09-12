const { default: mongoose } = require("mongoose");


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
        address : [{

            state :{

                type : String,

                required : true

            },

            city :{

                type : String,

                required : true

            },

            street1 :{

                type : String,

                required : false

            },

            street2 :{

                type : String,

                required : false

            },

            pincode :{

                type : Number,

                required : true

            }

        }]

    });



    module.exports = mongoose.model("Student", studentSchema)

   

   