import heroBanner from "../../assets/banner.jpg";

const Hero = () => {
  return (
    <div className="">
      <div className="bg-purple-600 h-[400px] rounded-b-xl flex flex-col items-center">
        <h1 className="text-4xl font-semibold text-gray-50 text-center tracking-wide py-2">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>

        <p className="text-sm text-gray-200 w-[500px] text-center py-2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>

        <button className="my-5 text-purple-600 hover:text-purple-700 text-2xl bg-gray-50 hover:bg-gray-200 font-semibold py-2 px-5 rounded-[2rem]">
          Shop Now
        </button>
      </div>

      <div className="mt-[-140px] border-2 border-gray-200 w-[1010px] p-5 mx-auto rounded-xl backdrop-blur-xl">
        <img
          src={heroBanner}
          className=" w-[1000px] h-[450px] rounded-xl "
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
