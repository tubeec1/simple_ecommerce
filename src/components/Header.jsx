import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";
import { useShop } from "../ShopContext";

export default function Header() {
  let { products } = useShop();
  return (
    <div id="header">
      <Link to="/" className="link coName">
        SaalimEcom
      </Link>
      <nav>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
      </nav>
      <Link to="/cart" className="link cartBox">
        {products.length}
        <i className="fa-solid fa-cart-shopping"></i>
      </Link>
    </div>
  );
}
