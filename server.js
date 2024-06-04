//Server
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import connectdB from './dB/connect.js';
import morgan from 'morgan';
import blogroute from './routes/blogroute.js';

const app = express();
dotenv.config();
connectdB();


app.use(express.json());
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(path.join(process.cwd(), "/Public")))
app.use("/uploads", express.static(path.join(process.cwd(), "/uploads")))

// Middleware for handling 404 errors
app.use((req, res, next) => {
     res.status(404).sendFile(path.join(process.cwd(), "/View/404.html"));
});

app.use('/api/v1/blog', blogroute);

const PORT = process.env.PORT || 7000
app.listen(PORT, () => {
     console.log(`Server running on http://localhost:${PORT}`.bgMagenta);
});