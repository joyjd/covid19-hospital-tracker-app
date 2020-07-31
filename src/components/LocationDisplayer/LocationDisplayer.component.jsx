import React from "react";
import "./../../components/LocationDisplayer/LocationDisplayer.styles.scss";
import GoogleMaps from "./../google-maps/google-maps.component";
import Paper from "@material-ui/core/Paper";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { StaticTagDisplayer } from "../staticTagDisplayer/StaticTagDisplayer.component";
import { CommunicatorFetch } from "./../Communicator/Communicator.component";
import APiUrls from "./../../utils/ApiUrls.data";

const exclusiveKeywords = ["postal_code", "country"];

export class LocationDisplayer extends React.Component {
  ambulanceTravelNode = null;
  constructor(props) {
    super(props);
    this.state = {
      locationTags: [],
      infected: 0,
      recovered: 0,
      deceased: 0,
    };
    this.myRef = React.createRef();
    this.myRef2 = React.createRef();
  }
  componentDidMount() {
    this.prepareLocationTags();
    window.addEventListener("scroll", this.handleScroll);
    this.getCoronaDetails();
  }
  getCoronaDetails = () => {
    CommunicatorFetch(APiUrls.getCoronaUpdate, "").then(
      (data) => {
        console.log(data);
        let totalData = data["West Bengal"]["districtData"];
        let infected = 0;
        let recovered = 0;
        let dead = 0;
        Object.keys(totalData).forEach((dst_name) => {
          infected += totalData[dst_name]["confirmed"];
          recovered += totalData[dst_name]["recovered"];
          dead += totalData[dst_name]["deceased"];
        });
        this.setState({
          infected: infected,
          recovered: recovered,
          deceased: dead,
        });
      },
      (error) => {}
    );
  };
  handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollTop = this.myRef.current.scrollTop;
    const offsetTop = this.myRef.current.offsetTop;
    let leftPosition = scrollY - offsetTop;

    /* this.setState({
      scrollTop: scrollTop,
    }); */
    //console.log(leftPosition);
    if (leftPosition < -75) {
      this.myRef2.current.style.left = leftPosition + 100 + "px";
    }
    /* if (leftPosition > -70) {
      this.myRef2.current.style.left = leftPosition + "px";
    } */
    /* 
    if (leftPosition > 50) {
      // this.myRef2.current.style.display = "none";
      this.myRef2.current.style.width = "0";
    } else {
      // this.myRef2.current.style.display = "block";
      this.myRef2.current.style.width = "-webkit-fill-available";
    } */
    if (this.ambulanceTravelNode != null && this.ambulanceTravelNode > leftPosition) {
      this.myRef2.current.classList.add("displayAmb2");
      this.myRef2.current.classList.remove("displayAmb1");
    } else if (this.ambulanceTravelNode != null && leftPosition < 0) {
      this.myRef2.current.classList.remove("displayAmb2");
      this.myRef2.current.classList.add("displayAmb1");
    }
    this.ambulanceTravelNode = leftPosition;
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
              <div className='locationDesc'>
                <div>
                  <PersonPinIcon />
                </div>
                <div> Your current location :</div>
              </div>
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
          <div className='bg-move displayAmb1' ref={this.myRef2}>
            <div className='ambLight light--flash'></div>
            <div className='coronaDataHolderTitle '>COVID19 Updates(WB)</div>
            <div className='dataHolder'>
              <div>
                <div className='dataDiv'>Infected</div>
                <div>{this.state.infected}</div>
              </div>
              <div>
                <div className='dataDiv'>Recovered</div>
                <div>{this.state.recovered}</div>
              </div>
              <div>
                <div className='dataDiv'>Death</div>
                <div>{this.state.deceased}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
