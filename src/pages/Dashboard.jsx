import { useEffect, useState } from "react";
import DashboardCard from "../components/dashboard/DashboardCard";
import { usePIdContext } from "../context-api/Context";
import { FaSortAmountDown } from "react-icons/fa";
import { Modal } from "../ui/Modal";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const [toggleButton, setToggleButton] = useState("cart");
  const { cartItems } = usePIdContext();
  const { wishlistItems } = usePIdContext();
  const { setCartItems } = usePIdContext();
  const { showModal } = usePIdContext();
  const { setShowModal } = usePIdContext();

  const location = useLocation();
  useEffect(() => {
    const pageTitle = "Gadget Heaven | Dashboard";
    document.title = pageTitle;
  }, [location]);

  const handleSortByPrice = () => {
    const sortedCartItems = [...cartItems].sort((a, b) => b.price - a.price);
    setCartItems(sortedCartItems);
  };

  return (
    <div>
      {showModal && (
        <Modal
          total={cartItems.map((item) => item.price).reduce((a, b) => a + b, 0)}
        />
      )}
      <div className="bg-purple-600 h-[20rem] rounded-xl flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold text-gray-50 text-center tracking-wide pt-5 pb-2">
          Dashboard
        </h1>

        <p className="text-sm text-gray-200 w-[500px] text-center py-2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>

        <div className="flex items-center gap-x-4">
          <button
            onClick={() => {
              setToggleButton("cart");
            }}
            className={`my-5  text-2xl hover:bg-gray-200 font-semibold w-[10rem] h-12 rounded-[2rem] ${
              toggleButton === "cart"
                ? "bg-gray-50 text-purple-600 hover:text-purple-700"
                : "border-2 border-gray-50 text-gray-50 hover:bg-gray-50 hover:text-purple-600"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => {
              setToggleButton("wishlist");
            }}
            className={`my-5  text-2xl hover:bg-gray-200 font-semibold w-[10rem] h-12 rounded-[2rem] ${
              toggleButton === "wishlist"
                ? "bg-gray-50 text-purple-600 hover:text-purple-700"
                : "border-2 border-gray-50 text-gray-50 hover:bg-gray-50 hover:text-purple-600"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-2xl font-semibold">
            {toggleButton === "cart" ? "Cart Items" : "Wishlist Items"}
          </h1>
          <div
            className={`${
              toggleButton === "cart" ? "flex items-center gap-x-4" : "hidden"
            } `}
          >
            <h1 className="text-2xl text-gray-600 font-semibold">
              Total Price: $
              {cartItems.map((item) => item.price).reduce((a, b) => a + b, 0)}
            </h1>
            <button
              onClick={handleSortByPrice}
              className="text-purple-600 hover:bg-purple-600 hover:text-gray-50 font-semibold flex items-center gap-x-3 px-4 py-1 border-2 border-purple-600 rounded-[2rem]"
            >
              <p className="text-lg">Sort by Price</p>
              <FaSortAmountDown className="text-[1.3rem]" />
            </button>
            <button
              onClick={() => setShowModal(true)}
              disabled={cartItems.length === 0}
              className="bg-purple-600  hover:bg-purple-800 text-gray-50 hover:text-gray-200 font-semibold  px-4 py-1 border-2 border-purple-600 rounded-[2rem] text-lg"
            >
              Purchase
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-8">
          {cartItems.map((item) => {
            return (
              toggleButton === "cart" && (
                <DashboardCard key={item.product_id} item={item} />
              )
            );
          })}

          {wishlistItems.map((item) => {
            return (
              toggleButton === "wishlist" && (
                <DashboardCard key={item.product_id} item={item} />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
