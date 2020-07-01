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
    const[isErrorName,setIsErrorName] = useState(false);
    const[days,setDays] = useState(0);
    const[isErrorDays,setIsErrorDays] = useState(false);
    const[mission,SetMission] = useState('');
    const[isErrorMission,setIsErrorMission] = useState(false);
    const handleNameChange = (event) => {
        setName(event.target.value);
        if(!event.target.value){
          setIsErrorName(true);
        }else{
          setIsErrorName(false);
        }
    };
    const handleDaysChange = (event) => {

        setDays(event.target.value);
        
        if(!event.target.value || event.target.value<=0 || event.target.value[0]==='0' || event.target.value.includes('e')){
          setIsErrorDays(true);
        }else{
          setIsErrorDays(false);
        }
    };
    const handleMissionChange = (event) => {
        SetMission(event.target.value);
        if(!event.target.value){
          setIsErrorMission(true);
        }else{
          setIsErrorMission(false);
        }

    };
    const handleDateChange = (event) => {
        setDate(event.target.value);
    };
    const handleIsMultipleChange = (event) =>{
      setIsMultiple(!isMultiple);
    }
    const handleSubmit = (event) =>{
      event.preventDefault();
      if(isErrorName || isErrorDays || isErrorMission){
        return 
      }
      addAstronaut({
        name,
        date:Date.parse(date)/1000,
        days:+days,
        mission,
        isMultiple
      })
      setName('');
      setDate('2020-06-29');
      setDays(0);
      SetMission('');
    }
    
    return(
        
        <form noValidate autoComplete="off" className="AstronautForm">
        <div className="makeStyles-title-3 MuiTypography-h6">Add new Astronaut</div>
        <div className='AstronautForm-input'>
        {isErrorName ? (
          <TextField error helperText="Incorrect entry." required name="name" onChange={handleNameChange} value={name}  label="Name" />
        ):(
          <TextField required name="name" onChange={handleNameChange} value={name}  label="Name" />
        )}
          
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
        {isErrorDays ? (
          <TextField
            error helperText="Incorrect entry."
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
        ):(
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
        )}
          
        </div>
        <div className='AstronautForm-input'>
        {isErrorMission ? (
          <TextField error helperText="Incorrect entry." onChange={handleMissionChange} required name='mission' value={mission}  label="Mission" />
        ): (
          <TextField onChange={handleMissionChange} required name='mission' value={mission}  label="Mission" />
        )}
          
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