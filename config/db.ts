import mongoose from "mongoose";

let dbURL: string | undefined = process.env.MONGO_DB_URL;
const connect = async () => {
    if (dbURL) {
        const connect = await mongoose.connect(dbURL);
        if(connect){
            console.log("Database Connected Successfully............");   
        }else{
            console.log("Database Not Connected................");   
        }
    }
}

export default connect;