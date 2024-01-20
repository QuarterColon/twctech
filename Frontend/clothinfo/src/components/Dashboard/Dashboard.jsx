/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Property1Default } from "../../icons/Property1Default";
import { Group } from "../Group";
import "./style.css";

export const Dashboard = ({ className, group = "/img/group-20-1.png" }) => {
  return (
    <div className={`dashboard ${className}`}>
      <div className="overlap-group-2">
        <div className="rectangle-9" />
        <div className="text-wrapper-2">Blog</div>
        <img className="favorite" alt="Favorite" src="/img/icons8-favorite-48-1.png" />
        <img className="shopping-bag" alt="Shopping bag" src="/img/icons8-shopping-bag-50-1-1.png" />
        <img className="search" alt="Search" src="/img/icons8-search-1-1.svg" />
        <div className="group-2">
          <div className="text-wrapper-3">Men</div>
          <div className="text-wrapper-4">Women</div>
          <div className="text-wrapper-5">Originals</div>
          <div className="text-wrapper-6">Rentals</div>
          <div className="boutique-boulevard">
            Boutique
            <br />
            Boulevard
          </div>
        </div>
        <Group className="group-1" property1="default" wardrobeCollectionsClassName="group-instance" />
        <Property1Default className="component" />
        <div className="text-wrapper-7">The Walk-in Closet</div>
        <img className="group-3" alt="Group" src={group} />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  group: PropTypes.string,
};
