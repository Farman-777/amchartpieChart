import React from "react";
import ReactStars from "react-stars";
import "./ProductCart.css";
const ProductCart = ({ id, image, title, price, rating }) => {
  return (
    <div className="product-container">
      <div className="image-container" key={id}>
        <img src={image} alt="" />
      </div>
      <div className="content-container">
        <p>Name : {title}</p>
        <p>Price : ₹ {price} </p>
        <p>
          Rating :{" "}
          <span>
            <ReactStars
              size={20}
              half={true}
              edit={false}
              value={4.5}
              // value={e.rating/e.rated}
            />
          </span>
        </p>
      </div>
      <button type="button">Add to Cart</button>
    </div>
  );
};

export default ProductCart;
