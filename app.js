const express = require("express");
const dotevn = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

dotevn.config({ path: "./config/config.env" });

const db = require("./utils/database");

//rouets Middleware
const jobs = require("./routes/product");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1", jobs);

const PORT = process.env.PORT;

// app.listen(PORT, () => {
//   console.log(
//     `Server started on port ${process.env.PORT} in the ${process.env.NODE_ENV} mode`
//   );
// });

app.listen(PORT);

// "name": "practiceapi",
// "version": "1.0.0",
// "description": "Api test",
// "main": "index.js",
