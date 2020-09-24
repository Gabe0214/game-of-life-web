import React from 'react'
import Button from '@material-ui/core/Button'
import { ThemeProvider } from '@material-ui/core'
import  startTheme from './ButtonStyle'

export const Start = ({setSimulation, simulation, runningRef, runSimulation}) => {
    
    return (
         <>
        
          <Button style={{color: simulation ? 'red': 'green', border: simulation ? '1px solid red': '1px solid green', marginRight: '2%'}}variant="outlined" onClick={() =>{
            setSimulation(!simulation);
            if(!simulation){
                runningRef.current = true;
                runSimulation()
            }
          }}>
           {simulation ? 'Stop': 'Start'}
        </Button>
     
         </>
    )
}