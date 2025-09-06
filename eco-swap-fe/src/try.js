const newProduct = {
  title: "Vintage Lamp",
  description: "Retro-style lamp in great condition",
  category: "Home Decor",
  price: 1200,
  imageUrl: "placeholder.jpg",
  ownerId: "64f1b2c3a1e4e2d9f0a12345" 
};

fetch("http://localhost:5000/api/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(newProduct)
})
.then(response => response.json())
.then(data => {
  console.log("Product created:", data);
})
.catch(error => {
  console.error("Error creating product:", error);
});
