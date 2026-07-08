import { Link } from "react-router-dom";
import LogoImg from "../assets/LogoImg.png";
import { House, CircleQuestionMark } from "lucide-react";
const LandingNav = () => {
  return (
    <div className="px-9 my-3 pb-2 border-b ">
      <div className="flex justify-between items-center">
        <div className="flex">
          <img src={LogoImg} alt="logo" className="h-15" />
          <div className="ml-5">
            <div className="flex">
              <p className="text-3xl font-bold">Frame</p>
              <p className="text-3xl font-bold text-purple-600">Finder</p>
            </div>
            <div className="w-50 text-gray-600 text-sm">
              Find any movie or series from a screenshot
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex gap-2 hover:bg-purple-300 py-1 rounded-3xl px-2 items-center h-12">
            <House />
            <p>Home</p>
          </div>
          <div className="flex gap-2 hover:bg-purple-300 py-1 rounded-3xl px-2 items-center h-12">
            <CircleQuestionMark />
            <p>About</p>
          </div>
        </div>
        <div className="flex gap-10">
          <Link to="/signin">
            <div className="text-purple-600 px-4 py-2 font-bold rounded-2xl bg-white border">
              Sign In
            </div>
          </Link>
          <Link to="/signup">
            <div className="text-white px-4 py-2 font-bold rounded-2xl bg-purple-600">
              Sign Up
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingNav;
