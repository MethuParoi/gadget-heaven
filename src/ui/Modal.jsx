import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { usePIdContext } from "../context-api/Context";
import { useNavigate } from "react-router-dom";

export const Modal = ({ total }) => {
  const { setShowModal } = usePIdContext();
  const { setCartItems } = usePIdContext();
  const { setTotalItems } = usePIdContext();

  const navigate = useNavigate();

  return (
    <>
      <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center z-50">
        <div className="min-h-[22rem] min-w-[35rem] bg-gray-50 border-transparent rounded-[2rem] shadow-2xl flex flex-col items-center">
          <div className="flex flex-col items-center justify-center pt-10">
            <IoCheckmarkDoneCircle className="text-[5rem] text-green-400" />
            <h2 className="text-3xl font-semibold ">Payment Successful</h2>
          </div>

          <hr className="w-[75%] h-8px bg-gray-800 my-5" />

          <p className="text-gray-600 font-semibold">Thanks for purchasing</p>
          <p className="text-gray-600 font-semibold pt-2">Total: {total}</p>

          <button
            onClick={() => {
              setShowModal(false);
              setCartItems([]);
              setTotalItems(0);
              navigate("/");
            }}
            className="w-[90%] h-12 bg-gray-300 hover:bg-gray-400 rounded-[2rem] flex justify-center items-center text-xl font-semibold text-gray-800 mt-5 "
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};
