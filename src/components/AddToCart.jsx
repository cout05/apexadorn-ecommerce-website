import React from "react";

const AddToCart = () => {
  return (
    <div class="fixed inset-0 z-40 min-h-full overflow-y-auto md:w-[80%] ml-auto overflow-x-hidden transition flex items-center">
      <div
        aria-hidden="true"
        class="fixed inset-0 w-full h-full bg-black/50 cursor-pointer"></div>

      <div class="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
        <div class="bg-[#1c1c22] w-full py-2 cursor-default pointer-events-auto relative rounded-xl mx-auto max-w-sm">
          <div class="space-y-2 p-2">
            <div class="p-4 space-y-2 text-center dark:text-white">
              <h2
                class="text-xl font-bold tracking-tight"
                id="page-action.heading">
                Add this item to cart?
              </h2>
            </div>
          </div>

          <div class="space-y-2">
            <div
              aria-hidden="true"
              class="border-t dark:border-gray-700 px-2"></div>

            <div class="px-6 py-2">
              <div class="grid gap-2 grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
                <button
                  type="button"
                  class="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none min-h-[2.25rem] px-4 text-sm text-[#eff6e0] bg-red-700 ">
                  <span class="flex items-center gap-1">
                    <span class="">Cancel</span>
                  </span>
                </button>

                <button
                  type="submit"
                  class="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm  shadow 
                   border-transparent bg-[#eff6e0] ">
                  <span class="flex items-center gap-1">
                    <span class="">Add-To-Cart</span>
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
