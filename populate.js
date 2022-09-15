const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test1')

// const userSchema = new mongoose.Schema({
//     username: String,
//     email: String
// })

// const postSchema = new mongoose.Schema({
//     title: String,
//     postedBy: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User"
//     }
// })


// const User = mongoose.model('User', userSchema);
// const Post = mongoose.model('Post', postSchema);

// // const user = User.create({
// //     username:'Medini',
// //     email:'medini@gmail.com'
// // })

// // const post = Post.create({
// //     Title:'Hello India',
// // })

// Post.find({title:'Hello'})
// .populate("postedBy")
// .then(p=>console.log(p))
// .catch(error=>console.log(error));


// const { Schema } = mongoose;

// const personSchema = Schema({
//     _id: Schema.Types.ObjectId,
//     name: String,
//     age: Number,
//     stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
//   });
  
//   const storySchema = Schema({
//     author: { type: Schema.Types.ObjectId, ref: 'Person' },
//     title: String,
//     fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
//   });
  
//   const Story = mongoose.model('Story', storySchema);
//   const Person = mongoose.model('Person', personSchema);


// //   const author = new Person({
// //     _id: new mongoose.Types.ObjectId(),
// //     name: 'Medini',
// //     age: 22
// //   });
  
// //   author.save(function (err) {
// //     if (err) return handleError(err);
  
// //     const story1 = new Story({
// //       title: 'Hello',
// //       author: author._id    // assign the _id from the person
// //     });
  
// //     story1.save(function (err) {
// //       if (err) return handleError(err);
// //       // that's it!
// //     });
// //   });


// Story.
//   findOne({ title: 'Casino Royale' }).
//   populate('author').
//   exec(function (err, story) {
//     if (err) return handleError(err);
//     console.log('The author is %s', story.author.name);
//     // prints "The author is Ian Fleming"
//   });


const Schema = mongoose.Schema;

const UserSchema = new Schema({
   name: String,
   email: String,
   blogs: [{ 
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog"
   }]
});


const BlogSchema = new Schema({
    title: String,
    user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "User"
    },
    body: String,
    comments: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Comment"
    }]
 })

 const CommentSchema = new Schema({
    user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "User"
    },
    blog: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "Blog"
    },
    body: String
 })

 
const User = mongoose.model("Author", UserSchema);
const Blog = mongoose.model("Blog", BlogSchema);
const Comment = mongoose.model("Comment", CommentSchema);


const user1 = new User({
    name:'Medini K A',
    email:"meds@gmail.com",
    blogs:Blog._id
})
user1.save()

const user2 = new Comment({
    user:user1.name
})
user2.save()

User
   .findOne({_id: userId })
   .populate("blogs") // key to populate
   .then(user => {
      res.json(user); 
   });