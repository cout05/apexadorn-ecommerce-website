import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [itemId, setItemId] = useState();
  const [isClicked, setisClicked] = useState(false);

  // to avoid delay
  useEffect(() => {
    handleId();
    handleClickVal();
  }, [itemId]);

  // to put the passId value to the itemId
  const handleId = (passId) => {
    setItemId(passId);
  };

  // to put the clicked value to the isClicked
  const handleClickVal = (clicked) => {
    setisClicked(clicked);
  };

  return (
    <div className="over  flow-hidden">
      <BrowserRouter>
        <Header passId={itemId} passVal={isClicked} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <Products handlePassId={handleId} handleVal={handleClickVal} />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
