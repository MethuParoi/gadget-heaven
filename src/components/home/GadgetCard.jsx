const GadgetCard = ({ img, title, price }) => {
  return (
    <div className="w-[300px] h-[350px] rounded-xl p-2 bg-gray-100">
      <img
        className="w-[290px] h-[210px] mx-auto rounded-xl mb-3"
        src={img}
        alt="gadget"
      />
      <h3 className="text-xl font-semibold line-clamp-1">{title}</h3>
      <p className="text-gray-600">Price: ${price}</p>
      <button className="text-lg font-semibold text-purple-600 hover:text-gray-50 py-1 px-3 border-2 border-purple-500 rounded-[2rem] hover:bg-purple-500 mt-2">
        View Details
      </button>
    </div>
  );
};

export default GadgetCard;
