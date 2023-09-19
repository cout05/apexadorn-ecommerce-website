import { useState, useEffect } from "react";
import { fetchPost } from "../services/apiService";
import { BsTrash3Fill } from "react-icons/bs";

const Cart = (id) => {
  const [clothes, setClothes] = useState([]);
  const [items, setItems] = useState("");
  const [filtered, setFiltered] = useState([]);

  // to fetch the clothes
  useEffect(() => {
    const fetchClothes = async () => {
      const items = await fetchPost();
      setClothes(items);
    };
    fetchClothes();
  }, []);

  // to get the id
  useEffect(() => {
    if (id.handlePassId !== undefined) {
      setItems(id.handlePassId.passId);
    }
  }, [id]);

  // to filter the items that have the same id of the pass id
  useEffect(() => {
    const filteredItems = clothes.filter((item) => item.id === items);
    if (filteredItems !== undefined && filteredItems.length > 0) {
      setFiltered((prevFiltered) => [...prevFiltered, filteredItems[0]]);
    }
  }, [id]);

  // to delete 1 item in cart
  const handleDeleteAll = () => {
    setFiltered([]);
  };

  // to delete all items in cart
  const handleDelete = (index) => {
    setFiltered(filtered.filter((i, itemdIndex) => itemdIndex != index));
  };

  return (
    <div className="bg-[#1c1c22] text-[#fffff] w-[400px] h-[400px] absolute right-11 top-16 rounded overflow-y-scroll">
      <div className="fixed flex items-center justify-between py-4 px-2 w-[400px] bg-[#1c1c22] rounded">
        <h2 className="text-sm font-semibold ">SHOPPING BAG</h2>
        <div className="flex items-center gap-5">
          <p className="border-0 bg-[#124559] p-1 text-sm rounded">
            Items: {filtered.length}
          </p>
          <button
            className="border-0 bg-red-700 p-1 text-sm rounded"
            onClick={handleDeleteAll}>
            Remove All
          </button>
        </div>
      </div>
      <div className="mt-[70px]">
        {filtered.length > 0 ? (
          <div className="flex flex-col gap-1">
            {filtered.map((item, index) => (
              <div className="flex gap-2 pr-2 justify-between" key={index}>
                <div className="flex">
                  <img
                    className="w-[50px] h-[50px] object-contain"
                    src={item.image}
                    alt={item.title}
                  />
                  <div>
                    <p className="text-sm">{item.title}</p>
                    <p className="text-sm text-green-700">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="text-sm p-1 bg-[#124559] rounded">
                    Checkout
                  </button>
                  <BsTrash3Fill
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleDelete(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-80 flex justify-center items-center">
            <p className="text-3xl">Empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
