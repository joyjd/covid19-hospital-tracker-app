import React from "react";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";

export const ExpandContract = (props) => {
  return (
    <Button
      style={{ maxHeight: "25px", minHeight: "25px", minWidth: "45px", maxWidth: "45px", backgroundColor: "#97d8ff" }}
      variant='contained'
      color='primary'
      onClick={() => {
        props.onClick(props.parentId);
      }}
    >
      {props.data ? (
        <div className='displayFlex'>
          <ZoomOutIcon fontSize='small' /> <ExpandLessIcon fontSize='small' />
        </div>
      ) : (
        <div className='displayFlex'>
          <ZoomInIcon fontSize='small' /> <ExpandMoreIcon fontSize='small' />
        </div>
      )}
    </Button>
  );
};
