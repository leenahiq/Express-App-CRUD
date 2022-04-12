require("dotenv").config();
const express = require("express");
const app = express();
const connection = require("./connection");
const { setRequestLog, logRequestLog } = require("./middleware/requestLogging");
const indexRouter = require("./routes/index");
const productsRouter = require("./routes/products");

app.use(express.json());

app.use(setRequestLog);
app.use(logRequestLog);

app.use("/", indexRouter);
app.use("/products", productsRouter);

// url: localhost/?name=bob&age=23&_data=asdf&_time=q34w25
app.listen(parseInt(process.env.HTTP_PORT), () => {
  console.log("Server Online");
  connection.authenticate();
  connection.sync({ alter: true });
});
