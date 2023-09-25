import { useContext, useEffect, useState } from "react";
import { CartItemContext } from "../context/CartItemContext";
import { BsTrash3Fill } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";

const Cart = () => {
  const { cartItem, setCartItem } = useContext(CartItemContext);
  const [isClicked, setIsClicked] = useState(false);
  const [total, setTotal] = useState(0);

  const handleDelete = (index) => {
    setCartItem(cartItem.filter((item, i) => i !== index));
  };

  const handleCheckout = () => {
    if (total !== 0) {
      setIsClicked(true);
      delayed;
    }
    setCartItem([]);
  };

  const delayed = setTimeout(() => {
    setIsClicked(false);
  }, 5000);

  useEffect(() => {
    let sum = 0;
    cartItem.map((item) => (sum += Math.floor(item.price)));
    setTotal(sum);
  }, [cartItem]);

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex justify-between">
        <p>Total: ${total}</p>
        <p
          className="bg-[#124559] px-2 py-1 cursor-pointer rounded text-[#eff6e0]"
          onClick={handleCheckout}>
          checkout
        </p>
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
        <div>
          {cartItem.map((item, index) => (
            <div className="flex justify-between" key={index}>
              <div className="flex">
                <div className="w-[40px] h-[50px] mr-4">
                  <img src={item.image} alt={item.title} />
                </div>
                <div>
                  <p className="text-sm max-w-[150px]">{item.title}</p>
                  <p className="text-green-500">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <BsTrash3Fill
                    onClick={() => handleDelete(index)}
                    className="text-1xl text-red-800 cursor-pointer"
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
