import { useState } from 'react';
import {CloudUpload} from "lucide-react"
import BGImg from "../assets/BodyBG.png"
const LandingPageBody = () => {
     const [fileName, setFileName] = useState("Choose image from Device");

     const handleFileChange = (event: any) => {
       const file = event.target.files[0];
       if (file) {
         setFileName(file.name); 
       } else {
         setFileName("Choose image from Device"); 
       }
     };
  return (
    <div>
      <div
        className="flex justify-center flex-col items-center pb-3 pt-2"
        style={{ backgroundImage: `url(${BGImg})` }}
      >
        <div className="flex text-4xl font-bold gap-2">
          <p>Find Any</p>
          <p className="text-purple-600">Movie</p> <p>or</p>{" "}
          <p className="text-pink-400">Series</p>
        </div>
        <div className=" text-gray-600 w-1/3 pt-3 ml-20">
          Upload a screenshot and we'll find the exact match for you.
        </div>
        <div className="border-dotted h-1/3 w-2/3 border-2 flex flex-col items-center gap-3 py-5 bg-white">
          <div className="p-3 bg-purple-400 rounded-full flex justify-center items-center">
            <CloudUpload size={30} />
          </div>
          <div className="font-bold">Drag & drop an image here</div>
          <div>or</div>
          <div className="bg-purple-600 w-65 items-center justify-center rounded-2xl  hover:bg-purple-500 transition active:scale-95">
            <div className=" relative">
              <input
                type="file"
                id="react-custom-file"
                className="hidden"
                onChange={handleFileChange}
                accept="image/*"
              />
              <label
                htmlFor="react-custom-file"
                className="block w-full px-4 py-2 text-white font-bold cursor-pointer text-center truncate"
              >
                {fileName}
              </label>
            </div>
          </div>
          <div className="text-gray-700">JPG,PNG,WEBP upto 10MB</div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageBody