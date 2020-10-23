import React, {  useState,useEffect } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Message from "./Components/Message";
import {v4 as uuid} from 'uuid';
import './App.css';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      fontSize:"1.5rem",
      margin:theme.spacing(1)
    },
  },
  highsize: {
    '& > *': {
      fontsize:"2rem"
    }
  }
}));
const App = () => {
  const [username ,setUsername] = useState('')
  useEffect(() =>{
    setUsername(prompt("enter your name?"))
  },[])
  const classes = useStyles()
  const [message,setmessage] = useState('')
  const [messages,setmessages] = useState([
    {
      username:"afeef",
      message:"hai"
    }
  ])
  const onTextInput = (e) =>{
    setmessage(e.target.value)
  }
  const addMessage = () =>{
    (message == "")?(alert("it's an empty string :(")):(
      setmessages((pre)=>{
      return([        
        ...pre,
        {
          message,
          username
        }
      ]
      )
    })
    )
    setmessage("")
    console.log(messages);
  }
  // classes = usestyle()
  return (
    <>
    <div className="full-container">
    <header>
      <h3>Messenger</h3>
    </header>
    <div className="content">
    {
      messages.map((messageItem)=>{
        return(<Message username = {messageItem.username}msg={messageItem.message} key={uuid()}/>)
      })
    }

    </div>
    <div className={`message-box ${classes.root}`}>
      <TextField 
      id="standard-basic" 
      label="send message" 
      name="message"
      value={message}
      onChange={onTextInput}
      className = {classes.highsize}
      />
      <Button 
      variant="outlined" 
      size="small"
      onClick={addMessage}
      >send</Button>
    </div>
    </div>
    </>
  );
}

export default App;
