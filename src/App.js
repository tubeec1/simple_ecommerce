import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import ShopProvider from "./ShopContext";
import { Toaster } from "react-hot-toast";

import "./style.css";

export default function App() {
  return (
    <ShopProvider>
      <div className="containerApp">
        <Toaster position="top-right" reverseOrder={false} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <p style={{ textAlign: "center", margin: "10px" }}>
        SaalimEcom &copy;2025
      </p>
    </ShopProvider>
  );
}
