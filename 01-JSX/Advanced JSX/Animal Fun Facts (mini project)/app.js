import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

const title = "";
const background = (
  <div>
    <img className="background" src="./images/ocean.jpg" alt="ocean" />
  </div>
);
const images = [];
for (const animal in animals) {
  images.push(
    <img
      src={animals[animal].image}
      alt={animal}
      className="animal"
      ariaLabel={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

const displayFact = (e) => {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random() * animals.facts.length);
  const funFact = animalInfo.facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact;
};
const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {background}
    <p id="fact"></p>
    <div className="animals">{images}</div>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));
