import { Search, Star, Clock } from "lucide-react";
import BgImg from "../assets/BGImg.png";
const SignupBody = () => {
  return (
    <div className="mt-3">
      <div className="flex w-1/2 text-5xl font-bold gap-1 flex-col">
        <p>Find Any</p>
        <div className="flex gap-3">
          <p className="text-purple-600">Movie</p> <p>or</p>{" "}
          <p className="text-pink-400">Series</p>
        </div>
      </div>
      <div className=" text-gray-600 w-1/3 mt-3">
        Upload a screenshot and we'll find the exact match for you.
      </div>
      <div className="mt-3">
        <div className="flex items-center">
          <div className="bg-white rounded-2xl p-2 shadow-2xl h-15 w-15 mt-3 flex items-center justify-center ">
            <Search size={50} color="blue" />
          </div>
          <div className="ml-3 text-sm">
            <div className="font-bold ">Accurate Results</div>
            <div className="w-48">Ai Powered matching for best results</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-white rounded-2xl p-2 shadow-2xl h-15 w-15 mt-3 flex items-center justify-center ">
            <Star size={50} color="#ffd700" />
          </div>
          <div className="ml-3 text-sm">
            <div className="font-bold">Quick & Easy</div>
            <div className="w-48">
              Get results in seconds with a single upload
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-white rounded-2xl p-2 shadow-2xl h-15 w-15 mt-3 flex items-center justify-center ">
            <Clock color="#90ee90" size={50} />
          </div>
          <div className="ml-3 text-sm">
            <div className="font-bold">Search History</div>
            <div className="w-48">Access your previous searches anytime</div>
          </div>
        </div>
      </div>
      <img
        src={BgImg}
        alt="background Image"
        className=" h-55 justify-self-end"
      />
    </div>
  );
};

export default SignupBody;
