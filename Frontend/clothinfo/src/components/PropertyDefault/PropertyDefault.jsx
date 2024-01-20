/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyDefault = ({
  className,
  rectangle = "/img/rectangle-44-1.png",
  img = "/img/rectangle-45-1.png",
  rectangle1 = "/img/rectangle-46-1.png",
  rectangle2 = "/img/rectangle-47-1.png",
  rectangle3 = "/img/rectangle-48-1.png",
}) => {
  return (
    <div className={`property-default ${className}`}>
      <img className="img" alt="Rectangle" src={rectangle} />
      <img className="rectangle-2" alt="Rectangle" src={img} />
      <img className="rectangle-3" alt="Rectangle" src={rectangle1} />
      <img className="rectangle-4" alt="Rectangle" src={rectangle2} />
      <img className="rectangle-5" alt="Rectangle" src={rectangle3} />
    </div>
  );
};

PropertyDefault.propTypes = {
  rectangle: PropTypes.string,
  img: PropTypes.string,
  rectangle1: PropTypes.string,
  rectangle2: PropTypes.string,
  rectangle3: PropTypes.string,
};
