import React, { useEffect } from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const usestyle = makeStyles((theme)=>{
  root:{
    width:'80%',
    height:'100%',
    color:"blue"

  },
  button:{
    flex:1,
    width:20%,
    height:100%,
    color:'lightgray'
  }
})
function App() {
  const [message,setmessage] = useEffect()
  const [messages,setmessages] = useEffect([])
  const onTextInput = (e) =>{
    setmessage(e.target.value)
  }
  const addMessage = (data) =>{
    setmessages((pre)=>{
      return([        
        ...pre,
        message
      ]
      )
    })
  }
  classes = usestyle()
  return (
    <>
    <div className="full-container">
    <header>
      <h3>Messenger</h3>
    </header>
    <div className="content">

    </div>
    <div className="message-box">
      <TextField 
      id="standard-basic" 
      label="send message" 
      name="message"
      value={message}
      onChange={onTextInput}
      />
    </div>
    </div>
    </>
  );
}

export default App;
