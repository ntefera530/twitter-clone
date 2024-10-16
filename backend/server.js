import express from "express";
import authRoutes from "./routes/auth-routes.js";
import connectMongoDB from "./db/connect_mongoDB.js"
import dotenv from "dotenv"


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;


app.use("/api/auth", authRoutes);




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
})