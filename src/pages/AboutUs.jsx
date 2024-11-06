import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AboutUs = () => {
  const location = useLocation();
  useEffect(() => {
    const pageTitle = "Gadget Heaven | About Us";
    document.title = pageTitle;
  }, [location]);
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      <div className="bg-purple-600 h-[20rem] w-full rounded-xl flex flex-col items-center justify-center pb-20">
        <h1 className="text-4xl font-semibold text-gray-50 text-center tracking-wide py-2">
          About Us
        </h1>
        <p className="text-sm text-gray-200 w-[500px] text-center py-2">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>

      <div className="mt-[-100px] w-[80%] bg-white p-10 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          At Gadget Heaven, our mission is to provide the latest and greatest in
          technology and accessories. We strive to offer products that enhance
          your lifestyle and keep you connected in today's fast-paced world.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-6">
          Founded in 2021, Gadget Heaven started with a simple idea: to make
          cutting-edge technology accessible to everyone. Our team of tech
          enthusiasts works tirelessly to curate a selection of products that
          are both innovative and affordable.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Innovation: We are committed to staying ahead of the curve.</li>
          <li>Quality: We offer products that are built to last.</li>
          <li>Customer Satisfaction: Your happiness is our top priority.</li>
          <li>
            Integrity: We believe in honest and transparent business practices.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
        <p className="text-gray-600 mb-6">
          Our team is made up of passionate individuals who live and breathe
          technology. From our customer service representatives to our product
          specialists, everyone at Gadget Heaven is dedicated to providing you
          with the best possible experience.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-600">
          Have questions or need assistance? Reach out to us at{" "}
          <a href="mailto:support@gadgetheaven.com" className="text-purple-600">
            support@gadgetheaven.com
          </a>{" "}
          or call us at (123) 456-7890. We're here to help!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
