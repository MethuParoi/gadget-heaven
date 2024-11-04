import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

  return (
    <div className="bg-purple-600 flex items-center justify-around text-gray-100 py-4">
      <h1 className="text-2xl font-semibold ">Gadget Heaven</h1>

      <div className="flex space-x-4 font-medium">
        <button onClick={() => navigate("/home")}>Home</button>
        <button onClick={() => navigate("/statistics")}>Statistics</button>
        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      </div>

      <div className="flex space-x-4">
        <button className="w-8 h-8 bg-gray-100 rounded-[50%] flex items-center justify-center">
          <IoCartOutline className="text-gray-800 text-xl" />
        </button>
        <button className="w-8 h-8 bg-gray-100 rounded-[50%] flex items-center justify-center">
          <FaRegHeart className="text-gray-800" />
        </button>
      </div>
    </div>
  );
}

export default Navbar