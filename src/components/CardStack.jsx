import React, { useState } from "react";
import verses from "../data/verses";

const CardStack = ({ emotion, setEmotion }) => {
  const [selectedVerse, setSelectedVerse] = useState(null);

  const pickRandomVerse = () => {
    const randomVerse =
      verses[emotion][Math.floor(Math.random() * verses[emotion].length)];
    setSelectedVerse(randomVerse);
  };

  // Map emotion to corresponding background color
  const emotionColors = {
    happy: "bg-yellow-400 hover:bg-yellow-500",
    sad: "bg-blue-400 hover:bg-blue-500",
    lonely: "bg-purple-400 hover:bg-purple-500",
    angry: "bg-red-600 hover:bg-red-700",
    thankful: "bg-green-400 hover:bg-green-500",
    anxious: "bg-orange-400 hover:bg-orange-500"
  };

  const textColors = {
    happy: "text-yellow-400",
    sad: "text-blue-400",
    lonely: "text-purple-400",
    angry: "text-red-600",
    thankful: "text-green-400",
    anxious: "text-orange-400"
  };

  return (
    <div className="flex flex-col items-center mt-44">
      {!selectedVerse ? (
        <>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-700 mb-6">
            Pick a Card for Emotion:{" "}
            <span className={`${textColors[emotion]} capitalize text-indigo-600`}>{emotion}</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className={`${emotionColors[emotion]} border-2 border-gray-300 cursor-pointer shadow-xl w-24 h-32 rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all`}
                onClick={pickRandomVerse}
              >
                <p className="text-center mt-12 font-bold text-white text-xl">
                  Card {index + 1}
                </p>
              </div>
            ))}
          </div>
          <button
            className="bg-gray-700 text-white px-6 py-3 mt-8 rounded-md shadow-md hover:bg-gray-900 transform hover:scale-105 transition-all duration-300"
            onClick={() => setEmotion("")}
          >
            Back to Home
          </button>
        </>
      ) : (
        <div className="text-center p-6">
          <p className="text-lg sm:text-2xl font-medium text-gray-800 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 p-6 sm:p-8 rounded-lg shadow-xl max-w-full sm:max-w-md mx-auto text-gray-700 leading-relaxed">
  {selectedVerse}
</p>

          <div className="flex flex-col items-center sm:flex-row sm:space-x-6 sm:justify-center sm:items-center mt-8">
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 w-56 sm:w-auto transform hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedVerse(null)}
            >
              Pick Another Card
            </button>
            <button
              className="bg-gray-700 text-white px-6 py-3 mt-4 sm:mt-0 rounded-md shadow-lg hover:bg-gray-900 w-56 sm:w-auto transform hover:scale-105 transition-all duration-300"
              onClick={() => setEmotion("")}
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardStack;
