// var mongo = require('mongodb');

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/user";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo = db.db("mydb");

    //to create collection
    // dbo.createCollection("customers",function(err,res){
    //     if (err) throw err;
    //     console.log("collection created")
    //     db.close()
    // })

    //insertOne i.e to insert one document
    // var myObj = {name:"Company Inc", address:"Chikago", age:12}
    // dbo.collection("customers").insertOne(myObj,function(err, res){
    //     if(err) throw err;
    //     console.log("1 document inserted")
    //     db.close()
    // })
    

    // insertMany i.e to insert multiple documents into a collection
    // var myObj = [
    //     {name:"Ashok K R", address: "Nittur"},
    //     {name:"Gayathri", address:"Banglore"},
    //     {name:"Medini K A", address:"Gowrikere"},
    //     {name:"Varshini",address:"Hosanara"}
    // ];

    // to specify id 
    // var myObj = [
    //     {_id:101,name:"Ashok K R", address: "Nittur"},
    //     {_id:102,name:"Gayathri", address:"Banglore"},
    //     {_id:103,name:"Medini K A", address:"Gowrikere"},
    //     {_id:104,name:"Varshini",address:"Hosanara"}
    // ];

    // dbo.collection("customers").insertMany(myObj, (err,res)=>{
    //     if (err) throw err;
    //     console.log("Number of documents inserted: " + res.insertedCount);
    //     db.close()
    // })

    // findOne() method which returns the first occurrence in the selection
    // dbo.collection("customers").findOne({},(err,result)=>{
    //     if (err) throw err;
    //     console.log(result.name);
    //     db.close()
    // })

    // find() method returns all occurrences in the selection

    // dbo.collection("customers").find({}).toArray(function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    //   });


    //   Find-Some: use projection argument

    // Return the fields "name" and "address" of all documents in the customers collection:
    // dbo.collection("customers").find({}, {projection:{_id:1,name:1,address:1} }).toArray((err,result)=>{

    // exclude "address" from the result:
    // dbo.collection("customers").find({}, { projection: { address: 0} }).toArray(function(err, result) {

    // return only the "name" field:
    // dbo.collection("customers").find({}, { projection: { _id: 0, name: 1 } }).toArray(function(err, result) {

    // return all fields except the _id field
    // dbo.collection("customers").find({}, { projection: { _id: 0 } }).toArray(function(err, result) {

    // get erropr if we specify both 0 and 1 (except id field)
    // dbo.collection("customers").find({}, { projection: { _id: 0, address: 1 } }).toArray(function(err, result) {

    // if (err) throw err;
    // console.log(result)
    // console.log(result[2].address);          //Return the address of the third document:
    // db.close();
    // })
    

    // FILTER----

    // filter: we can filter the result by using a query object
    // var query = {name:"Medini K A"}

    // Filter With Regular Expressions
    // var query = {name:/^Comp/}

    // dbo.collection("customers").find(query).toArray((err,result)=>{
    //     if (err) throw err;
    //     console.log(result)
    //     db.close()
    // })

    // sort

    // sort the result in ascending or descending order
    // var mysort = { name: 1 };

    // sort the result in descending order
    //     var mysort = { name: -1 };

    //     dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    //   });

    // Delete Document
    // var myquery = { address: '/^C/' };

    // to delete one document (only the first occurrence is deleted)
    // dbo.collection("customers").deleteOne(myquery, function(err, obj) {

    // var myquery = { address: /^C/ };
    // // // // to Delete all documents where address starts with the letter "O" 
    // dbo.collection("customers").deleteMany(myquery, function(err, obj) {

    //     if (err) throw err;
    //     console.log("document(s) deleted");
    //     db.close();
    // });

    // to delete a collection
    // dbo.collection("customers").drop(function(err, delOK) {
    //     if (err) throw err;
    //     if (delOK) console.log("Collection deleted");
    //     db.close();
    //   });

    // dbo.dropCollection("customers", function(err, delOK) {
    //     if (err) throw err;
    //     if (delOK) console.log("Collection deleted");
    //     db.close();
    //   });


    // Update Document

    // var myquery = { address: "Sagara" };

    // var newvalues = { $set: {name: "Gayathri Ashok", address: "Sagara" } };
    // var newvalues = { $set: { address: "Nittur" } };                         //Update Only Specific Fields

    // var myquery = {name: /^A/ };
    // var newvalues = {$set: {name: "Agaa"} };


    // dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    //     if (err) throw err;
    //     // console.log("1 document updated");
    //     console.log(res.result.nModified + " document(s) updated");                 //update many documents
    //     db.close();
    // });
    // Limit the resul
    dbo.collection("customers").find().limit(3).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
})
