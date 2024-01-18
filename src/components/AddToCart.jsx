import { useContext } from "react";
import { AddToCartContext } from "../context/AddToCartContext";
import { CartItemContext } from "../context/CartItemContext";

const AddToCart = (filteredProduct) => {
  const { setAddToCart } = useContext(AddToCartContext);
  const { setCartItem } = useContext(CartItemContext);

  const add = () => {
    setCartItem((prevState) => [
      ...prevState,
      filteredProduct.filteredProduct[0],
    ]);
    setAddToCart(false);
  };
  return (
    <div className="fixed inset-0 z-40 min-h-full overflow-y-auto md:w-[80%] ml-auto overflow-x-hidden transition flex items-center">
      <div
        aria-hidden="true"
        className="fixed inset-0 w-full h-full bg-black/50 cursor-pointer"></div>

      <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
        <div className="bg-[#eff6e0] text-[#1c1c22] w-full py-2 cursor-default pointer-events-auto relative rounded-xl mx-auto max-w-sm">
          <div className="space-y-2 p-2">
            <div className="p-4 space-y-2 text-center">
              <h2 className="text-xl font-bold tracking-tight">
                Add this item to cart?
              </h2>
            </div>
          </div>

          <div className="space-y-2">
            <div aria-hidden="true" className=" border-t px-2"></div>

            <div className="px-6 py-2">
              <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
                <button
                  type="button"
                  onClick={() => setAddToCart(false)}
                  className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg  transition-colors outline-none min-h-[2.25rem] px-4 text-sm text-[#eff6e0] bg-red-700 ">
                  <span className="flex items-center gap-1">
                    <span className="">Cancel</span>
                  </span>
                </button>

                <button
                  type="submit"
                  onClick={add}
                  className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border outline-none min-h-[2.25rem] px-4 text-sm  shadow 
                    bg-[#1c1c22] text-[#eff6e0]">
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
