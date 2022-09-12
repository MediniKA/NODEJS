const mongoose = require('mongoose');
const user = require('./user');
const { getMaxListeners } = require('./user');
const User = require('./user')

mongoose.connect('mongodb://localhost:27017/test'
// ,()=>{
//   console.log("connected")
// },
// e=>console.log(e)
)

run()
async function run(){
  try{
    // const user =await User.findById("631ef7f9c573e5345bc75abe")          // fnd using id
    // const user =await User.find({name:'Varshini'})                       //find using name
    // const user =await User.findOne({name:'Varshini'})                    // find the first 
    // const user =await User.exists({name:'Varshini'})                     //to check exist or not
    // const user =await User.where('name').equals('Varshini')              // return all the user with that name
    // const user =await User.where('age').gt(20)                           //all the user with age greater than 10
    const user =await User.where('age').gt(10)                              // return users age gt 20 
      .where("name").equals('Medini')                                     // return users with name equals to Medini
      .populate("bestFriend")
      .limit(1)                                                             //return only 2 users
      // .select('age')                                                     //return only age
    user[0].bestFriend = "631edf4be03e889690aebff7"
    await user[0].save()
    console.log(user)

    // const user = await User.create({
    //   name:'Varshini',
    //   age: 18,
    //   email:'Test@gmail.com',
    //   hobbies:['Bike Riding', 'Solving Puzzle'],
    //   address:{
    //     street:'Agameva',
    //   },
    // })  
    // user.createdAt=5
    // // user.name = 'abc'        //to update the name
    // // await user.save()
    // // const user = new User({name:'Medini', age:22})
    // await user.save()
    // console.log(user)
  }catch (e){
    console.log(e.message)
    // console.log(e.errors.age)
  }
}
