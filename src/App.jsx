import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [itemId, setItemId] = useState();

  const handleId = (passId) => {
    setItemId(passId);
  };

  return (
    <div className="over  flow-hidden">
      <BrowserRouter>
        <Header passId={itemId} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products handlePassId={handleId} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
