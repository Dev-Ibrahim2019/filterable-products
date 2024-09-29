import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { useState } from "react";
import "./App.css";

const products = [
  { name: "Smartphone", category: "Electronics", price: 699 },
  { name: "Laptop", category: "Electronics", price: 999 },
  { name: "Iphone", category: "Electronics", price: 1500 },
  { name: "T-Shirt", category: "Clothing", price: 25 },
  { name: "The Prince", category: "Books", price: 25 },
  { name: "Jeans", category: "Clothing", price: 40 },
  { name: "Harry Poter", category: "Books", price: 15 },
  { name: "Headphones", category: "Electronics", price: 150 },
  { name: "Jacket", category: "Clothing", price: 85 },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="app">
      <Header
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
