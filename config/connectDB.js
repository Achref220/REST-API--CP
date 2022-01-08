// 1 require mongoose
const mongoose = require("mongoose");

//connect to database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("the database is connected");
    } catch (err) {
        console.log(err);
    }
};
module.exports = connectDB;