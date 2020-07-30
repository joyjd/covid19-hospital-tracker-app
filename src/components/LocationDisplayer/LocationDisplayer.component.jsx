import React from "react";
import "./../../components/LocationDisplayer/LocationDisplayer.styles.scss";
import GoogleMaps from "./../google-maps/google-maps.component";
import Paper from "@material-ui/core/Paper";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { StaticTagDisplayer } from "../staticTagDisplayer/StaticTagDisplayer.component";

const exclusiveKeywords = ["postal_code", "country"];

export class LocationDisplayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationTags: [],
      scrollTop: 0,
    };
    this.myRef = React.createRef();
    this.myRef2 = React.createRef();
  }
  componentDidMount() {
    this.prepareLocationTags();
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
    const scrollTop = this.myRef.current.scrollTop;
    const offsetTop = this.myRef.current.offsetTop;
    let leftPosition = scrollY - offsetTop;
    console.log(leftPosition);
    this.setState({
      scrollTop: scrollTop,
    });
    this.myRef2.current.style.left = leftPosition + 200 + "px";
  };
  prepareLocationTags = () => {
    let finalTags = this.props.addressDetails.addressComponents.filter((dataElem) => {
      return !dataElem.types.some((el) => exclusiveKeywords.includes(el));
    });

    this.setState({
      locationTags: finalTags.map((el) => el["long_name"]).filter((el) => el !== "West Bengal"),
    });
  };
  render() {
    const { scrollTop } = this.state;

    return (
      <div>
        <div className='locationCardContainer'>
          <Paper elevation={3} className='transparentBorder'>
            <div className='locationTitleContainer'>
              <div className='locationIconholder'>
                <LocationOnIcon fontSize='large' color='primary'></LocationOnIcon>
              </div>
              Your current location :
            </div>
            <div>
              <div className='AddressContainer'>
                <div className='addressHolder'>
                  <address>{this.props.addressDetails.formattedAddress}</address>
                </div>
              </div>
            </div>

            <div className='mapcontainer'>
              <Paper variant='outlined' className='shadowCustom'>
                <div className='mapcontainer'>{this.props.addressDetails.locationCoordinates_lat != null ? <GoogleMaps currentLat={this.props.addressDetails.locationCoordinates_lat} currentLong={this.props.addressDetails.locationCoordinates_long}></GoogleMaps> : null}</div>
              </Paper>
            </div>
            <div>
              <StaticTagDisplayer locationTags={this.state.locationTags}></StaticTagDisplayer>
            </div>
          </Paper>
        </div>
        <div className='amb' ref={this.myRef} onScroll={this.handleScroll}>
          <div className='bg-move' ref={this.myRef2}></div>
        </div>
      </div>
    );
  }
}
