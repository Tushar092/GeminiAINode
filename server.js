const express = require("express");
const run = require("./controllers/geminiContoller");
require("dotenv").config();
const app = express();

app.use(express.json());

app.get("/", run);

app.listen(process.env.PORT, () => {
    console.log(`Server listening to port ${process.env.PORT}`);
});
