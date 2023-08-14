const express = require('express');
const dotenv = requre('dotenv');
const connectDB = require("./db/config")


const app = express();
app.use(express.json());

dotenv.config();

connectDB();

app.use("/api/auth",require("./routes/authRoutes"))

app.listen(3001,()=>{
    console.log("server is running on port 3001");
})

