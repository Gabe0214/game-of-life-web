import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import startTheme from './ButtonStyle'


export const Randomize = ({numRows, setRows, setGrid, cols}) => {
  

  
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
        
        
         <Button style={{marginRight: '2%'}}variant="outlined" onClick={randomCells} color="primary">
            Randomize
        </Button>
        
        
    )
}


