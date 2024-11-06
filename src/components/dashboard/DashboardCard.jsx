import { TiDeleteOutline } from "react-icons/ti";

const DashboardCard = ({ item }) => {
  return (
    <div className="bg-gray-100 w-[75%] h-[12rem] rounded-xl flex items-start justify-between p-4">
      <div className="flex items-start gap-x-5">
        <div className="bg-gray-200 w-[13rem] h-[10rem] rounded-xl">
          <img
            src={item.product_image}
            className="w-full h-full rounded-xl"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{item.product_title}</h2>
          <p className="text-gray-600">{item.description}</p>
          <h2 className="text-xl text-gray-600 font-semibold">
            Price: $ {item.price}
          </h2>
        </div>
      </div>
      <div>
        <button className="">
          <TiDeleteOutline className="text-[2.5rem] text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default DashboardCard;
