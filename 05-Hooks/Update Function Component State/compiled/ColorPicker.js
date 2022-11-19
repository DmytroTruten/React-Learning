import React, { useState } from 'react';
export default function ColorPicker() {
  const [color, setColor] = useState();
  const divStyle = {
    backgroundColor: color
  };
  return /*#__PURE__*/React.createElement("div", {
    style: divStyle
  }, /*#__PURE__*/React.createElement("p", null, "The color is ", color), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setColor("Aquamarine");
    }
  }, "Aquamarine"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setColor("BlueViolet");
    }
  }, "BlueViolet"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setColor("Chartreuse");
    }
  }, "Chartreuse"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setColor("CornflowerBlue");
    }
  }, "CornflowerBlue"));
}