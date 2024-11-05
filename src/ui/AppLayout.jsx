import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className=" min-h-screen flex flex-col justify-between">
      <div className="px-5 md:px-0 pt-[1rem] md:pt-[2rem] md:container md:mx-auto xl:max-w-[1100px] 2xl:max-w-[1350px]">
        <Navbar />
        <div className="container mx-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
