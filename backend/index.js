import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose, { Schema } from "mongoose";
const app = express();
app.use(express.json());
app.use(cors());

const flowerSchema = new Schema({
  img: String,
  name: String,
  price: Number,
});

const FlowerModel = mongoose.model("flowers", flowerSchema);

app.get("/flowers", async (req, res) => {
  const flowers = await FlowerModel.find({});
  res.send(flowers);
});

app.get("/flowers/:id", async (req, res) => {
  const { id } = req.params;
  const flower = await FlowerModel.findById(id);
  res.send(flower);
});

app.post("/flowers", async (req, res) => {
  const { img, name, price } = req.body;
  const newFlower = new FlowerModel({ img, name, price });
  await newFlower.save();
  res.send("Got a POST request");
});

app.put("/flowers/:id", async (req, res) => {
  const { id } = req.params;
  const { img, name, price } = req.body;
  const flower = await FlowerModel.findByIdAndUpdate(id, { img, name, price });
  res.send("Got a PUT request at /flower");
});

app.delete("/flowers/:id", async (req, res) => {
  const { id } = req.params;
  const flower = await FlowerModel.findByIdAndDelete(id);
  res.send("Got a DELETE request at /flower");
});

mongoose
  .connect(process.env.KEY)
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected!"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
