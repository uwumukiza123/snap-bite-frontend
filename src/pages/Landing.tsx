import { Link } from "react-router-dom";
import Heading from "../components/ui/Heading";

const Landing = () => {
  return (
    <div className="bg-primary grid justify-center items-center py-11">
      <Heading />
      <div>
        <div className="bg-white rounded-full mt-5 mb-14">
          <img
            src="/uploads/grill-chicken-spicy 1.png"
            alt="grill chicken"
            className="p-4"
          />
        </div>
      </div>
      <div className="text-[32px] flex flex-col items-center">
        <h3 className="text-right-yellow ">Enjoy</h3>
        <h3 className="text-white">Your Meal</h3>
      </div>
      <div className="bg-white rounded-2xl flex justify-center items-center h-[50px] my-8">
        <Link to="/login">
          <button className="text-secondary text-2xl">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
