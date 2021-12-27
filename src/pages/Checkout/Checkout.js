import React from "react";
import Subtotal from "../../core/Subtotal/Subtotal";
import "./Checkout.scss";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your shopping Cart</h2>
          {/* CartItem */}
          {/* CartItem */}
          {/* CartItem */}
          {/* CartItem */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default Checkout;
