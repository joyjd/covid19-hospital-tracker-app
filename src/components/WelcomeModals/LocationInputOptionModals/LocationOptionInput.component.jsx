import React from "react";
import "./../DeviceLocationModal/DisplayLocationModal.component";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { Header } from "./../../Header/Header.component";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function LocationOptionInput(props) {
  return (
    <Dialog fullScreen open={props.open} TransitionComponent={Transition} onClose={props.handleAlertClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
      <Header />
      <Container>
        <div className=''>
          <div>
            You can opt to provide permisiion for location acces by:
            <br />
            Select "Manage" from browser Settings -- Remove "www.aaa.com" from debied-permission list.
            <br />
            Once you do that, either you can refresh your browser or just click the below opttion.
          </div>
          <div className='displayflex'>
            <div>
              <Divider />
            </div>
            <div>OR</div>
            <div>
              <Divider />
            </div>
          </div>
          <div>
            <TextField id='standard-multiline-static' label='Address' multiline rows={4} />
            <TextField id='standard-basic' label='District' />
            <TextField id='standard-basic' type='number' label='Pin Code' />
            <TextField
              id='standard-read-only-input'
              label='State'
              defaultValue='West Bengal'
              InputProps={{
                readOnly: true,
              }}
            />
            <Button variant='contained' color='primary'>
              Submit Location Details
            </Button>
          </div>
        </div>
      </Container>
    </Dialog>
  );
}
