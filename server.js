const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });
connectDB();
const transactions = require("./routes/transactions");
const app = express();

app.use(express.json());

app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

if (process.env.NODE_ENV === "production") {
  // app.use(express.static("client/build"));
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.use("/api/v1/transactions", transactions);
  // app.get("*", (req, res) => 
  //   res.sendFile(path, path.resolve(__dirname, "client", "build", "index.html"))
  // );
  app.get("*", (req,res,next) => {
    const options = {
      root: path.resolve(__dirname, "client", "build"),
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    };

    let filePath = req.path + 'index.html';

    res.sendfile(filePath, options, (err) => {
      if (err) {
        next(err);
      } else {
        console.log('Sent:', filePath);
      }
    });
  })
}

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`app running in ${process.env.NODE_ENV} on ${PORT}`.yellow.bold)
);
