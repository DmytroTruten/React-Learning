import React from "react";
import ReactDOM from "react-dom";

const goose =
  "https://content.codecademy.com/courses/React/react_photo-goose.jpg";

const gooseImg = <img src={goose} alt="" />;
ReactDOM.render(gooseImg, document.getElementById("app"))