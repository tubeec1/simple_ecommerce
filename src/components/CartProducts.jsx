import React from "react";
import Cart from "../pages/Cart";
import { useShop } from "../ShopContext";
import CartProduct from "./cartProduct";
export default function CartProducts() {
  let { products, addToCart, total } = useShop();
  return (
    <div>
      {products.length === 0 ? (
        <h2>There is no product in cart...</h2>
      ) : (
        <div className="cartBoxes">
          <h1 style={{ textAlign: "center", padding: "10" }}>
            Products in Cart
          </h1>
          <table>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Stock</th>
              <th>Delete</th>
            </tr>
            {products.map((p) => (
              <CartProduct p={p} />
            ))}
          </table>
          <div className="total">
            <h2>Total Price</h2>
            <p>{total}</p>
          </div>
        </div>
      )}
    </div>
  );
}
