import React from "react";
import "./../../components/LocationDisplayer/LocationDisplayer.styles.scss";
import GoogleMaps from "./../google-maps/google-maps.component";
import Paper from "@material-ui/core/Paper";
import PersonPinIcon from "@material-ui/icons/PersonPin";

export const LocationDisplayer = (props) => (
  <div>
    <Paper elevation={3}>
      <div className='locationContainer'>
        <div className='headerContainer'>
          <PersonPinIcon color='primary' />
          <h4 className='CustomHeader'>Your Current Location :</h4>
        </div>

        <div className='AddressContainer'> {props.addressDetails.formattedAddress}</div>
      </div>

      <div className='mapcontainer'>{props.addressDetails.locationCoordinates_lat != null ? <GoogleMaps currentLat={props.addressDetails.locationCoordinates_lat} currentLong={props.addressDetails.locationCoordinates_long}></GoogleMaps> : null}</div>
    </Paper>
  </div>
);
