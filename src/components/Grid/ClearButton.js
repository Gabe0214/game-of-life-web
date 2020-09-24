import React from 'react'
import Button from '@material-ui/core/Button'
import { buttonStyles } from './ButtonStyle'
export const Clear = ({numRows, numCols, setGrid, setCount, simulation, setSimulation}) => {
    
 
  const clearGrid = () => {
    setCount(0)

    setSimulation(false)
    const rows = []
    for (let i = 0; i < numRows; i++){
      rows.push(Array.from(Array(numCols), () => 0))
    }
     return setGrid(rows)
  }


    return(
        <>
        <Button variant="outlined" onClick={clearGrid} style={{border: '1px solid grey', color:'grey', marginLeft: '2%'}}>
           Clear
        </Button>
        </>
    )
}