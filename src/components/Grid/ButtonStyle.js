import { makeStyles } from '@material-ui/core'

export const buttonStyles = makeStyles((theme) => ({
  random: {
      marginRight: '2%'
  },
  stop: {
      marginRight: '2%',
      border: '1px solid red',
      color: 'red',
      '&:hover': {
          border: '1px solid red'
      }
  },
  start: {
      marginRight: '2%',
      border: '1px solid green',
      color: 'green',
      '&:hover': {
          border: '1px solid green'
      }

  },

  clear: {
      border: '1px solid grey',
      color: 'grey',
      marginLeft: '2%',
      '&:hover': {
        border: '1px solid grey'
    }
  }
}))