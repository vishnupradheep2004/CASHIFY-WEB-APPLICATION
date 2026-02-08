import React from "react";
import "./ProductList.css";

const sampleProducts = [
  {
    id: 1,
    name: "iPhone 13",
    price: "₹60,000",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-blue-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1645572315935",
  },
  {
    id: 2,
    name: "Samsung Galaxy S22",
    price: "₹45,000",
    image:
      "https://images.samsung.com/levant/smartphones/galaxy-s22-ultra/buy/S22Ultra_ColorSelection_Burgundy_MO.jpg?imwidth=480",
  },
  {
    id: 3,
    name: "OnePlus 11R",
    price: "₹38,000",
    image:
      "https://oasis.opstatics.com/content/dam/oasis/page/2023/in/oneplus-10t/specs/10r-blue.png",
  },
  {
    id: 4,
    name: "Google Pixel 7",
    price: "₹50,000",
    image:
      "https://m.media-amazon.com/images/I/61LwaW2fLJL.jpg",
  },
  {
    id: 5,
    name: "iPhone 12",
    price: "₹50,000",
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/234252_czgdvc.png",
  },
  {
    id: 6,
    name: "Samsung Galaxy S21",
    price: "₹40,000",
    image:
      "https://sell.gameloot.in/wp-content/uploads/sites/4/2022/06/Samsung-Galaxy-S21-5G.jpg",
  },
  {
    id: 7,
    name: "OnePlus 10 Pro",
    price: "₹45,000",
    image:
      "https://cdnmedia.placewellretail.com/pub/media/catalog/product/cache/d2f155c8ae3423b25125c336aa39579e/u/n/untitled_design_37__3.webp",
  },
  {
    id: 8,
    name: "iPhone SE",
    price: "₹30,000",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-black-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1586574260316",
  },
  {
    id: 9,
    name: "Samsung Galaxy Note 20",
    price: "₹35,000",
    image:
      "https://m.media-amazon.com/images/I/71rSHVCL5cL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 10,
    name: "Pixel 6a",
    price: "₹35,000",
    image:
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Pixel_6a_3_UWu8QqF.width-500.format-webp.webp",
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {sampleProducts.map((p) => (
        <div key={p.id} className="product-card">
          <img src={p.image} alt={p.name} />
          <h3>{p.name}</h3>
          <p>{p.price}</p>
          <button>Sell Now</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
