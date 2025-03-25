import React from "react";
import { useShop } from "../ShopContext";

export default function CartProduct({ p }) {
  let { decreeseQuantity, increaseQuantity, deleteProduct } = useShop();

  return (
    <tr>
      <td>
        <img src={p.urlImage} />
      </td>
      <td>{p.name}</td>
      <td>{p.price}</td>
      <td>
        <button
          style={{
            margin: "0 6px",
            border: "none",
            backgroundColor: "transparent",
            fontWeight: "600",
            cursor: "pointer",
          }}
          onClick={() => decreeseQuantity(p)}
        >
          &lt;
        </button>

        <span style={{ margin: "0 6px" }}>{p.quantity}</span>

        <button
          style={{
            margin: "0 6px",
            border: "none",
            backgroundColor: "transparent",
            fontWeight: "600",
            cursor: "pointer",
          }}
          onClick={() => increaseQuantity(p)} // ✅ Now correctly increases quantity
        >
          &gt;
        </button>
      </td>

      <td>{p.stock}</td>
      <td>
        <i
          className="fa fa-trash"
          onClick={() => {
            if (
              window.confirm("Are you sure you want to to delet this product?")
            ) {
              deleteProduct(p.id);
            }
          }}
        ></i>
      </td>
    </tr>
  );
}
