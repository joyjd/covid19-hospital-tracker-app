import React from "react";

import { HospitalZone } from "./HospitalZoneContainer/HospitalZone.component";

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
    //By default Show Kolkata zone- if nothing matches
    if (hospitalZoneTags.length == 0) {
      this.props.hospitalLocationKeyMap["Kolkata"].forEach((elem) => {
        tempHptlList.push(elem);
      });
      hospitalZoneTags.push("Kolkata");
    }

    this.setState({
      selectedHospitalList: tempHptlList,
      selectedHospitalZoneTags: hospitalZoneTags,
    });
  };

  render() {
    return <div>{this.state.selectedHospitalZoneTags.length != 0 && this.state.selectedHospitalList.length != 0 ? <HospitalZone selectedHospitalZoneTags={this.state.selectedHospitalZoneTags} selectedHospitalList={this.state.selectedHospitalList} hospitalLocationKeyMap={this.props.hospitalLocationKeyMap} /> : null}</div>;
  }
}
