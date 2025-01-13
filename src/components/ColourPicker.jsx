import React from "react";

const ColourPicker = ({ setEmotion }) => {
  return (
    <div className="flex flex-col items-center space-y-6 mt-44">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white animate-pulse-color">
        Read me when you are
      </h2>
      {/* Adjust grid layout based on screen size */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        <button
          className="bg-yellow-400 text-white px-6 py-4 rounded-md shadow-xl hover:scale-110 transition-all duration-300 ease-in-out w-36 sm:w-48 flex items-center justify-center space-x-2 transform hover:bg-yellow-500"
          onClick={() => setEmotion("happy")}
        >
          <span role="img" aria-label="happy" className="text-3xl">
            😊
          </span>
          <span className="text-xl font-semibold">Happy</span>
        </button>
        <button
          className="bg-blue-400 text-white px-6 py-4 rounded-md shadow-xl hover:scale-110 transition-all duration-300 ease-in-out w-36 sm:w-48 flex items-center justify-center space-x-2 transform hover:bg-blue-500"
          onClick={() => setEmotion("sad")}
        >
          <span role="img" aria-label="sad" className="text-3xl">
            😔
          </span>
          <span className="text-xl font-semibold">Sad</span>
        </button>
        <button
          className="bg-purple-400 text-white px-6 py-4 rounded-md shadow-xl hover:scale-110 transition-all duration-300 ease-in-out w-36 sm:w-48 flex items-center justify-center space-x-2 transform hover:bg-purple-500"
          onClick={() => setEmotion("lonely")}
        >
          <span role="img" aria-label="lonely" className="text-3xl">
            😞
          </span>
          <span className="text-xl font-semibold">Lonely</span>
        </button>
        <button
          className="bg-red-600 text-white px-6 py-4 rounded-md shadow-xl hover:scale-110 transition-all duration-300 ease-in-out w-36 sm:w-48 flex items-center justify-center space-x-2 transform hover:bg-red-700"
          onClick={() => setEmotion("angry")}
        >
          <span role="img" aria-label="angry" className="text-3xl">
            😡
          </span>
          <span className="text-xl font-semibold">Angry</span>
        </button>
        <button
          className="bg-green-400 text-white px-6 py-4 rounded-md shadow-xl hover:scale-110 transition-all duration-300 ease-in-out w-36 sm:w-48 flex items-center justify-center space-x-2 transform hover:bg-green-500"
          onClick={() => setEmotion("thankful")}
        >
          <span role="img" aria-label="thankful" className="text-3xl">
            🙏
          </span>
          <span className="text-xl font-semibold">Thankful</span>
        </button>
        <button
          className="bg-orange-400 text-white px-6 py-4 rounded-md shadow-xl hover:scale-110 transition-all duration-300 ease-in-out w-36 sm:w-48 flex items-center justify-center space-x-2 transform hover:bg-orange-500"
          onClick={() => setEmotion("anxious")}
        >
          <span role="img" aria-label="anxious" className="text-3xl">
            😟
          </span>
          <span className="text-xl font-semibold">Anxious</span>
        </button>
      </div>
    </div>
  );
};

export default ColourPicker;
