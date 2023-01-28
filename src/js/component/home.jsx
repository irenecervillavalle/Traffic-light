import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [color, setColor] = useState("red-light");

  return (
    <div className="traffic-light">
      <div
        onClick={() => setColor("red-light")}
        className={color === "red-light" ? " red-light glow" : "red-light"}
      ></div>
      <div
	  onClick={() => setColor("yellow-light")}
        className={
          color === "yellow-light" ? "yellow-light glow" : "yellow-light"
        }
	></div>
      <div
	  onClick={() => setColor("green-light")}
        className={color === "green-light" ? "green-light glow" : "green-light"}
      ></div>
    </div>
  );
};
export default Home;
