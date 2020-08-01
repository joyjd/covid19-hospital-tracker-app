import React from "react";
/* import logo from "./logo.svg";
 */
import "./App.scss";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import { LocationDisplayer } from "./components/LocationDisplayer/LocationDisplayer.component";
import { HospitalTracker } from "./components/HospitalTracker/HospitalTracker.component";
import { CommunicatorFetch, dummyData } from "./components/Communicator/Communicator.component";
import APiUrls from "./utils/ApiUrls.data";
/* import hospitalData from "./assets/hospitalData";
import hospitalDetailsData from "./assets/hospitalDetailsData"; */
import { Header } from "./components/Header/Header.component";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import LocationOptionInput from "./components/WelcomeModals/LocationInputOptionModals/LocationOptionInput.component";
import WelcomeModal from "./components/WelcomeModals/WelcomeModal/WelcomeModal.component";
import DisplayLocationModal from "./components/WelcomeModals/DeviceLocationModal/DisplayLocationModal.component";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role='presentation' className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};
class App extends React.Component {
  locationCoordinates = {
    lat: null,
    long: null,
  };
  hospitalList = [];
  hospitalLocationKeyMap = {};

  constructor(props) {
    super(props);
    this.state = {
      locationCoordinates_lat: null,
      locationCoordinates_long: null,

      formattedAddress: "",
      compoundAddress: "",
      addressComponents: [],

      hospitalDataPrep: false,

      openWelcomeAlert: false,
      openBackDrop: false,
      openLocationAlert: false,
      openLocationOptionAlert: false,
    };
  }

  componentDidMount() {
    //Bootstrap welcome pop-up
    this.setState(
      {
        openWelcomeAlert: true,
      },
      () => this.prepareHospitalData()
    );
  }

  prepareHospitalData = () => {
    CommunicatorFetch(APiUrls.getHospitalCodes, "")
      .then((data) => {
        let tempArr = data.filter((elem) => Object.keys(elem).length >= 4).filter((el) => el["vacant"] != 0 && typeof el["vacant"] !== "string");
        this.hospitalList = Object.assign([], tempArr);
      })
      .then(() => CommunicatorFetch(APiUrls.getHospitalDetails, ""))
      .then((data) => {
        this.arrangeHospitalKeyMap(data);
      });
  };
  getLocationTrack = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        //watchPosition(
        (pos) => {
          if (pos.coords.latitude != this.state.locationCoordinates_lat && pos.coords.longitude != this.state.locationCoordinates_long) {
            console.log(pos.coords.latitude);
            this.getFormattedAddress(pos.coords.latitude, pos.coords.longitude);
          }
        },
        (error) => {
          //ifgeolocation failed
          if (error.message == "Timeout expired") {
            this.handleBackDropClose();
            //temporary for DEV
            this.getFormattedAddress(22.5815353, 88.466984);
          } else {
            //show pop up if denied
            this.handleBackDropClose();
            this.setState({
              openLocationAlert: true,
            });
          }
        },
        { maximumAge: 60000, timeout: 5000, enableHighAccuracy: true }
      );
    }
  };

  arrangeHospitalKeyMap(data) {
    //console.log(this.state.hospitalList);
    let hospitalDetailsData = data;
    let tempDup = {};
    let tempMap = {};
    for (let i = 0, j = this.hospitalList.length - 1; i <= this.hospitalList.length / 2, j >= this.hospitalList.length / 2; i++, j--) {
      if (tempMap[this.hospitalList[i]["district"]]) {
        //if(tempMap[this.hospitalList[i]["district"]].filter( (row)=> row["name"] ==this.hospitalList[i]["name"] ).length == 0){}
        /* console.log(tempMap[this.hospitalList[i]["district"]].filter((row) => row["name"] == this.hospitalList[i]["name"]).length == 0);
        console.log(this.hospitalList[i]["name"]);
        tempDup[this.hospitalList[i]["name"]] ? (tempDup[this.hospitalList[i]["name"]] += 1) : (tempDup[this.hospitalList[i]["name"]] = 1);
        if (tempMap[this.hospitalList[j]["district"]]) {
          console.log(tempMap[this.hospitalList[j]["district"]].filter((row) => row["name"] == this.hospitalList[i]["name"]).length == 0);
          console.log(this.hospitalList[i]["name"]);
          tempDup[this.hospitalList[i]["name"]] ? (tempDup[this.hospitalList[i]["name"]] += 1) : (tempDup[this.hospitalList[i]["name"]] = 1);
        } */
        tempMap[this.hospitalList[i]["district"]].push({
          h_name: this.hospitalList[i]["name"],
          c_bed: this.hospitalList[i]["vacant"],
          h_zone: this.hospitalList[i]["district"],
          h_loc: hospitalDetailsData[this.hospitalList[i]["name"]] ? (hospitalDetailsData[this.hospitalList[i]["name"]]["geometry"] ? hospitalDetailsData[this.hospitalList[i]["name"]]["geometry"]["location"] : "") : "",
          h_dist: "",
        });
      } else {
        tempMap[this.hospitalList[i]["district"]] = [
          {
            h_name: this.hospitalList[i]["name"],
            c_bed: this.hospitalList[i]["vacant"],
            h_zone: this.hospitalList[i]["district"],
            h_loc: hospitalDetailsData[this.hospitalList[i]["name"]] ? (hospitalDetailsData[this.hospitalList[i]["name"]]["geometry"] ? hospitalDetailsData[this.hospitalList[i]["name"]]["geometry"]["location"] : "") : "",
            h_dist: "",
          },
        ];
      }

      if (tempMap[this.hospitalList[j]["district"]]) {
        /* console.log(tempMap[this.hospitalList[j]["district"]].filter((row) => row["name"] == this.hospitalList[j]["name"]).length == 0);
        console.log(this.hospitalList[j]["name"]);
        tempDup[this.hospitalList[j]["name"]] ? (tempDup[this.hospitalList[j]["name"]] += 1) : (tempDup[this.hospitalList[j]["name"]] = 1);
        if (tempMap[this.hospitalList[i]["district"]]) {
          console.log(tempMap[this.hospitalList[i]["district"]].filter((row) => row["name"] == this.hospitalList[j]["name"]).length == 0);
          console.log(this.hospitalList[j]["name"]);
          tempDup[this.hospitalList[j]["name"]] ? (tempDup[this.hospitalList[j]["name"]] += 1) : (tempDup[this.hospitalList[j]["name"]] = 1);
        } */
        tempMap[this.hospitalList[j]["district"]].push({
          h_name: this.hospitalList[j]["name"],
          c_bed: this.hospitalList[j]["vacant"],
          h_zone: this.hospitalList[j]["district"],
          h_loc: hospitalDetailsData[this.hospitalList[j]["name"]] ? (hospitalDetailsData[this.hospitalList[j]["name"]]["geometry"] ? hospitalDetailsData[this.hospitalList[j]["name"]]["geometry"]["location"] : "") : "",
          h_dist: "",
        });
      } else {
        tempMap[this.hospitalList[j]["district"]] = [
          {
            h_name: this.hospitalList[j]["name"],
            c_bed: this.hospitalList[j]["vacant"],
            h_zone: this.hospitalList[j]["district"],
            h_loc: hospitalDetailsData[this.hospitalList[j]["name"]] ? (hospitalDetailsData[this.hospitalList[j]["name"]]["geometry"] ? hospitalDetailsData[this.hospitalList[j]["name"]]["geometry"]["location"] : "") : "",
            h_dist: "",
          },
        ];
      }
    }
    //Fix for 24-parganas
    tempMap["North 24 Parganas"] = Object.assign([], tempMap["N-24 Pgs"].concat(tempMap["North 24 Pgs"]));
    delete tempMap["N-24 Pgs"];
    delete tempMap["North 24 Pgs"];
    tempMap["North 24 Parganas"].forEach((elm) => (elm["h_zone"] = "North 24 Parganas"));

    //Remove double entries
    Object.keys(tempMap).forEach((districtName) => {
      let tempArr = [];
      tempMap[districtName].forEach((hosp_obj) => {});
    });

    //this.setState({ hospitalLocationKeyMap: tempMap }, () => console.log(this.state.hospitalLocationKeyMap));
    this.hospitalLocationKeyMap = tempMap;

    // console.log(tempDup);
    //console.log(Object.keys(tempDup).length);
  }
  searchGoogleForUserDetails = (el) => {
    let searchText = "" + el.locality + "," + el.district + "," + el.pin + ",West Bengal,India";
    let params = searchText + "&inputtype=textquery&fields=formatted_address,geometry";
    CommunicatorFetch(APiUrls.getPlaceDetails, params).then(
      (data) => {
        if (data["candidates"].length != 0) {
          localStorage.setItem("CV19Tracker_lat", data["candidates"][0].geometry.location.lat);
          localStorage.setItem("CV19Tracker_long", data["candidates"][0].geometry.location.lng);
          //make custom address componnets
          let address_components = [];
          let tempAddr = data["candidates"][0]["formatted_address"].split(",");
          tempAddr.pop();

          tempAddr = tempAddr.forEach((elem) => {
            address_components.push({
              long_name: elem.trim(),
              short_name: elem.trim(),
              types: ["political", "sublocality", "sublocality_level_1"],
            });
          });

          this.setState(
            {
              formattedAddress: data["candidates"][0]["formatted_address"],
              compoundAddress: "",
              addressComponents: Object.assign([], address_components),
              locationCoordinates_lat: data["candidates"][0].geometry.location.lat,
              locationCoordinates_long: data["candidates"][0].geometry.location.lng,
            },
            () => this.handleBackDropClose()
          );
        } else {
          //show pop up for google denial

          //custom create address_format
          let address_components = [];
          let tempAddr = el.locality.split(" ");
          tempAddr.push(el.district);
          tempAddr = tempAddr.forEach((elem) => {
            address_components.push({
              long_name: elem.trim(),
              short_name: elem.trim(),
              types: ["political", "sublocality", "sublocality_level_1"],
            });
          });
          let tmmpAddr = el.locality + "," + el.district + ", pin -" + el.pin;
          this.setState(
            {
              formattedAddress: tmmpAddr,
              compoundAddress: "",
              addressComponents: Object.assign([], address_components),
              locationCoordinates_lat: 0,
              locationCoordinates_long: 0,
            },
            () => this.handleBackDropClose()
          );
        }
      },
      (error) => {
        //show pop up for google denial

        //custom create address_format
        let address_components = [];
        let tempAddr = el.locality.split(" ");
        tempAddr.push(el.district);
        tempAddr = tempAddr.forEach((elem) => {
          address_components.push({
            long_name: elem.trim(),
            short_name: elem.trim(),
            types: ["political", "sublocality", "sublocality_level_1"],
          });
        });

        let tmmpAddr = el.locality + "," + el.district + ", pin -" + el.pin;
        this.setState(
          {
            formattedAddress: tmmpAddr,
            compoundAddress: "",
            addressComponents: Object.assign([], address_components),
            locationCoordinates_lat: 0,
            locationCoordinates_long: 0,
          },
          () => this.handleBackDropClose()
        );
      }
    );
  };

  getFormattedAddress = (lat, long) => {
    if (localStorage.getItem("CV19Tracker_lat") && localStorage.getItem("CV19Tracker_long") && localStorage.getItem("CV19Tracker_detail") && Number(localStorage.getItem("CV19Tracker_lat")) == lat && Number(localStorage.getItem("CV19Tracker_long")) == long) {
      let data = JSON.parse(localStorage.getItem("CV19Tracker_detail"));
      this.setState(
        {
          formattedAddress: data.formatted_address,
          compoundAddress: "",
          addressComponents: Object.assign([], data.address_components),
          locationCoordinates_lat: data.geometry.location.lat,
          locationCoordinates_long: data.geometry.location.lng,
        },
        () => this.handleBackDropClose()
      );
    } else {
      CommunicatorFetch(APiUrls.getUserCurrentLocation, lat + "," + long).then(
        (data) => {
          // this.handleBackDropClose();
          if (data.results.length != 0) {
            localStorage.setItem("CV19Tracker_lat", data.results[0].geometry.location.lat);
            localStorage.setItem("CV19Tracker_long", data.results[0].geometry.location.lng);
            localStorage.setItem("CV19Tracker_detail", JSON.stringify(data.results[0]));
            this.setState(
              {
                formattedAddress: data.results[0].formatted_address,
                compoundAddress: data.plus_code.compound_code,
                addressComponents: Object.assign([], data.results[0].address_components),
                locationCoordinates_lat: data.results[0].geometry.location.lat,
                locationCoordinates_long: data.results[0].geometry.location.lng,
              },
              () => this.handleBackDropClose()
            );
          } else {
            // Google denied Map, hence need to show proper error messages

            //current implementation for DEV purposes
            localStorage.setItem("CV19Tracker_lat", dummyData.results[0].geometry.location.lat);
            localStorage.setItem("CV19Tracker_long", dummyData.results[0].geometry.location.lng);
            localStorage.setItem("CV19Tracker_detail", JSON.stringify(dummyData.results[0]));
            this.setState(
              {
                formattedAddress: dummyData.results[0].formatted_address,
                compoundAddress: dummyData.plus_code.compound_code,
                addressComponents: Object.assign([], dummyData.results[0].address_components),
                locationCoordinates_lat: dummyData.results[0].geometry.location.lat,
                locationCoordinates_long: dummyData.results[0].geometry.location.lng,
              },
              () => this.handleBackDropClose()
            );
          }
        },
        (error) => {
          // Google Web api failed, hence need to show proper error messages
          //current implementation for DEV purposes

          this.setState(
            {
              formattedAddress: dummyData.results[0].formatted_address,
              compoundAddress: dummyData.plus_code.compound_code,
              addressComponents: Object.assign([], dummyData.results[0].address_components),
              locationCoordinates_lat: lat,
              locationCoordinates_long: long,
            },
            () => this.handleBackDropClose()
          );
        }
      );
    }
  };

  handleCloseWelcomeAlert = (el) => {
    this.setState(
      {
        openWelcomeAlert: false,
        openBackDrop: true,
      },

      () => this.getLocationTrack()
    );
  };

  handleCloseLocationAlert = (el) => {
    this.setState(
      {
        openLocationAlert: false,
      },
      () =>
        this.setState({
          openLocationOptionAlert: true,
        })
    );
  };

  handleCloseLocationOptionAlert = (el) => {
    // console.log(el);
    this.setState(
      {
        openLocationOptionAlert: false,
        openBackDrop: true,
      },
      () => this.searchGoogleForUserDetails(el)
    );
  };

  handleBackDropClose = () => {
    this.setState({
      openBackDrop: false,
    });
  };

  render() {
    console.log("rendered");
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Container maxWidth='md'>
          <Typography component='div' className='App'>
            {this.state.locationCoordinates_lat != null && this.state.addressComponents.length !== 0 ? <LocationDisplayer addressDetails={this.state}></LocationDisplayer> : "Location display null"}
            {this.state.addressComponents.length !== 0 ? <HospitalTracker arrayData={this.state.addressComponents} hospitalLocationKeyMap={this.hospitalLocationKeyMap}></HospitalTracker> : ""}
          </Typography>
          <WelcomeModal open={this.state.openWelcomeAlert} onClose={(el) => this.handleCloseWelcomeAlert(el)} />
          <DisplayLocationModal open={this.state.openLocationAlert} onClose={(el) => this.handleCloseLocationAlert(el)} />
          <LocationOptionInput open={this.state.openLocationOptionAlert} onClose={(el) => this.handleCloseLocationOptionAlert(el)} />
        </Container>
        <Backdrop open={this.state.openBackDrop} style={{ backgroundColor: "#183259" }}>
          <div className='loadTrackerWelcome'>
            <div className='loaderContainer'>
              <CircularProgress />
            </div>
            <div className='loaderTextContainer'>Please wait while we trace your current location ..</div>
          </div>
        </Backdrop>
        <ScrollTop>
          <Fab color='default' size='small' aria-label='scroll back to top' className='o_9'>
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </React.Fragment>
    );
  }
}

export default App;
