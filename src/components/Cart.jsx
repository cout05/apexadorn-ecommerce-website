import { useContext, useEffect, useState } from "react";
import { CartItemContext } from "../context/CartItemContext";
import { BsTrash3Fill } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";

const Cart = () => {
  const { cartItem, setCartItem } = useContext(CartItemContext);
  const [isClicked, setIsClicked] = useState(false);
  const [total, setTotal] = useState(0);

  const handleDelete = (index) => {
    setCartItem(cartItem.filter((item, i) => i !== index));
  };

  const clearItems = () => {
    setCartItem([]);
  };

  const handleCheckout = () => {
    if (cartItem.length > 0) {
      setIsClicked(true);
      // Use setTimeout to delay setIsClicked(false) for 5 seconds
      setTimeout(() => {
        setIsClicked(false);
      }, 3000);
    }
    // Clear the cart items
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
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex justify-between">
        <p>Total: ${total}</p>
        <div className="flex gap-1">
          <p
            className="bg-[#124559] shadow-2xl px-2 py-1 cursor-pointer rounded text-[#eff6e0]"
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
        <div className="h-[310px] flex justify-center items-center absolute right-2 left-1">
          <div className="flex bg-[#124559] text-[#eff6e0] p-10 rounded-lg text-center">
            <div className="mx-4">
              <BsCheckCircle className="text-[#eff6e0] text-3xl m-auto " />
            </div>
            <p>Thank you for buying!</p>
          </div>
        </div>
      ) : null}
      {cartItem.length > 0 ? (
        <div className="flex flex-col gap-3">
          {cartItem.map((item, index) => (
            <div className="flex justify-between" key={index}>
              <div className="flex">
                <div className="w-[40px] h-[50px] mr-4">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm uppercase max-w-[240px]">
                    {item.title}
                  </p>
                  <p className="text-green-500">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div>
                  <GrFormClose
                    onClick={() => handleDelete(index)}
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
