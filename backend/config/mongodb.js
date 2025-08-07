import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log("DataBase Connected"))
    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)
}

export default connectDB
/*
// callback function --- functiion passed inside another function, we give permision to run a function to another function
// function abc(){
// }
   mongoose.connection.on('connected', abc)
   mongoose.connection.on('connected', abc())



*/