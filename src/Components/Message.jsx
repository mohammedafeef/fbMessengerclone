import React from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(3),
        minWidth:"5rem",
        padding:theme.spacing(1),
        wordSpacing:".4rem",
        letterSpacing:".2rem",
        fontFamily:"'Staatliches', cursive"
      },
    },
    username: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(3),
          marginLeft:"auto",
          width: "auto",
          minWidth:"8rem",
          padding:".4rem",
          wordSpacing:".4rem",
          letterSpacing:".2rem",
          fontFamily:"'Staatliches', cursive",
          backgroundColor:"#1f6f8b"
        },
      },
      date: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: "auto 0 0 auto",
          color:"lightgray"
        },
      },
  }));
const Message =({username,msg,usernameC,date})=>{
    const classes = useStyles()
    return(
        <>
        <div className={`Message ${username == usernameC ?classes.username:classes.root}`}>
            <Paper>      
                <Typography variant="subtitle1" display="block" gutterBottom>
                    {username}
                </Typography>
                <Typography variant="h4">
                    {msg}
                </Typography>
                <div className={classes.date}>
                <Typography variant="subtitle1" display="block" >
                    {date}
                </Typography>
                </div>
            </Paper>
        </div>
        </>
    )
}
export default Message;