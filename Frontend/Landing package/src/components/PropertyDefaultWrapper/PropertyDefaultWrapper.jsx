/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const PropertyDefaultWrapper = ({ property1, className, wardrobeCollectionsClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`property-default-wrapper ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {state.property1 === "default" && (
        <div className={`wardrobe-collections ${wardrobeCollectionsClassName}`}>
          Wardrobe
          <br />
          collections
        </div>
      )}

      {state.property1 === "variant-2" && (
        <>
          <div className="wardrobe-collections-2">
            Wardrobe
            <br />
            collections
          </div>
          <div className="overlap-group-2">
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="rectangle-5" />
            <div className="rectangle-6" />
            <div className="party-look">Party-wear</div>
            <div className="party-look-2">College-wear</div>
            <div className="party-look-3">Formal-wear</div>
            <div className="party-look-4">Disc-wear</div>
          </div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
