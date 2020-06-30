import React, { useState } from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import {addAstronaut} from '../../redux/actions';
const useStyles = makeStyles({
    list: {
      width: 500,
      padding:20,
    },
  });

function AstronautForm({addAstronaut}){
    const classes = useStyles();
    const [date, setDate] = useState("2020-06-29");
    const [isMultiple,setIsMultiple] = useState(false);
    const[name,setName] = useState('');
    const[days,setDays] = useState(0);
    const[mission,SetMission] = useState('');
    const handleNameChange = (event) => {
      console.log(event.target.value);
      
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
      addAstronaut({
        name,
        date:Date.parse(date)/1000,
        days:+days,
        mission,
        isMultiple
      })
    }
    return(
        <div
        className={clsx(classes.list)}
      >
        <form>
        <div>
          <TextField required name="name" onChange={handleNameChange} value={name}  label="Name" />
        </div>
        <div>
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
        <div>
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
        <div>
          <TextField onChange={handleMissionChange} required name='mission' value={mission}  label="Mission" />
        </div>
        <div>
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
      </div>
    )
}

const mapDispatchToProps ={
  addAstronaut
}

export default connect(null,mapDispatchToProps)(AstronautForm)