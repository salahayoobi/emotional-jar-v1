import React, { useState } from "react";
import ColourPicker from "./ColourPicker";
import CardStack from "./CardStack";

const CardDisplay = () => {
    const [emotion, setEmotion] = useState("");

    return (
        <div className="flex flex-col items-center"
        style={{
            backgroundImage: "url('/background.jpg')", // Replace with your image URL
            backgroundSize: "cover", // Ensures the image covers the entire div
            backgroundPosition: "center", // Centers the image
            minHeight: "100vh", // Ensures the background covers the entire viewport height
          }}>
            {/* Conditional rendering for the ColourPicker and CardStack components */}
            {!emotion ? (
                <ColourPicker setEmotion={setEmotion} />
            ) : (
                <CardStack emotion={emotion} setEmotion={setEmotion} />
            )}
            {/* Displaying the iframe widget */}
            {/* <iframe
                id="iframe"
                title="prayerWidget"
                className="widget-m-top"
                style={{
                    width: "182px",
                    marginTop: "10px",
                    height: "340px",
                    border: "1px solid #ddd",
                }}
                scrolling="no"
                src="https://www.islamicfinder.org/prayer-widget/"
            ></iframe> */}
        </div>
    );
};

export default CardDisplay;
