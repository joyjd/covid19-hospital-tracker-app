import React from "react";
import { KeywordLabel } from "./../KeywordLabel/KeywordLabel.component";
import "./../LocationKeywordContainer/LocationKeyword.style.scss";

export const LocationKeyword = (props) => {
  return (
    <div className='LocationKeywordContainer'>
      {props.locationTags.map((elem, index) => (
        <KeywordLabel key={index} item={elem}></KeywordLabel>
      ))}
    </div>
  );
};
