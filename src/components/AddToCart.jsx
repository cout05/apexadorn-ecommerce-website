import { useContext, useState } from "react";
import { AddToCartContext } from "../context/AddToCartContext";
import { CartItemContext } from "../context/CartItemContext";

const AddToCart = (filteredProduct) => {
  const { setAddToCart } = useContext(AddToCartContext);
  const { setCartItem } = useContext(CartItemContext);
  const [quantity, setQuantity] = useState(0);

  const add = () => {
    for (let i = 0; i < quantity; i++) {
      setCartItem((prevState) => [
        ...prevState,
        filteredProduct.filteredProduct[0],
      ]);
    }

    setAddToCart(false);
  };
  return (
    <div className="fixed inset-0 z-40 min-h-full overflow-y-auto md:w-[80%] ml-auto overflow-x-hidden transition flex items-center">
      <div
        aria-hidden="true"
        className="fixed inset-0 w-full h-full bg-black/50 cursor-pointer"></div>

      <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
        <div className="bg-[#fff] text-[#1c1c22] w-full py-2 cursor-default pointer-events-auto relative rounded-xl mx-auto max-w-sm">
          <div className="space-y-2 p-2">
            <div className="p-4 space-y-2 text-center">
              <h2 className="text-xl font-bold tracking-tight">
                Add this item to cart?
              </h2>
              <div className="px-6 flex items-center gap-3">
                <img
                  src={filteredProduct.filteredProduct[0].image}
                  alt={filteredProduct.filteredProduct[0].image}
                  className="w-[50px] h-[70px] object-contain"
                />
                <div className="text-sm text-left flex flex-col  gap-2">
                  <p>{filteredProduct.filteredProduct[0].title}</p>
                  <p className="text-green-700">
                    ${filteredProduct.filteredProduct[0].price}
                  </p>
                  <div className="flex items-center">
                    <p className="mr-24">Quantity</p>
                    <p
                      onClick={(e) =>
                        setQuantity(quantity > 0 ? quantity - 1 : quantity)
                      }
                      className="cursor-pointer text-[2rem] bold border w-[20px] text-center">
                      -
                    </p>
                    <input
                      type="text"
                      className="border w-[20px] text-center"
                      onChange={(e) => setQuantity(e.target.value)}
                      value={quantity}
                    />
                    <p
                      onClick={(e) => setQuantity(quantity + 1)}
                      className="cursor-pointer text-[1.5rem] bold border w-[20px] text-center">
                      +
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div aria-hidden="true" className=" border-t px-2"></div>

            <div className="px-6 py-2">
              <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
                <button
                  type="button"
                  onClick={() => setAddToCart(false)}
                  className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg  transition-colors outline-none min-h-[2.25rem] px-4 text-sm text-[#fff] bg-red-700 ">
                  <span className="flex items-center gap-1">
                    <span className="">Cancel</span>
                  </span>
                </button>

                <button
                  type="submit"
                  onClick={add}
                  className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border outline-none min-h-[2.25rem] px-4 text-sm  shadow 
                    bg-[#1c1c22] text-[#fff]">
                  <span className="flex items-center gap-1">
                    <span className="">Add-To-Cart</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
