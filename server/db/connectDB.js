import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Monogdb connected successfully");
    } catch (error) {
        console.log(`Mongo DB sever Error ${error}`);
    }
}

export default connectDB;