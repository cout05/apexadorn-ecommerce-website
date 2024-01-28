import { useContext, useEffect, useState } from "react";
import { CartItemContext } from "../context/CartItemContext";
import { BsTrash3Fill } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";

const Cart = () => {
  const { cartItem, setCartItem } = useContext(CartItemContext);
  const [items, setItems] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const filtered = [...new Set(cartItem)];
    setItems(filtered);
  }, [cartItem]);

  const handleDelete = (id) => {
    setCartItem(cartItem.filter((item) => item.id !== id));
  };

  const clearItems = () => {
    setCartItem([]);
  };

  const handleCheckout = () => {
    if (cartItem.length > 0) {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 3000);
    }

    setCartItem([]);
  };

  useEffect(() => {
    if (total > 0 && isClicked === true) {
      setIsClicked(false);
    }
  }, [total]);

  useEffect(() => {
    let sum = 0;
    cartItem.map((item) => (sum += item.price));
    setTotal(parseFloat(sum).toFixed(2));
  }, [cartItem]);

  return (
    <div className="bg-[#fff] flex flex-col gap-4 mt-4">
      <div className="bg-[#fff] flex fixed bottom-0 w-[100%] md:w-[31%] justify-between py-5 px-4">
        <p>
          Total: <span className="text-green-700">${total}</span>{" "}
        </p>
        <div className="flex gap-1">
          <p
            className="bg-[#2D3142] shadow-2xl px-2 py-1 cursor-pointer rounded text-[#fff]"
            onClick={handleCheckout}>
            Checkout
          </p>
          <div
            className="bg-red-700 flex items-center p-2 cursor-pointer rounded"
            onClick={clearItems}>
            <BsTrash3Fill className="text-1xl text-white " />
          </div>
        </div>
      </div>
      {isClicked ? (
        <div>
          <div
            className="bg-[#393946] border border-[#2D3142] text-[#fff]  px-4 mx-4 py-3 rounded relative"
            role="alert">
            <strong className="font-bold">Success! </strong>
            <span className="block sm:inline">
              Items succesfully checked out.
            </span>
            <span className="absolute top-0 bottom-0 right-0 text-2xl px-4 py-6 md:py-3  cursor-pointer">
              <GrFormClose onClick={() => setIsClicked(false)} />
            </span>
          </div>
        </div>
      ) : cartItem.length > 0 ? (
        <div className="flex flex-col gap-3">
          {items.map((item, index) => (
            <div
              className="flex bg-[#fff] mx-2 px-4 justify-between border py-2"
              key={index}>
              <div className="flex">
                <div className="w-[40px] h-[50px] mr-4">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[0.7rem] uppercase max-w-[240px]">
                    {item.title}
                  </p>
                  <p>x{cartItem.filter((i) => i.id === item.id).length}</p>
                  <p className="text-green-500">
                    $
                    {cartItem.filter((i) => i.id === item.id).length *
                      item.price}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div>
                  <GrFormClose
                    onClick={() => handleDelete(item.id)}
                    className="text-2xl cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-[300px] flex justify-center items-center">
          <p>Cart is Empty</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
