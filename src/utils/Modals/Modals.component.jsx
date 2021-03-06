import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import "./../Modals/Modals.style.scss";

export default function ResponsiveDialog(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Dialog fullScreen={fullScreen} open={props.open} onClose={props.handleClose} aria-labelledby='responsive-dialog-title'>
        <div className='hospitalImageContainer'>
          {/* <DialogTitle id='responsive-dialog-title'>{props.headerTitle}</DialogTitle> */}
          <div className='hosp_headerTitleContainer'>{props.headerTitle}</div>
        </div>

        <DialogContent>{props.body}</DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => props.onClose()} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
