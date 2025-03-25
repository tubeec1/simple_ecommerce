import React, { useContext, useState, useEffect } from "react";
import { useShop } from "../ShopContext";
import CartProducts from "../components/CartProducts";

export default function Cart() {
  let initialPayment = {
    evc: false,
    zaad: false,
    sahal: false,
  };

  let [paymentMethod, setPaymentMethod] = useState(initialPayment);

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(products);
  };

  let { products, total, deleteProduct, increaseQuantity, decreeseQuantity } =
    useShop();

  return (
    <div className="cartPage">
      <CartProducts />
      <div className="checkout">
        <h1>Pay With</h1>
        <div className="process">
          <button
            onClick={() => setPaymentMethod({ ...initialPayment, zaad: true })}
            className={paymentMethod.zaad ? "selected" : ""}
          >
            Zaad Service
          </button>
          <button
            onClick={() => setPaymentMethod({ ...initialPayment, sahal: true })}
            className={paymentMethod.sahal ? "selected" : ""}
          >
            Sahal Service
          </button>
          <button
            onClick={() => setPaymentMethod({ ...initialPayment, evc: true })}
            class={paymentMethod.evc && "selected"}
          >
            Evc Plus
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="+25261..." />
          <input type="submit" value="Proceed" />
        </form>
      </div>
    </div>
  );
}
