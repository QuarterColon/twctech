/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Rectangle = ({ property1, propertyDefaultClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <>
      {state.property1 === "default" && (
        <div
          className={`rectangle property-default ${propertyDefaultClassName}`}
          onMouseEnter={() => {
            dispatch("mouse_enter");
          }}
          onMouseLeave={() => {
            dispatch("mouse_leave");
          }}
        />
      )}

      {state.property1 === "variant-2" && (
        <img
          className={`rectangle property ${propertyDefaultClassName}`}
          alt="Property"
          src="/img/property-1-variant2.svg"
        />
      )}
    </>
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

Rectangle.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
