import React from "react";
import "./Subtotal.scss";
import NumberFormat from "react-number-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <NumberFormat
        renderText={(value) => {
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>;
        }}
        decimalScale={2}
        value={0}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      ></NumberFormat>
    </div>
  );
}

export default Subtotal;
