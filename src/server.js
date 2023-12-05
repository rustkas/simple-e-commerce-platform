// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample products data
const products = [
  { id: 1, name: 'Product 1', price: 19.99 },
  { id: 2, name: 'Product 2', price: 29.99 },
  // Add more products as needed
];

// Route to get the product catalog
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Route to get individual product details
app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
