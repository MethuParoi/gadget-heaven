import { TiStar } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import ReactStars from "react-rating-stars-component";
import { usePIdContext } from "../context-api/Context";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const [gadget, setGadget] = useState(null);
  const [rating, setRating] = useState(0);
  const { productId } = usePIdContext();

  useEffect(() => {
    if (productId) {
      fetch("Data.json")
        .then((res) => res.json())
        .then((data) => {
          const selectedGadget = data.find(
            (item) => item.product_id === productId
          );
          setGadget(selectedGadget);
          if (selectedGadget) {
            setRating(Math.floor(selectedGadget.rating));
          }
        });
    }
  }, [productId]);

  if (!gadget) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="bg-purple-600 h-[20rem] rounded-xl flex flex-col items-center">
        <h1 className="text-4xl font-semibold text-gray-50 text-center tracking-wide py-2">
          Product Details
        </h1>

        <p className="text-sm text-gray-200 w-[500px] text-center py-2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="mt-[-140px] border-2 border-gray-200 w-[1010px] p-5 mx-auto rounded-xl bg-gray-50 grid grid-cols-5">
        <div className="col-span-2">
          <img
            src={gadget.product_image}
            className="w-full h-[450px] rounded-xl"
            alt="Product Image"
          />
        </div>

        <div className="col-span-3 px-5">
          <h1 className="text-2xl font-semibold">{gadget.product_title}</h1>
          <h2 className="text-xl text-gray-600 font-semibold">
            Price: ${gadget.price}
          </h2>
          <button className="py-1 px-3 border-2 border-green-600 rounded-[2.2rem] font-medium text-green-600 bg-green-100 my-3">
            In Stock
          </button>
          <p className="mb-3 text-gray-600 line-clamp-1">
            {gadget.description}
          </p>
          <h2 className="text-xl font-semibold">Specifications:</h2>
          <ol className="list-decimal pl-5">
            {gadget.specification.map((spec, index) => (
              <li key={index} className="text-gray-600">
                {spec}
              </li>
            ))}
          </ol>
          <div className="my-3">
            <div className="flex items-center gap-x-1">
              <h2 className="text-xl font-semibold">Rating</h2>
              <TiStar className="text-3xl text-yellow-400" />
            </div>
            <div className="flex items-center gap-x-4">
              <ReactStars
                value={rating}
                onChange={(newRating) => console.log(newRating)}
                size={30}
                isHalf={true}
                activeColor="#ffd700"
              />
              <button className="py-1 px-3 text-gray-600 font-semibold bg-gray-300 rounded-[2rem]">
                {gadget.rating}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-x-5">
            <button className="flex items-center gap-x-2 bg-purple-600 hover:bg-purple-800 py-2 px-5 rounded-[2rem]">
              <span className="text-lg text-gray-50 font-semibold">
                Add To Cart
              </span>
              <IoCartOutline className="text-[1.8rem] text-gray-50" />
            </button>

            <button className="w-12 h-12 border-2 border-gray-400 rounded-full flex justify-center items-center hover:bg-gray-400">
              <FaRegHeart className="text-[1.6rem] text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
