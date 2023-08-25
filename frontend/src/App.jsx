import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Cart from "./pages/Cart";
import Collection from "./components/collections/Collection";
import ProductDetail from "./components/products/ProductDetail";
import TopHeader from "./components/header/TopHeader";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import ProductsList from "./pages/ProductsList";
import Checkout from "./pages/checkout/Checkout";
import TopFooter from "./components/footer/TopFooter";
import SuccessCheckout from "./pages/checkout/SuccessCheckout";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <TopHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/checkout-success" element={<SuccessCheckout />} />
        <Route path="/product-detail/:slug" element={<ProductDetail />} />
        <Route path="/products-list/:slug" element={<ProductsList />} />
      </Routes>
      <TopFooter />
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
