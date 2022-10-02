const express = require("express");
const mongoose = require("mongoose");
const outletRouter = require("./routes/raouteFoodOutlet");
const foodRouter = require("./routes/raouteFood");
const authencator = require("./middleware/authenticator");
const logger = require("./middleware/logger");
const app = express();
const PORT = 3000;




mongoose
  .connect("mongodb+srv://DbUser:DbUser@cluster0.fj0x6.mongodb.net/Cluster0?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to DB succsessfully!");
  })
  .catch((err) => console.log(`Error has occured: ${err}`));

app.use(express.json());
app.use(authencator);
app.use(logger);
app.use("/api/outlets",outletRouter)
app.use("/api/foods",foodRouter)
//app.use("/api/outlets", outletRouter);


app.listen(PORT, () => {
  console.log(`Successfully running on Port ${PORT}`);
});
