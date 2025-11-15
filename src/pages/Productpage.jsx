import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

function Product() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [sorting, setSorting] = useState("default");
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);

  // Fetch products
  const getAllproduct = () => {
    fetch("https://6916116e465a9144626ec656.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(() => {
        console.log("error");
      });
  };

  useEffect(() => {
    getAllproduct();
  }, []);

  useEffect(() => {
    let updated = [...products];

    // Search
    if (search.trim() !== "") {
      updated = updated.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    // Category filter
    if (category !== "All") {
      updated = updated.filter((p) => p.category === category);
    }
    // Sorting
    if (sorting === "lowtohigh") {
      updated.sort((a, b) => a.price - b.price);
    } else if (sorting === "hightolow") {
      updated.sort((a, b) => b.price - a.price);
    } else if (sorting === "rating") {
      updated.sort((a, b) => b.rating - a.rating);
    }
    setFilteredProducts(updated);
  }, [category, sorting, search, products]);

  return (
    <div>
      {/* NAVBAR with search + cart count */}
      <Navbar search={search} setSearch={setSearch} cartCount={cartCount} />
      <div className="flex">
        {/* left filter */}
        <div className="py-10 px-10 border-2 border-white">
          <h1 className="text-2xl font-bold mb-5">Category</h1>
          <div className="flex flex-col gap-y-5">
            {/* Category Filter */}
            <div className="bg-white px-10 py-3 rounded-2xl">
              <select value={category} onChange={(event) => setCategory(event.target.value)} >
                <option value="All">All</option>
                <option value="Fashion">Fashion</option>
                <option value="Electronics">Electronics</option>
                <option value="Home & Furniture">Home & Furniture</option>
                <option value="Toys & Baby Care">Toys & Baby Care</option>
              </select>
            </div>

            {/* Sorting */}
            <div className="bg-white px-10 py-3 rounded-2xl">
              <select value={sorting} onChange={(event) => setSorting(event.target.value)}>
                <option value="default">Sort By</option>
                <option value="lowtohigh">Price (Low → High)</option>
                <option value="hightolow">Price (High → Low)</option>
                <option value="rating">Rating (High → Low)</option>
              </select>
            </div>
          </div>
        </div>
        {/* RIGHT PRODUCTS LIST */}
        <div>
          <h1 className="text-4xl font-extrabold px-10 my-10">Products</h1>
          <div className="grid grid-cols-4 gap-5 px-5 shadow-2xl">
            {filteredProducts.map((product) => (
              <div key={product.id} className="p-2 bg-white rounded-2xl flex-wrap">
                <img
                  src={product.image}
                  alt="image"
                  className="w-full rounded-2xl h-[200px] object-cover shadow"
                />
                <div>
                  <h1 className="font-bold text-mm">{product.title}</h1>
                  <p className="text-sm text-gray-500">({product.category})</p>
                </div>
                <span className="font-light flex gap-x-2">⭐ {product.rating}</span>
                <b>${product.price}</b>
                <p className="text-gray-500">2-day delivery <br /> Free pickup</p>
                <button className="bg-[#2dba36] text-white font-bold w-full py-1 rounded-xl my-2 cursor-pointer" onClick={() => setCartCount(cartCount + 1)} >Add to cart</button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Product;
