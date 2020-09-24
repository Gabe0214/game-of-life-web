import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';






const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export const SpeedSlider = ({setSpeed, speed}) => {
    const classes = useStyles();
    

    const handleChange = (e) => {
      console.log(e.target.value)
      setSpeed(e.target.value)
      console.log(speed)
    };
    return (
        <>
       <FormControl className={classes.formControl} style={{margin: '2% 0 0 0'}}>
        <InputLabel id="demo-simple-select-helper-label">Speed(MS)</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={speed}
          onChange={handleChange}
        >
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
          <MenuItem value={1000}>1000</MenuItem>
        </Select>
        <FormHelperText>Change Simulation Speed</FormHelperText>
      </FormControl>
    </>
    )
}