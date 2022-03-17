import mongoose from "mongoose";

const connDB = async (DATABASE_URL) => {
    try {
        const DB_OPATION = {
            dbName : 'Org',
        }
        await mongoose.connect(DATABASE_URL, DB_OPATION);
        console.log("connection successful...");
    } catch (error) {
        console.log("Error : "+ error);
    }
}
export default connDB
