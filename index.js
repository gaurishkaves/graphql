import express from "express";
import schema from "./libs/schema.js";
import { graphqlHTTP } from "express-graphql";
import MongoDB from "./config/mongoConnector.js"



const app = express();



app.get("/",(req,res)=>{
    res.send("Graph QL Tuitorial")
})

app.use("/graphql",graphqlHTTP({
    schema:schema,
    graphiql:true,
    
}))

app.listen('3000',()=> console.log("Sever started on 3000"))