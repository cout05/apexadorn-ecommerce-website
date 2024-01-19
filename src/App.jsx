import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import AuthPage from "./components/AuthPage";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="over-flow-hidden bg-[#D8D5DB]">
      <HashRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<AuthPage />} />
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
