import express from "express"
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"; // Import cookie-parser
import apiConfig from './import/import-function';

dotenv.config()

const PORT = process.env.PORT
const app = express()
app.use(cors({ credentials: true }));
app.use(express.json());
app.use(cookieParser());
apiConfig.connect()
app.use('/v1',apiConfig.userRouter)
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
}).on("error", (err) => {
    if (err.message == "EADDRINUSE") {
        console.error(`❌ Port ${PORT} is already in use.`);
    }
    else {
        console.error("❌ Server error:", err);

    }
})