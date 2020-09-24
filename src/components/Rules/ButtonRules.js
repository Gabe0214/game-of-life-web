import React from 'react'
import Button from '@material-ui/core/Button'

export const ReadMe = ({setOpen}) => {

    const handleOpen = () => {
        setOpen(true)
    }

    return (
        <>
        <Button onClick = {handleOpen} variant='outlined' style={{color: 'orange', border: '1px solid orange', marginLeft: '2%'}}>Read Me</Button>
        </>
    )
}