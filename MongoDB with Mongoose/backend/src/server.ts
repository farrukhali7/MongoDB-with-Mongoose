// import express , {Response , Request} from "express"
// import cors from "cors"
// import connectDB from "./config/db";
// import User from "./models/User";

// const app = express();
// const PORT = 5000;

// app.use(cors())
// app.use(express.json())

// app.listen(PORT , ()=>{
//     console.log(`Server is running on PORT: ${PORT}`);
// })

// connectDB();        //so when you start your server it will connect to MongoDb that is running locally.

// //This Saves a new user into MongoDB
// app.post("/users" , async(req,res)=>{
//     const {name,email,password} = req.body;

//     const user = new User({name,email,password})
//     await user.save();

//     res.json(user);
// })

// //fetches all users from the database:
// app.get("/users" , async(req , res)=>{
//     const users = await User.find();
//     res.json(users)
// }) 

// //fetch one user from the database
// app.get("/users/:id" ,async(req,res)=>{
//     const fusers = await User.findById(req.params.id);      // req.params is an object that holds all the route parameters from the URL.
//     res.json(fusers)
// })

// //delete a user from database
// app.delete("/users/:id" , async(req,res)=>{
//     const duser = await User.findByIdAndDelete(req.params.id);
//     res.json(duser)
// })

// //Put Route:
// app.put("/users/:id" , async(req,res)=>{
//     const updatedUser = await User.findByIdAndUpdate(
//         req.params.id,      // which document to update .(Required)
//         req.body,            //what fields to update. (Required)
//         {new:true,          // By default, Mongoose returns the old document (before the update). by '{new:true}' you get the updated document back. (Optional)
//         runValidators:true      //(Optional) it is just to check that the updated version checks the schema rules
//         }
//     );
//     res.json(updatedUser)
// })

// // "MongoDB" is the database to where all the data is stored and "mongoose" is the library that makes working with MongoDB easier by adding schemas,validation, and cleaner queries
// // MongoDB is a noSQL database which means data can be stored in a more flexible manner rather than like SQL database where data must be stored in tables(rows and columns) form.
// // MongoDB stores data in BSON (Binary JSON), which is basically JSON with extra features.
// // schemas: It defines what fields a document should have and what type they should be.
// // validation:  checks if the data is correct before saving it to the database.This prevents bad or incomplete data from entering your database.
// // cleaner queries:Raw MongoDB queries can be long and complex. Mongoose provides a simpler, more structured way to query.
// // Express is a web framework() that handles requests and responses, it doesn't store data.
// // "CRUD" API= (foundation of backend development)
// // C: Create / POST
// // R: Read / GET
// // U: update / PUT
// // D: delete / DELETE





// MINI TASK:
import express,{Request , Response} from "express";
import cors from "cors"
import PConnectDB from "./config/db";
import Product from "./models/User";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.listen(PORT , ()=>{
    console.log(`Server is running on PORT: ${PORT}`);
})

//calling database
PConnectDB()

//for saving the product in the database
app.post("/products" , async(req, res)=>{
    const {name,price,stock} = req.body

    const item = new Product({name , price, stock});
    await item.save();

    res.json(item);
})


// Finding the product
app.get("/products/:id" , async(req,res)=>{
    const findItem = await Product.findById(req.params.id);
    res.json(findItem)
})


//fetching all products
app.get("/products" , async(req,res)=>{
    const fetching = await Product.find();
    res.json(fetching);
})


//deleting any product
app.delete("products/:id" , async(req,res)=>{
    const deleteItem = await Product.findByIdAndDelete(req.params.id);
    res.json(`Item deleted ${deleteItem}`);
})


//to Update:
app.put("products/:id" , async(req,res)=>{
    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true,
            runValidators:true
        }
    )
})





// Summary: 
// the "MongoDB" is the database where all the data is stored(like a client credentials).... 
// "Mongoose" is the library that connects backend(Node.js/Express) to database(MongoDB) and also it makes easier for us as using this we just have to use the builtin functions(like in js) instead of raw database commands
//  "Express" is the backend that listens for requests of clients and also provides routes like /users that clients can call 
// "Thunder Client or Frontend" is an extension in vscode that lets you send requests to the backend (Thunder Client sends a POST request → backend saves data → MongoDB stores it.)
//  "Mongosh" is a tool that interacts directly with MongoDB to check what's inside the database or to verify that the data was saved correctly(like "db.users.find()" will get you see all users who signed up)