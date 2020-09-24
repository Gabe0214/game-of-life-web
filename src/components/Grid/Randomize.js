import React from 'react'
import {  buttonStyles } from './ButtonStyle'
import Button from '@material-ui/core/Button'


export const Randomize = ({numRows, setRows, setGrid, cols}) => {
    const classes = buttonStyles()

  
    const randomCells = () => {
        const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(
        Array.from(Array(cols), () => (Math.random() > 0.7 ? 1 : 0))
      );
    }

    setGrid(rows);
    }
    return (
        <>
         <Button className ={classes.random} variant="outlined" onClick={randomCells} color="primary">
            Randomize
        </Button>
        </>
    )
}


