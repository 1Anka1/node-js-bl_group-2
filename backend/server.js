require("colors");
const dotenv = require("dotenv");
const express = require("express");
const app = express();

//JSON parse from body
app.use(express.json())
//Form parsing
app.use(express.urlencoded({extended: false}))
const path = require("path");

// Load config variables
const configPath = path.join(__dirname, "..", "config", ".env");
dotenv.config({ path: configPath });

//Set Routes
const routerApi = require("./routes/films");
app.use("/api/v1", routerApi);

const connectionDb = require("../config/db");

connectionDb();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
