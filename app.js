const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
require("dotenv").config();
const indexRouter = require("./routes/index");

const app = express();

const cors = require("cors");
const corsOptions = {
  origin: `${process.env.REQ_ORIGIN}`,
  optionsSuccessStatus: 200 
}

const mongoose = require("mongoose");
const mongoDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.j0fm9pk.mongodb.net/?retryWrites=true&w=majority`;
async function main() {
  await mongoose.connect(mongoDB);
}
main().catch((err) => console.log(err));

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors(corsOptions));
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  res.json({
    error: err
  })
})

app.listen(process.env.PORT, () =>
  console.log(`Server started at port ${process.env.PORT}`)
);
