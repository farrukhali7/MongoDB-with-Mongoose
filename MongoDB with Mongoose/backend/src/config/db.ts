// //Connecting Node.js to MongoDB

// import mongoose from "mongoose";

// const connectDB = async()=>{
//     try {
//         await mongoose.connect("mongodb://127.0.0.1:27017/mern-app");       //this line is called "MongoDB connection string (URI)."
//         console.log("MongoDB connected");
//     } catch (error) {
//         console.error("Database connection failed");
//         process.exit(1)
//     }
// }
// export default connectDB

// // Explaining the link:
// // 'mongodb://' is the protocol that tells mongoose that you are connecting to mongoDB database
// // '127.0.0.1:' is the IP of your database server , it means localhost(your computer) 
// // '27017' is the default port number where mongoDB runs
// //mern-app → the name of the database you want to connect to. If it doesn’t exist yet, MongoDB will create it automatically when you insert data.





// MINI TASK:
import mongoose from "mongoose"

const PConnectDB = async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/mern-app-mini-task")
        console.log("MongoDB connected!");
    } catch (error) {
        console.error("Connection Failed!");
        // process.exit(1);        //is a Node.js command that tells your program to stop running immediately and exit with a specific status code.0 usually means success (everything ran fine).Any non‑zero number (like 1) means failure or error.
    }
}
export default PConnectDB;