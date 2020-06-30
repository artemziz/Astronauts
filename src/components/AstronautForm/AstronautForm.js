import React, { useState } from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import {addAstronaut} from '../../redux/actions';
import './AstronautForm.css';

function AstronautForm({addAstronaut}){

    const [date, setDate] = useState("2020-06-29");
    const [isMultiple,setIsMultiple] = useState(false);
    const[name,setName] = useState('');
    const[days,setDays] = useState(0);
    const[mission,SetMission] = useState('');
    const handleNameChange = (event) => {
        if(!event.target.value){
          event.target.setAttribute('aria-invalid',true);
          
        }
        setName(event.target.value);
    };
    const handleDaysChange = (event) => {
      console.log(event.target.value);
      
        setDays(event.target.value);
    };
    const handleMissionChange = (event) => {
      console.log(event.target.value);
      
        SetMission(event.target.value);
    };
    const handleDateChange = (event) => {
      console.log(event.target.value);
      
        setDate(event.target.value);
    };
    const handleIsMultipleChange = (event) =>{
      setIsMultiple(!isMultiple);
    }
    const handleSubmit = (event) =>{
      event.preventDefault();
      if(!name || !days ||mission){
        return
      }
      addAstronaut({
        name,
        date:Date.parse(date)/1000,
        days:+days,
        mission,
        isMultiple
      })
    }
    return(
        
        <form noValidate autoComplete="off" className="AstronautForm">
        <div className="makeStyles-title-3 MuiTypography-h6">Add new Astronaut</div>
        <div className='AstronautForm-input'>
          <TextField required name="name" onChange={handleNameChange} value={name}  label="Name" />
        </div>
        <div className='AstronautForm-input'>
          <TextField
              
              required
              name="date"
              id="date"
              type="date"
              label="Date"
              value={date}
              onChange={handleDateChange}
          />
        </div>
        <div className='AstronautForm-input'>
          <TextField
            onChange={handleDaysChange}
            required
            value={days}
            name="days"
            id="standard-number"
            label="Days"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className='AstronautForm-input'>
          <TextField onChange={handleMissionChange} required name='mission' value={mission}  label="Mission" />
        </div>
        <div className='AstronautForm-input'>
          <FormControlLabel
          control={
            <Checkbox
              checked={isMultiple}
              onChange={handleIsMultipleChange}
              name="isMultiple"
              color="primary"
            />
          }
          label="IsMultiple"
        />
        </div>
        <div>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Add
          </Button>
        </div>
        
        </form>
      
    )
}

const mapDispatchToProps ={
  addAstronaut
}

export default connect(null,mapDispatchToProps)(AstronautForm)