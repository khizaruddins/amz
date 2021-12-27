import React from "react";
import "./Product.scss";

function Product({ title, image, price, rating, id }) {
  return (
    <div className="product" key={id}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p key={i}>🌟</p>;
            })}
        </div>
      </div>
      <img src={image} alt="product" />
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
