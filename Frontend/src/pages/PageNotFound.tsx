import { Link } from "react-router-dom";
import PageNotFoundBG from "../assets/PageNotFoundBG.png"
const PageNotFound = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen w-screen bg-cover bg-center bg-no-repeat"
    style={{backgroundImage:`url(${PageNotFoundBG})`}}>
      <div className=" text-gray-600 font-bold text-5xl">Page not Found</div>
     <Link to="/">
      <div className="h-10 text-purple-600 font-bold text-5xl">
        Go to home page
      </div>     
     </Link>
    </div>
  );
}

export default PageNotFound