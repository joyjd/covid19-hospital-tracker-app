import React from "react";
import { LocationKeyword } from "./LocationKeywordContainer/LocationKeyword.component";
import { HospitalZone } from "./HospitalZoneContainer/HospitalZone.component";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ExploreIcon from "@material-ui/icons/Explore";
const exclusiveKeywords = ["postal_code", "country"];

export class HospitalTracker extends React.Component {
  constructor() {
    super();
    this.state = {
      locationTags: [],
      selectedHospitalList: [],
      selectedHospitalZoneTags: [],
    };
  }

  componentDidMount() {
    this.prepareLocationTags();
  }

  prepareLocationTags = () => {
    let finalTags = this.props.arrayData.filter((dataElem) => {
      return !dataElem.types.some((el) => exclusiveKeywords.includes(el));
    });

    this.setState(
      {
        locationTags: finalTags.map((el) => el["long_name"]).filter((el) => el !== "West Bengal"),
      },
      () => this.prepareSelectedZoneHospitalList()
    );
  };

  prepareSelectedZoneHospitalList = () => {
    let tempHptlList = [];
    let hospitalZoneTags = [];
    this.state.locationTags.forEach((elem) => {
      if (this.props.hospitalLocationKeyMap[elem]) {
        this.props.hospitalLocationKeyMap[elem].forEach((el) => tempHptlList.push(el));
        hospitalZoneTags.push(elem);
      }
    });

    this.setState({
      selectedHospitalList: tempHptlList,
      selectedHospitalZoneTags: hospitalZoneTags,
    });
  };

  render() {
    return (
      <div>
        <Card className='cardGeneric'>{/* <CardContent>
            <div className='displayFlex'>
              <Typography color='textSecondary'>
                <ExploreIcon />
              </Typography>
              <Typography color='textSecondary'>Area/Zones based on your current location</Typography>
            </div>
            <div>
              <LocationKeyword locationTags={this.state.locationTags} />
            </div>
          </CardContent> */}</Card>
        {this.state.selectedHospitalZoneTags.length != 0 && this.state.selectedHospitalList.length != 0 ? <HospitalZone selectedHospitalZoneTags={this.state.selectedHospitalZoneTags} selectedHospitalList={this.state.selectedHospitalList} hospitalLocationKeyMap={this.props.hospitalLocationKeyMap} /> : null}
      </div>
    );
  }
}
