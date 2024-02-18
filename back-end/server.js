const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/Human.routes");
const recentlyFavouritedRouter = require("./routes/RecentlyFavourited.routes")
const accesoriesRouter = require('./routes/Accesories.routes')
const jewelleryRouter = require('./routes/Jewellery.routes')
const homeRouter = require('./routes/Home.routes')
const artRouter = require('./routes/Art.routes')
const cors = require("cors");


app.use(express.json());
app.use(cors());
app.use("/human", router);
app.use("/recentlyfavourited",recentlyFavouritedRouter)
app.use("/accesories",accesoriesRouter)
app.use('/jewellery',jewelleryRouter)
app.use("/homeCategory",homeRouter)
app.use("/art",artRouter)

mongoose
  .connect("mongodb+srv://Farid:ferid2004@cluster0.ldyfdvf.mongodb.net/")
  .then(() => {
    console.log("Db connected");
  });
app.listen("8080", () => {
  console.log("Backend running on 8080");
});
