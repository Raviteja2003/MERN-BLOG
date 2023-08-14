const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Monogdb connected ${mongoose.connection.host}`)
    } catch (error) {
        console.log(`Mongo DB sever Error ${error}`);
    }
}

module.exports=connectDB;