import mongoose from "mongoose";

const dbconfig = () => {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;
    } catch (error) {
        console.log("something error happened")
    }
}

export default dbconfig