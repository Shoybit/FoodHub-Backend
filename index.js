const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let productsCollection;

async function connectDB() {
  try {
    // await client.connect();
    // console.log("MongoDB Atlas Connected Successfully");

    const db = client.db("foodhubDB");
    productsCollection = db.collection("products");
  } catch (err) {
    console.error("MongoDB Connection Failed:", err);
  }
}

connectDB();

// Middleware to ensure DB connection exists
function checkDB(req, res, next) {
  if (!productsCollection) {
    return res
      .status(500)
      .json({ success: false, message: "Database not connected" });
  }
  next();
}

// Test route
app.get("/", (req, res) => {
  res.send("FoodHub Backend is running...");
});

// GET ALL PRODUCTS
app.get("/api/products", checkDB, async (req, res) => {
  try {
    const { search, category } = req.query;
    const filter = {};

    if (category)
      filter.category = { $regex: new RegExp(`^${category}$`, "i") };
    if (search) filter.title = { $regex: new RegExp(search, "i") };

    const items = await productsCollection
      .find(filter)
      .sort({ priority: -1, createdAt: -1 })
      .toArray();

    res.json(items);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch products" });
  }
});

// GET SINGLE PRODUCT
app.get("/api/products/:id", checkDB, async (req, res) => {
  try {
    const item = await productsCollection.findOne({
      _id: new ObjectId(req.params.id),
    });
    if (!item)
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    res.json(item);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Error retrieving product" });
  }
});

// CREATE PRODUCT
app.post("/api/products", checkDB, async (req, res) => {
  try {
    const newProduct = { ...req.body, createdAt: new Date() };
    const result = await productsCollection.insertOne(newProduct);

    const createdItem = await productsCollection.findOne({
      _id: result.insertedId,
    });

    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      product: createdItem,
    });
  } catch (err) {
    console.error("Create product error:", err);

    return res.status(500).json({
      success: false,
      message: "Failed to create product",
      error: err.message,
    });
  }
});

// DELETE PRODUCT
app.delete("/api/products/:id", checkDB, async (req, res) => {
  try {
    const result = await productsCollection.deleteOne({
      _id: new ObjectId(req.params.id),
    });
    if (result.deletedCount === 0)
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete product" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`FoodHub Backend running on port ${PORT}`);
});
