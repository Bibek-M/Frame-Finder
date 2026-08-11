import React, { useState } from "react";
import axios from "axios";
import {
  CloudUpload,
  Loader2,
  Film,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import BGImg from "../assets/BodyBG.png";

const API_URL = "http://localhost:3000/api/identify";
const MAX_FILE_SIZE_MB = 10;

const LandingPageBody = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("Choose image from Device");
  const [loading, setLoading] = useState<boolean>(false);
  const [movieTitle, setMovieTitle] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Handle file selection
  const processFile = (file: File | undefined) => {
    if (!file) return;

    // Check 10MB size limit
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setError(`File size exceeds ${MAX_FILE_SIZE_MB}MB limit.`);
      return;
    }

    setError(null);
    setMovieTitle(null);
    setSelectedFile(file);
    setFileName(file.name);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    processFile(file);
  };

  // Drag and Drop handlers
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    processFile(file);
  };

  // Upload image to backend via Axios
  const handleIdentify = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setError(null);
    setMovieTitle(null);

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post<{ title: string }>(API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data && response.data.title) {
        setMovieTitle(response.data.title);
      } else {
        setMovieTitle("Unknown");
      }
    } catch (err: any) {
      console.error("API Upload Error:", err);
      setError(
        err.response?.data?.error ||
          "Failed to connect to backend server. Make sure Bun server is running."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setFileName("Choose image from Device");
    setMovieTitle(null);
    setError(null);
  };

  return (
    <div>
      <div
        className="flex justify-center flex-col items-center pb-10 pt-6 min-h-[85vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${BGImg})` }}
      >
        {/* Header */}
        <div className="flex text-4xl font-bold gap-2 text-center flex-wrap justify-center">
          <p>Find Any</p>
          <p className="text-purple-600">Movie</p> <p>or</p>{" "}
          <p className="text-pink-400">Series</p>
        </div>
        <div className="text-gray-600 text-center max-w-md pt-3 pb-6 px-4">
          Upload a screenshot and we'll find the exact match for you.
        </div>

        {/* Upload Drop Zone Box */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-dashed border-2 rounded-2xl w-11/12 max-w-2xl flex flex-col items-center gap-3 py-8 px-6 bg-white shadow-lg transition-all ${
            isDragging ? "border-purple-600 bg-purple-50" : "border-purple-300"
          }`}
        >
          <div className="p-4 bg-purple-100 text-purple-600 rounded-full flex justify-center items-center">
            <CloudUpload size={36} />
          </div>

          <div className="font-bold text-gray-800 text-lg">
            {isDragging
              ? "Drop your screenshot here"
              : "Drag & drop an image here"}
          </div>
          <div className="text-gray-400 text-sm">or</div>

          {/* File Input Button */}
          <div className="bg-purple-600 max-w-xs w-full items-center justify-center rounded-2xl hover:bg-purple-500 transition active:scale-95 shadow-md">
            <div className="relative">
              <input
                type="file"
                id="react-custom-file"
                className="hidden"
                onChange={handleFileChange}
                accept="image/*"
              />
              <label
                htmlFor="react-custom-file"
                className="block w-full px-4 py-2.5 text-white font-bold cursor-pointer text-center truncate"
              >
                {fileName}
              </label>
            </div>
          </div>

          <div className="text-gray-400 text-xs">JPG, PNG, WEBP up to 10MB</div>

          {/* Action Button */}
          {selectedFile && !movieTitle && (
            <button
              onClick={handleIdentify}
              disabled={loading}
              className="mt-4 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:opacity-95 transition disabled:opacity-50 flex items-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Analyzing Screenshot...
                </>
              ) : (
                <>
                  <Film size={20} />
                  Identify Movie / Series
                </>
              )}
            </button>
          )}

          {/* Error Message */}
          {error && (
            <div className="mt-4 flex items-center gap-2 text-red-600 bg-red-50 px-4 py-2.5 rounded-lg text-sm border border-red-200">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          {/* Result Banner */}
          {movieTitle && (
            <div className="mt-4 w-full flex flex-col items-center gap-3 p-5 bg-purple-50 border border-purple-200 rounded-xl">
              <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
                Identified Title
              </div>
              <div className="text-2xl font-black text-gray-900 text-center flex items-center gap-2">
                <Film className="text-pink-500" size={28} />
                <span>{movieTitle}</span>
              </div>
              <button
                onClick={handleReset}
                className="mt-2 text-xs flex items-center gap-1 text-purple-700 underline hover:text-purple-900 font-medium"
              >
                <RefreshCw size={14} /> Upload another image
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPageBody;
