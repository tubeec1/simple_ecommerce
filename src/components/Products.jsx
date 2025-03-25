import React from "react";
import Product from "./Product";

let products = [
  {
    id: 1,
    name: "laptop",
    urlImage:
      "https://plus.unsplash.com/premium_photo-1670274606895-f2dc713f8a90?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbXB1dGVyfGVufDB8fDB8fHww",
    quantity: 1,
    stock: 999,
    price: 650,
  },
  {
    id: 2,
    name: "Samsung",
    urlImage:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D",
    quantity: 1,
    stock: 999,
    price: 135,
  },
  {
    id: 3,
    name: "Iphone",
    urlImage:
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
    quantity: 1,
    stock: 999,
    price: 1110,
  },
  {
    id: 4,
    name: "Watch",
    urlImage:
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhdGNofGVufDB8fDB8fHww",
    quantity: 1,
    stock: 999,
    price: 135,
  },
  {
    id: 5,
    name: "Shoes",
    urlImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    quantity: 1,
    stock: 999,
    price: 20,
  },
  {
    id: 6,
    name: "T-shirt",
    urlImage:
      "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VCUyMHNoaXJ0fGVufDB8fDB8fHww",
    quantity: 1,
    stock: 999,
    price: 12,
  },
];

export default function Products() {
  return (
    <div className="products">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}
