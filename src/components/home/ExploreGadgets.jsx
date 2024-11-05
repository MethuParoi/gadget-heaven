import { useEffect, useState } from "react";
import GadgetCard from "./GadgetCard";

const sortOptions = [
  {
    title: "All Product",
    value: "all",
  },
  {
    title: "Laptops",
    value: "Laptops",
  },
  {
    title: "Phones",
    value: "Phones",
  },
  {
    title: "Accessories",
    value: "Accessories",
  },
  {
    title: "Smart Watches",
    value: "Smartwatches",
  },
  {
    title: "MacBook",
    value: "MacBooks",
  },
  {
    title: "Iphone",
    value: "iPhones",
  },
];

const ExploreGadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [sort, setSort] = useState("all");

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => {
        setGadgets(data);
      });
  }, []);

  const filteredGadgets =
    sort === "all"
      ? gadgets
      : gadgets.filter((gadget) => gadget.category === sort);

  return (
    <div>
      <h1 className="text-2xl font-semibold my-8 text-center">
        Explore Cutting-Edge Gadgets
      </h1>

      <div className="grid xl:grid-cols-4 gap-4">
        <div className="grid grid-cols-1 gap-1 h-[25rem] w-[14rem] justify-items-center mx-auto py-4 bg-gray-100 rounded-xl">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setSort(option.value)}
              className={`${
                sort === option.value
                  ? "bg-purple-600 text-gray-50"
                  : "bg-gray-50 text-gray-700"
              } py-2 px-4 rounded-[2rem] w-[10rem] h-[2.5rem]`}
            >
              {option.title}
            </button>
          ))}
        </div>
        <div className="col-span-3 grid grid-cols-3 gap-y-8">
          {filteredGadgets.map((data) => (
            <GadgetCard
              key={data.product_id}
              img={data.product_image}
              title={data.product_title}
              price={data.price}
              product_id={data.product_id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreGadgets;

