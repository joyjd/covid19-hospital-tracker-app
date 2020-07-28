import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
export default function Filteralert(props) {
  return (
    <div>
      <Dialog open={props.open} onClose={props.handleAlertClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>{props.header}</DialogTitle>
        <DialogContent>{props.body}</DialogContent>
        <DialogActions>
          <Button onClick={() => props.onClose(false)} color='primary'>
            Cancel
          </Button>
          <Button onClick={() => props.onClose(true)} color='primary' autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
