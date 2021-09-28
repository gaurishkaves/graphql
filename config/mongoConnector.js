import mongoose from "mongoose";


class MongoConnect{
    constructor(){
        mongoose.Promise = global.Promise;

   new Promise((resolve,reject)=>{ 
       mongoose.connect("mongodb://127.0.0.1:27017/",{
        useNewUrlParser:true,
        useUnifiedTopology:true

    }).then(()=>{console.log("connected")},err=>{console.log(err)})


    
    
});
    }
    
    
}
const MongoDB = new MongoConnect()
export default MongoDB;

/*
mongoose.connection.on('conneted',()=> resolve())

    mongoose.connection.on('error',error=>{
        reject(error)
        
    })
    */



