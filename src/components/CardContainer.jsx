import React, { useState } from "react";
import verses from "../data/verses";

const CardContainer = ({ emotion }) => {
  const [verse, setVerse] = useState("");

  const pickRandomCard = () => {
    const randomVerse = verses[emotion][Math.floor(Math.random() * verses[emotion].length)];
    setVerse(randomVerse);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-xl font-semibold">
        Your Selected Emotion: <span className="capitalize">{emotion}</span>
      </h2>
      <button
        className="bg-green-500 text-white px-6 py-2 mt-4 rounded-md shadow-md hover:bg-green-700"
        onClick={pickRandomCard}
      >
        Pick a Card
      </button>
      {verse && (
        <p className="mt-6 p-4 bg-gray-100 rounded-md shadow-md text-center max-w-md">
          {verse}
        </p>
      )}
    </div>
  );
};

export default CardContainer;
