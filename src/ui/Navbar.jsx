import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
      </div>

      <div className="flex space-x-4">
        <button className="w-8 h-8 bg-gray-50 hover:bg-gray-200 rounded-[50%] flex items-center justify-center">
          <IoCartOutline className="text-gray-800 text-xl" />
        </button>
        <button className="w-8 h-8 bg-gray-50 hover:bg-gray-200 rounded-[50%] flex items-center justify-center">
          <FaRegHeart className="text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default Navbar