import React from "react";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import "./../Modals/FilterModalTemplate.style.scss";

export default function FilterModalTmpl(props) {
  const [value, setValue] = React.useState(props.initialVal == "" ? "isChecked_op_bed" : props.initialVal);

  const handleChange = (event) => {
    setValue(event.target.value);
    props.handleRadioChange(event.target.value);
  };
  return (
    <div className='filterContainer'>
      <RadioGroup aria-label='gender' name='gender1' value={value} onChange={handleChange}>
        <FormControlLabel value='isChecked_op_bed' control={<Radio color='primary' />} label='More vacancy of COVID beds' />
        <FormControlLabel value='isChecked_op_hospital' control={<Radio color='primary' />} label='Hospitals nearer to your current location' />
      </RadioGroup>
    </div>
  );
}
