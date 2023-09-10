import React, { useEffect, useState } from "react";

const Products = () => {
  const [clothes, setClothes] = useState([]);
  useEffect(() => {
    const fetchClothes = () => {
      fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then((res) => res.json())
        .then((json) => setClothes(json));
    };
    fetchClothes();
  }, []);

  return (
    <section className="bg-[#01161e] h-full md:h-screen pt-20 text-center">
      <h1 className="font-bold text-3xl  text-[#eff6e0]">
        ApexAdor Men's Clothing
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 place-items-center gap-5 pt-10">
        {clothes.map((item) => (
          <div
            className="border-2 w-[300px] rounded h-[350px] px-10 py-5 cursor-pointer bg-white"
            key={item.id}>
            <img
              className="max-h-[160px] m-auto mb-3"
              src={item.image}
              alt={item.title}
            />
            <h2 className="h-[50px] mb-3">{item.title}</h2>
            <p className="text-green-700 mb-2">${item.price}</p>
            <div className="flex flex-col gap-2">
              <button className="bg-[#124559] p-2 rounded font-bold text-white">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
