import React, {  useState,useEffect } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Message from "./Components/Message";
import {v4 as uuid} from 'uuid';
import './App.css';
import { makeStyles } from '@material-ui/core';
import firebase from "firebase";
import db from "./Components/firebase";

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
    fontSize:"1.6rem"
  }
}));
const App = () => {
  const currentdate= new Date()
  const [message,setmessage] = useState('')
  const [messages,setmessages] = useState([''])
  const [username ,setUsername] = useState('')
  useEffect(() =>{
    setUsername(prompt("enter your name?"))
    db.collection('messages').orderBy("timestamps", "desc").onSnapshot((snapshot)=>{
      console.log(snapshot.docs.map((doc)=>doc.data()))
    setmessages(snapshot.docs.map((doc)=>({id:doc.id,message:doc.data().message,username:doc.data().username,date:doc.data().date})   ))
  })
  },[])
  const classes = useStyles()

  const onTextInput = (e) =>{
    setmessage(e.target.value)
  }
  const addMessage = () =>{
    (message == "")?(alert("it's an empty string :(")):(
      db.collection('messages').add(
        {
          message,
          username,
          timestamps:firebase.firestore.FieldValue.serverTimestamp(),
          date:`${currentdate.getDate()}-${currentdate.getMonth()+1}-${currentdate.getFullYear()}`
        }

    )
    )
    console.log(
      {
        message,
        username,
        timestamps:firebase.firestore.FieldValue.serverTimestamp(),
        date:`${currentdate.getDate()}-${currentdate.getMonth()+1}-${currentdate.getFullYear()}`
      }
    )
    setmessage("")
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
        return(<Message username = {messageItem.username} msg={messageItem.message} usernameC={username} date = {messageItem.date}key={uuid()}/>)
      })
    }

    </div>
    <div className={`message-box ${classes.root}`}>
      <div className = {classes.highsize}>
      <TextField 
      id="standard-basic" 
      label="send message" 
      name="message"
      value={message}
      onChange={onTextInput}
      InputProps={{
            classes: {
              input: classes.highsize,
            },
          }}
      />
      </div>
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
