import React from "react";
import { HospitalItem } from "./../HospitalItem/HospitalItem.component";
import { KeywordLabel } from "./../KeywordLabel/KeywordLabel.component";
import "./../HospitalZoneContainer/HospitalZone.style.scss";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import ResponsiveDialog from "../../../utils/Modals/Modals.component";
import { CommunicatorFetch, apiKey, p_idList } from "./../../Communicator/Communicator.component";
import hospitalDetailsData from "./../../../assets/hospitalDetailsData";
import ApiUrls from "../../../utils/ApiUrls.data";
import { HospitalModalDetailTemplate } from "./../../../utils/Modals/HospitalModalDetailTemplate.component";
import ExposureIcon from "@material-ui/icons/Exposure";
import SelectAllIcon from "@material-ui/icons/SelectAll";
import Button from "@material-ui/core/Button";
import { ExpandContract } from "./../../../utils/ExpandContract/ExpandContract.component";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Filteralert from "./../../../utils/Modals/Filteralert.component";
import FilterModalTmpl from "./../../../utils/Modals/FilterModalTemplate.component";

export class HospitalZone extends React.Component {
  tagAction = {
    add: "plus",
    remove: "cross",
  };
  modalContent = {
    body: "",
    headerTitle: "",
  };

  filterContent = {
    body: "",
    header: "",
  };
  sortOptions = "";

  finalResult = [];
  completeHospitalData = [];
  org_selectedHospital = [];
  constructor() {
    super();
    this.state = {
      selectedHospitalList: [],
      totalZones: [],
      selectedZones: [],
      description: "",
      openModal: false,
      title: "",
      cont_FilterHospitalZones: false,
      cont_SelectedHospitalZones: false,
      searchText: "",
      searchEngine: null,
      openFilteralert: false,
    };
    this.completeHospitalData = Object.assign({}, hospitalDetailsData);
  }

  componentDidMount() {
    console.log(this.props);
    this.setState({
      selectedHospitalList: Object.assign([], this.props.selectedHospitalList),
      selectedZones: Object.assign([], this.props.selectedHospitalZoneTags),
      totalZones: Object.assign([], Object.keys(this.props.hospitalLocationKeyMap)),
    });
    //this.org_selectedHospital = Object.assign([], this.props.selectedHospitalList);
    this.prepareSearchEngine();
  }

  componentDidUpdate() {
    //  console.log(this.state);
  }

  prepareSearchEngine = () => {
    let tempResult = [];

    Object.keys(this.props.hospitalLocationKeyMap).forEach((elem) => {
      this.props.hospitalLocationKeyMap[elem].forEach((el) => {
        //prepare entire list
        this.org_selectedHospital.push(el);

        //lookup in detailslist
        if (this.completeHospitalData[el["h_name"]]) {
          if (this.completeHospitalData[el["h_name"]]["name"] != el["h_name"]) {
            tempResult.push({
              [el["h_name"]]: [el["h_name"], this.completeHospitalData[el["h_name"]]["name"]],
            });
          } else {
            tempResult.push({
              [el["h_name"]]: [el["h_name"]],
            });
          }
        } else {
          tempResult.push({
            [el["h_name"]]: [el["h_name"]],
          });
        }
      });
    });
    this.setState({
      searchEngine: tempResult,
    });
    //console.log(tempResult);
  };

  getSearchResults = () => {
    let finalKeys = [];
    let finalResult = [];
    let res = this.state.searchEngine.filter((ob) => {
      return ob[Object.keys(ob)[0]].filter((e) => e.toLowerCase().includes(this.state.searchText.toLowerCase())).length != 0;
    });

    res.forEach((el) => finalKeys.push(Object.keys(el)[0]));
    finalKeys.forEach((hptl) => {
      finalResult.push(this.org_selectedHospital.filter((hosp) => hosp.h_name.includes(hptl))[0]);
    });
    finalResult = [...new Set(finalResult)];
    this.setState({
      selectedHospitalList: finalResult,
    });
  };

  handleAddRemoveFilter = (el, type) => {
    if (type == "plus") {
      if (this.props.hospitalLocationKeyMap[el]) {
        this.state.selectedZones.push(el);

        let tempSZ = this.state.selectedZones;
        let tempTZ = this.state.totalZones;
        this.setState({
          selectedHospitalList: Object.assign([], this.state.selectedHospitalList.concat(this.props.hospitalLocationKeyMap[el])),
          selectedZones: Object.assign([], tempSZ),
        });
      }
    } else {
      this.state.selectedZones.splice(
        this.state.selectedZones.findIndex((e) => e == el),
        1
      );

      let tempSZ = this.state.selectedZones;
      this.setState({
        selectedHospitalList: Object.assign(
          [],
          this.state.selectedHospitalList.filter((elm) => elm["h_zone"] !== el)
        ),
        selectedZones: Object.assign([], tempSZ),
      });
    }
  };
  handleOpenModal = () => {
    this.setState({ openModal: true });
  };

  handleCloseModal = () => {
    this.setState({ openModal: false });
    this.modalContent.headerTitle = "";
    this.modalContent.body = "";
  };

  handleCloseAlert = (el) => {
    this.setState({
      openFilteralert: false,
    });
    if (el) {
      this.sortData();
    }
  };

  handleOpenFilter = () => {
    this.filterContent.header = "You can sort hospitals based on :";
    this.filterContent.body = <FilterModalTmpl initialVal={this.sortOptions} handleRadioChange={(val) => this.handleSwitchChange(val)} />;
    this.setState({
      openFilteralert: true,
    });
  };
  handleSwitchChange = (val) => {
    this.sortOptions = val;
  };

  sortData = () => {
    let tempSortData = [];

    if (this.sortOptions == "isChecked_op_hospital") {
      tempSortData = this.state.selectedHospitalList.sort((a, b) => Number(a["h_dist"]) - Number(b["h_dist"]));
    } else {
      tempSortData = this.state.selectedHospitalList.sort((a, b) => b["c_bed"] - a["c_bed"]);
    }
    this.setState({
      selectedHospitalList: tempSortData,
    });
  };

  handleHospitalDetails = (h_name, h_zone, c_bed, h_dist) => {
    if (this.completeHospitalData[h_name]) {
      this.createHospitalDetailModayBody(this.completeHospitalData[h_name], c_bed, h_dist);
      this.handleOpenModal();
    } /* else if(){
           // For satellite cases
    }  */ else {
      let searchText = "" + h_name + "," + h_zone + ",West Bengal,India";
      let params = searchText + "&inputtype=textquery&fields=place_id";
      CommunicatorFetch(ApiUrls.getHospitalDetails, params)
        .then(
          (data) => {
            if (data["candidates"].length != 0) {
              let place_id = data["candidates"][0]["place_id"];
              let prms = place_id + "&fields=name,geometry,photos,rating,adr_address,business_status,formatted_address,formatted_phone_number,international_phone_number,opening_hours,website,price_level,rating,review,user_ratings_total";
              return CommunicatorFetch(ApiUrls.getHospitalCompleteDetails, prms);
            } else {
              return "";
            }
          },
          (error) => {
            //handle error scenerio for first call
          }
        )
        .then(
          (data) => {
            if (data != "") {
              //get the new data
              if (data != undefined) {
                this.completeHospitalData.push({
                  h_name: data["result"],
                });
                //Call function to form body
                this.createHospitalDetailModayBody(this.completeHospitalData[h_name], c_bed, h_dist);
                this.handleOpenModal();
              } else {
                this.createHospitalDetailModayBody(h_name, c_bed, h_dist);
                this.handleOpenModal();
              }
            } else {
              this.createHospitalDetailModayBody(h_name, c_bed, h_dist);
              this.handleOpenModal();
            }
          },
          (error) => {
            // handle error scenerio for second call
          }
        );
    }
  };

  checkStatus = (response) => {
    console.log(response);
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  };
  parseJSON = (response) => {
    return response.json();
  };

  createHospitalDetailModayBody = (data, c_bed, h_dist) => {
    let tempHtml;
    if (typeof data == "string") {
      tempHtml = <HospitalModalDetailTemplate c_bed={c_bed} h_dist={h_dist} />;
      this.modalContent.headerTitle = data;
    } else {
      tempHtml = <HospitalModalDetailTemplate data={data} c_bed={c_bed} h_dist={h_dist} />;
      this.modalContent.headerTitle = data["name"];
    }

    this.modalContent.body = tempHtml;
  };

  handleExpansionContraction = (domElem) => {
    let domEle = document.getElementById(domElem);

    if (domElem == "cont_FilterHospitalZones") {
      this.setState({
        cont_FilterHospitalZones: !this.state.cont_FilterHospitalZones,
      });
    } else {
      this.setState({
        cont_SelectedHospitalZones: !this.state.cont_SelectedHospitalZones,
      });
    }
    if (domEle.classList.contains("excerpt-hidden")) {
      domEle.classList.remove("excerpt-hidden");
    } else {
      domEle.classList.add("excerpt-hidden");
    }

    if (domEle.classList.contains("excerpt-visible")) {
      domEle.classList.remove("excerpt-visible");
    } else {
      domEle.classList.add("excerpt-visible");
    }
  };
  preparePostSearchSelectedZoneHospitalList = () => {
    let tempHptlList = [];
    let hospitalZoneTags = [];
    this.state.selectedZones.forEach((elem) => {
      if (this.props.hospitalLocationKeyMap[elem]) {
        this.props.hospitalLocationKeyMap[elem].forEach((el) => tempHptlList.push(el));
      }
    });

    this.setState({
      selectedHospitalList: tempHptlList,
    });
  };

  handleSearchEngine = (el) => {
    if (el.target.value.trim() != "") {
      this.setState({ searchText: el.target.value }, () => this.getSearchResults());
    } else {
      this.setState(
        {
          searchText: "",
        },
        () => this.preparePostSearchSelectedZoneHospitalList()
      );
    }
  };

  render() {
    const aval_Filters = this.state.totalZones.filter((el) => !this.state.selectedZones.includes(el));

    return (
      <div>
        <Card className='cardGeneric '>
          <CardContent>
            <div id='cont_FilterHospitalZones' className={aval_Filters.length < 3 ? "" : "excerpt-hidden"}>
              <div className='displayFlex'>
                <Typography color='textSecondary'>
                  <ExposureIcon />
                </Typography>
                <Typography color='textSecondary'>Filter Hospitals By Area/Zones({aval_Filters.length})</Typography>
              </div>
              <div className='availableHospitalZones'>
                {aval_Filters.map((elem, index) => (
                  <KeywordLabel key={index} item={elem} type={this.tagAction.add} onClick={(e, el) => this.handleAddRemoveFilter(e, el)}></KeywordLabel>
                ))}
              </div>
            </div>
            {aval_Filters.length < 3 ? null : (
              <div className='expandContractContainer'>
                <ExpandContract data={this.state.cont_FilterHospitalZones} parentId={"cont_FilterHospitalZones"} onClick={(el) => this.handleExpansionContraction(el)} />
              </div>
            )}
          </CardContent>
        </Card>
        <Card className='cardGeneric'>
          <CardContent>
            <div id='cont_SelectedHospitalZones' className={this.state.selectedZones.length > 5 ? "excerpt-visible" : ""}>
              <div className='displayFlex'>
                <Typography color='textSecondary'>
                  <SelectAllIcon />
                </Typography>
                <Typography color='textSecondary'>
                  <strong>Selected Hospital Zones({this.state.selectedZones.length})</strong>
                </Typography>
              </div>
              <div className='selectedH_ZonesContainer'>
                {this.state.selectedZones.map((el) => (
                  <KeywordLabel key={el} item={el} type={this.tagAction.remove} onClick={(e, el) => this.handleAddRemoveFilter(e, el)}></KeywordLabel>
                ))}
              </div>
            </div>
            {this.state.selectedZones.length > 4 ? (
              <div className='expandContractContainer'>
                <ExpandContract data={this.state.cont_SelectedHospitalZones} parentId={"cont_SelectedHospitalZones"} onClick={(el) => this.handleExpansionContraction(el)} />
              </div>
            ) : null}
          </CardContent>
        </Card>

        <Card className='cardGeneric' id='containerHospitalList'>
          <CardHeader
            avatar={
              <Avatar variant='square' aria-label='recipe' className='hospitalAvatar'>
                <LocalHospitalIcon color='secondary' />
              </Avatar>
            }
            action={
              <IconButton aria-label='settings' onClick={() => this.handleOpenFilter()}>
                <MoreVertIcon />
              </IconButton>
            }
            title={
              <strong>
                <span className='font_l'>Hospitals Found ({this.state.selectedHospitalList.length})*</span>
              </strong>
            }
            subheader={
              <Box fontStyle='italic' m={1} className='m_all_0'>
                {this.state.searchText == "" ? (
                  <div className='displayFlex'>
                    <div>*</div>
                    <div>listed as per selected hospital zones</div>
                  </div>
                ) : (
                  <div className='displayFlex'>
                    <div>*</div>
                    <div>listed as per selected hospital zones</div>
                  </div>
                )}
              </Box>
            }
          ></CardHeader>
          <div className='displayFlex'>
            <div className='searchIconHolder'>
              <SearchIcon />
            </div>
            <div className='searchContainer w_100'>
              <TextField id='outlined-textarea' className='w_100' label='Search Hospitals By Name' placeholder='Find any COVID19 hospital ..' multiline variant='filled' type='search' onChange={(el) => this.handleSearchEngine(el)} />
            </div>
          </div>
          <CardMedia>
            <div>
              <HospitalItem selectedHospitalList={this.state.selectedHospitalList} onClick={(h_name, h_zone, c_bed, h_dist) => this.handleHospitalDetails(h_name, h_zone, c_bed, h_dist)} />
            </div>
            <div className='disclaimerHospital'>
              <div>* Data displayed is as per WB Government website</div>
              <div>* Distances shown are tentative and may not be exactly accurate</div>
            </div>
          </CardMedia>
        </Card>

        <ResponsiveDialog open={this.state.openModal} onClose={this.handleCloseModal} headerTitle={this.modalContent.headerTitle} body={this.modalContent.body} />
        <Filteralert open={this.state.openFilteralert} onClose={(el) => this.handleCloseAlert(el)} header={this.filterContent.header} body={this.filterContent.body} />
      </div>
    );
  }
}

export default HospitalZone;
