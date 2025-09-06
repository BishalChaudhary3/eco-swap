const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Product = require('./products');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/ecofinds', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'));

// Create Product Listing
app.post('/api/products', async (req, res) => {
  try {
    const { title, description, category, price, imageUrl, ownerId } = req.body;
    const product = new Product({ title, description, category, price, imageUrl, ownerId });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Products
app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
