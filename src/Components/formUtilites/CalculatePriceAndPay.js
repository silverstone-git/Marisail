import React from "react";

export default function CalculatePriceAndPay({props, setProps}) {
    const handleChange = input => e => {
        setProps({ ...props, [input]: e.target.value });
    };
  return (
    <div>
      <h1>Calculate Price and Pay</h1>
      <form>
        <label>Price Label:</label>
        <input type="text" name="priceLabel" onChange={handleChange("priceLabel")} value={props.priceLabel}/>
        <label>Price Drop:</label>
        <input type="text" name="priceDrop" onChange={handleChange("priceDrop")} value={props.priceDrop}/>
        <label>Currency:</label>
        <input type="text" name="currency" onChange={handleChange("currency")} value={props.currency}/>
        <label>VAT:</label>
        <input type="text" name="VAT" onChange={handleChange("VAT")} value={props.VAT}/>
        <label>Total Price:</label>
        <input type="text" name="totalPrice" onChange={handleChange("totalPrice")} value={props.totalPrice}/>  
      </form>
    </div>
  );
}