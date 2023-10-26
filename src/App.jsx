import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import MobileSideBar from "./components/mobileSideBar";

function App() {
  return (
    <div className="over-flow-hidden bg-[#D8D5DB]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/sign_in" element={<SignIn />} />
      </Routes>
      <Sidebar />
      <MobileSideBar />
      <Footer />
    </div>
  );
}

export default App;
