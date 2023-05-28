const express = require("express");
const cors = require("cors");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.json())
app.use(cors());
require("./db");

const server = require("http").createServer(app);
const PORT = 3000;

app.get("/",(req, res) => {
    res.json({"Message": "Hello from Pratish"});
})

app.use("/students",studentRoutes);

server.listen(PORT, () =>{
    console.log(`Server is listening on ${PORT}`);
})