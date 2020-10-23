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
        width: "auto",
        padding:theme.spacing(1),
        wordSpacing:".4rem",
        letterSpacing:".2rem",
        fontFamily:"'Staatliches', cursive"
      },
    },
  }));
const Message =({username,msg})=>{
    const classes = useStyles()
    return(
        <>
        <div className={`Message ${classes.root}`}>
            <Paper>      
                <Typography variant="subtitle1" display="block" gutterBottom>
                    {username}
                </Typography>
                <Typography variant="h4" gutterBottom>
                    {msg}
                </Typography>
            </Paper>
        </div>
        </>
    )
}
export default Message;