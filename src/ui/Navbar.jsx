import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { usePIdContext } from "../context-api/Context";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { totalItems } = usePIdContext();
  const { totalWishlistItems } = usePIdContext();

  return (
    <div
      className={`${
        location.pathname === "/home"
          ? "bg-purple-600 text-gray-100 "
          : "bg-gray-50 text-gray-700"
      } flex items-center justify-around  py-4 rounded-t-xl`}
    >
      <h1 className="text-2xl font-semibold ">Gadget Heaven</h1>

      <div className="flex space-x-4 font-medium ">
        <button
          className={`${
            location.pathname === "/home"
              ? "hover:text-gray-200 text-gray-50 underline font-bold"
              : "hover:text-gray-900"
          }`}
          onClick={() => navigate("/home")}
        >
          Home
        </button>
        <button
          className={`${
            location.pathname === "/home"
              ? "hover:text-gray-200"
              : "hover:text-purple-800"
          } ${
            location.pathname === "/statistics"
              ? " text-purple-600 underline font-bold"
              : ""
          }`}
          onClick={() => {
            navigate("/statistics");
          }}
        >
          Statistics
        </button>
        <button
          className={`${
            location.pathname === "/home"
              ? "hover:text-gray-200"
              : "hover:text-purple-800"
          }  ${
            location.pathname === "/dashboard"
              ? " text-purple-600 underline font-bold"
              : ""
          }`}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>
        <button
          className={`${
            location.pathname === "/home"
              ? "hover:text-gray-200"
              : "hover:text-purple-800"
          }  ${
            location.pathname === "/about-us"
              ? " text-purple-600 underline font-bold"
              : ""
          }`}
          onClick={() => navigate("/about-us")}
        >
          About Us
        </button>
      </div>

      <div className="flex space-x-4">
        <button className="w-10 h-10 bg-gray-50 hover:bg-gray-200 rounded-[50%] flex items-center justify-center border-2 border-gray-300 relative">
          <IoCartOutline className="text-gray-800 text-xl" />
          <p className="absolute text-purple-800 font-semibold top-[-.5rem] right-[-.5rem] bg-purple-200 rounded-[50%] h-5 w-5 flex items-center justify-center">
            {totalItems}
          </p>
        </button>
        <button className="w-10 h-10 bg-gray-50 hover:bg-gray-200 rounded-[50%] flex items-center justify-center border-2 border-gray-300 relative">
          <FaRegHeart className="text-gray-800" />
          <p className="absolute text-purple-800 font-semibold top-[-.5rem] right-[-.5rem] bg-purple-200 rounded-[50%] h-5 w-5 flex justify-center items-center">
            {totalWishlistItems}
          </p>
        </button>
      </div>
    </div>
  );
};

export default Navbar