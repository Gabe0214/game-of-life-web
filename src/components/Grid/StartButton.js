import React from 'react'
import Button from '@material-ui/core/Button'
import { buttonStyles } from './ButtonStyle'

export const Start = ({setSimulation, simulation, runningRef, runSimulation}) => {
    const classes = buttonStyles()
    return (
         <>
          <Button variant="outlined" color="primary" onClick={() =>{
            setSimulation(!simulation);
            if(!simulation){
                runningRef.current = true;
                runSimulation()
            }
          }} className ={simulation ? classes.stop : classes.start}>
           {simulation ? 'Stop': 'Start'}
        </Button>
         </>
    )
}