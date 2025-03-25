import React, { useContext, useEffect, useState } from "react";
import { useShop } from "../ShopContext";

export default function Product({ product }) {
  let { products, total, addToCart, deleteProduct } = useShop();
  let [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    let isCart = products.filter((p) => p.id === product.id);
    if (isCart.length > 0) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products]);

  let handleAddOrRemoveCart = (product, event) => {
    if (isInCart) {
      deleteProduct(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <div
      className="product"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)),url(${product.urlImage}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
      <button
        onClick={() => handleAddOrRemoveCart(product)}
        className={isInCart ? "btn-secondary" : "btn-primary"}
      >
        {isInCart ? "-" : "+"}
      </button>
    </div>
  );
}
