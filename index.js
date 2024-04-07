import express from "express";
import bodyParser from "body-parser";
import userRoutes from './routes/user.js'

const app = express();
const port = 8000;

app.use('/user',userRoutes)

app.use(bodyParser.json());

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

app.get("/", (req, res) => res.send("hello from homepage"));
