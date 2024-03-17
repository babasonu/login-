const express = require("express")
const User = require("./db/user")
//const mongoose = require("mongoose")
require('./db/config')
const app = express();
const cors = require("cors")

//const connectDB = async () => {

//  mongoose.connect("mongodb://localhost:27017/e-com-dashbase");
//const productSchema = new mongoose.Schema({});
//const product = mongoose.model("products", productSchema);

//const data = await product.find();

//console.warn(data)
//}
//connectDB();
app.use(cors());
app.use(express.json());


app.post("/register", async (req, resq) => {

    let user = new User(req.body);

    let result = await user.save();

    resq.send(result)

})


app.listen(5000)