const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/Human.routes");
const recentlyFavouritedRouter = require("./routes/RecentlyFavourited.routes")
const cors = require("cors");


app.use(express.json());
app.use(cors());
app.use("/human", router);
app.use("/recentlyfavourited",recentlyFavouritedRouter)
mongoose
  .connect("mongodb+srv://Farid:ferid2004@cluster0.ldyfdvf.mongodb.net/")
  .then(() => {
    console.log("Db connected");
  });
app.listen("8080", () => {
  console.log("Backend running on 8080");
});
