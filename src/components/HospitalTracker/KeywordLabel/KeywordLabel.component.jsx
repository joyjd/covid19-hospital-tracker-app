import React from "react";
import "./../KeywordLabel/KeywordLabel.style.scss";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
export const KeywordLabel = (props) => {
  return <div className='keywordTagItem'>{props.type == null ? <Chip label={props.item} /> : props.type == "cross" ? <Chip label={props.item} color='primary' onDelete={() => props.onClick(props.item, props.type)} /> : <Chip label={props.item} clickable color='primary' onClick={() => props.onClick(props.item, props.type)} />}</div>;
};
