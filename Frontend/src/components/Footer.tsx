import {Lightbulb} from "lucide-react"
import CinemaLogo from "../assets/CinemaLogo.png"
const Footer = () => {
  return (
    <div className="bg-purple-300 h-15 mx-10 rounded-2xl flex items-center px-30 justify-evenly">
      <div className="bg-purple-400 rounded-full p-2">
        <Lightbulb />
      </div>
      <div className="text-purple-600 font-bold ml-3">
        Tips for better results
      </div>
      <div className="text-sm w-1/3">
        use clear screenshots, avoid dark or blurry images, and try to capture
        unique scenes with distinct objects or characters
      </div>
      <div className="">
        <img src={CinemaLogo} alt="" className="object-cover h-18"/>
      </div>
    </div>
  );
}

export default Footer