import React from "react";
import "./../FilterAreaTags/FilterAreaTags.style.scss";
import { render } from "@testing-library/react";
import Dialog from "@material-ui/core/Dialog";
import { Header } from "./../../Header/Header.component";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

export default class FilterTags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTags: [],
      leftTags: [],
    };
  }

  componentDidMount() {
    this.setState({
      selectedTags: this.props.selectedList,
      leftTags: this.props.totalList,
    });
  }

  handleCancel = () => {
    this.setState(
      {
        selectedTags: Object.assign([], this.props.selectedList),
        leftTags: Object.assign([], this.props.totalList),
      },
      () => this.props.onClose("", "cancel")
    );
  };

  handleFilterChange = (type, el) => {
    if (type == "del") {
      let temp = this.state.selectedTags;
      temp.splice(
        temp.findIndex((e) => e == el),
        1
      );

      this.setState({
        selectedTags: temp,
        leftTags: this.state.leftTags.concat(el),
      });
    } else {
      let temp = this.state.leftTags;
      temp.splice(
        temp.findIndex((e) => e == el),
        1
      );
      this.setState({
        selectedTags: this.state.selectedTags.concat(el),
        leftTags: temp,
      });
    }
  };
  handleDelete = (type, el) => this.handleFilterChange(type, el);

  render() {
    return (
      <Dialog fullScreen open={this.props.open} onClose={this.props.onclose} aria-labelledby='Select Hospital Zones' aria-describedby='Option to select Hospital Area Tags'>
        <Header />
        <div className='filterTagsHeader'>Select Areas/ Zones</div>
        <div className='filterTagsBody'>
          <div>You can select areas/zones to view COVID19 treatment providing hospitals of that area.</div>
          <div className='dividerHolder'>
            <Divider />
          </div>
          <div className='displayFlex headerTagLineDesc'>
            <div>
              <LocalOfferIcon fontSize='small' />
            </div>
            <div>
              Selected {this.state.selectedTags.length} out of {this.state.selectedTags.length + this.state.leftTags.length} Areas/Zones.
            </div>
          </div>
          <div className='chipsHolder'>
            {this.state.selectedTags.sort().map((el, index) => {
              return (
                <div key={index} className='chipsKey'>
                  <Chip key={index} size='small' label={el} color='primary' onClick={() => this.handleFilterChange("del", el)} onDelete={() => this.handleDelete("del", el)} deleteIcon={<DoneIcon />} />
                </div>
              );
            })}
            {this.state.leftTags.sort().map((el, index) => {
              return (
                <div key={index} className='chipsKey'>
                  <Chip key={index} size='small' label={el} color='default' onClick={() => this.handleFilterChange("add", el)} onDelete={() => this.handleDelete("add", el)} deleteIcon={<AddIcon />} />
                </div>
              );
            })}
          </div>
          <div className='dividerHolder displayEqual'>
            <Button variant='contained' color='primary' onClick={() => this.handleCancel()}>
              Cancel
            </Button>
            <Button variant='contained' color='primary' onClick={() => this.props.onClose(this.state.selectedTags, "")}>
              Apply Selection
            </Button>
          </div>
        </div>
      </Dialog>
    );
  }
}
