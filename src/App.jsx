import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="over-flow-hidden bg-[#D8D5DB]">
      <HashRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
      </HashRouter>
    </div>
  );
}

export default App;
