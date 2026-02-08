import React, { useState } from "react";
import axios from "axios";
import "./SellPhone.css";

const SellPhone = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [condition, setCondition] = useState("Good");
  const [price, setPrice] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/products/sell", {
        brand,
        model,
        condition,
      });
      setPrice(res.data.price);
    } catch (err) {
      console.error(err);
      alert("Error connecting to backend");
    }
  };

  return (
    <div className="sell-page">
      <div className="sell-card">
        <h2>Sell Your Phone</h2>
        <p>Get the best price for your used phone instantly!</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Brand</label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Enter brand (e.g., iPhone)"
              required
            />
          </div>

          <div className="input-group">
            <label>Model</label>
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="Enter model (e.g., 13 Pro)"
              required
            />
          </div>

          <div className="input-group">
            <label>Condition</label>
            <select value={condition} onChange={(e) => setCondition(e.target.value)}>
              <option>Good</option>
              <option>Average</option>
              <option>Bad</option>
            </select>
          </div>

          <button type="submit">Get Best Price</button>
        </form>

        {price && (
          <div className="price-card">
            💰 Estimated Price: <strong>₹{price}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellPhone;
