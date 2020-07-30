import React from "react";
import "./../DeviceLocationModal/DisplayLocationModal.style.scss";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import DialogActions from "@material-ui/core/DialogActions";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import PermDeviceInformationIcon from "@material-ui/icons/PermDeviceInformation";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});
export default function DisplayLocationModal(props) {
  return (
    <div id='welcomeDialogue'>
      <Dialog fullScreen open={props.open} TransitionComponent={Transition} onClose={props.handleAlertClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
        <div className='LocationblockedContainer'>
          <Container maxWidth='xs'>
            <div className='LocationBlockBody'>
              <div className='displayFlex justifyCenter'>
                <div className='IconContainer'>
                  <ReportProblemIcon fontSize='large' />
                  <PermDeviceInformationIcon fontSize='large' />
                </div>
                <h2>OOPS !</h2>
              </div>
              <div className='displayFlex justifyCenter'>It appears you have denied permission for accessing your device location or somehow HospitalTracker has been added to Denied-Permission list in your browser.</div>
              <br />
              <div>To change this, you can click on this icon over your bowser and select "Manage", delete http:www.abc.com from "Block" list and then refresh the page.It will again ask for your permission.</div>
              <br />
              <div>Alternatively, if you do not wish to disclose your device location, you can manually type in your desired location address,and proceed along.</div>
              <div>
                <Button variant='contained' color='primary' onClick={() => props.onClose()}>
                  Okay, I Understand
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </Dialog>
    </div>
  );
}
