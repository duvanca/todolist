const express = require("express");
const {router} = require("./tasks/task.router")

require("dotenv").config();

const app = express();

const port = process.env.PORT

app.use(express.json());

app.use("/api/v1", (router))


app.listen(port, () => {
    console.log(`Server started at port ${port}`);
  });