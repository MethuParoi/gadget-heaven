import { useLocation } from "react-router-dom";
import ExploreGadgets from "../components/home/ExploreGadgets";
import Hero from "../components/home/Hero";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    const pageTitle = "Gadget Heaven | Home";
    document.title = pageTitle;
  }, [location]);

  return (
    <div>
      <Hero />
      <ExploreGadgets />
    </div>
  );
};

export default Home;
