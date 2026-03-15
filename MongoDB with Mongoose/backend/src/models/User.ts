// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({        //schema defines the structure of your documents.It defines what fields a document should have and what type they should be.
//     name: String,       //s of string here should be capital
//     email: String,
//     password: String
// })

// const User = mongoose.model("User",userSchema);     // model is what you use in a code to interact with that collection.Without a model, you can’t run queries or save data
// export default User;





//MINI TASK:
import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    stock:Number
}
)
const Product = mongoose.model("Product" , productSchema)
export default Product;