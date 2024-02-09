const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnect= ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })

    .then(console.log("Database connected successfully"))
    .catch((error)=>{
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    })
} 