/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Group = ({
  property1,
  className,
  rectangleClassName,
  rectangle = "/img/rectangle-30-9.png",
  divClassName,
  text = "Latest Trend",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`group ${state.property1} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {state.property1 === "default" && (
        <>
          <img className={`img ${rectangleClassName}`} alt="Rectangle" src={rectangle} />
          <div className="overlap-group">
            <div className={`latest-trend ${divClassName}`}>{text}</div>
          </div>
        </>
      )}

      {state.property1 === "variant-2" && (
        <>
          <div className="div">
            <div className="rectangle-2" />
            <div className="text-wrapper">BUY NOW</div>
          </div>
          <div className="overlap">
            <div className="rectangle-2" />
            <div className="text-wrapper">ADD TO BAG</div>
          </div>
          <div className="overlap-2">
            <div className="rectangle-2" />
            <div className="text-wrapper">VIEW DETAILS</div>
          </div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

Group.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  rectangle: PropTypes.string,
  text: PropTypes.string,
};
