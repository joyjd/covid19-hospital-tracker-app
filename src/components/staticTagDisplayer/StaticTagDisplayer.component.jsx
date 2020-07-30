import React from "react";
import "./../../components/staticTagDisplayer/StaticTagDisplayer.style.scss";

export const StaticTagDisplayer = (props) => {
  return (
    <div className='staticTagHolderContainer'>
      {props.locationTags.map((elem) => (
        <div className='staticKeyTags'>{elem} </div>
      ))}
    </div>
  );
};
