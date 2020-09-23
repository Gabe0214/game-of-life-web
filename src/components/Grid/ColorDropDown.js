
import React from 'react'
import { useStyles } from './DropDownStyle'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

export const DropDown = ({color, setColor}) => {
const classes = useStyles()

 const colorChange = (e) => {
    setColor(e.target.value)
 }

    return (
        <>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Color</InputLabel>
        <Select
          native
          value={color}
          onChange= {colorChange}
          label="Color"
          inputProps={{
            name: 'Color',
            id: 'outlined-age-native-simple',
          }}
        >
          {/* <option aria-label="None" value="" /> */}
          <option value={'red'}>Red</option>
          <option value={'blue'}>Blue</option>
          <option value={'green'}>Green</option>
        </Select>
      </FormControl>
        </>
    )
}