const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv").config();
const todoRouter = require("./routers/todoRouter");

app.use(express.json());
app.use(cors());
app.use(express.json({ extended: true }));

app.use("/api/v1/todo", todoRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
