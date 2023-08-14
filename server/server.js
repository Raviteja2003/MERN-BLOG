const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./db/config")
const cors = require('cors');


dotenv.config();
connectDB();


const app = express();
app.use(express.json());
app.use('*',cors({
    origin:true,
    credentials:true
}))

app.use("/api/auth",require("./routes/authRoutes"))

app.listen(3001,()=>{
    console.log("server is running on port 3001");
})

