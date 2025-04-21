import React, { useState } from 'react';
import './Sam.css';

const Sample = () => {
  const[name,setUserName]=useState("");
  const [userDetails,setUserDetails]=useState("")
  const getUserName=(event)=>{
    setUserName(event.target.value)
  }
  const newUserDetails=()=>{
    setUserDetails(name)

  }
  return (
    <div>
      <h1>hello,{userDetails}</h1>
      <div class="container">
      <input onChange={getUserName} placeholder='enter the name'></input>
      <button  onClick={newUserDetails}>submit</button>
      </div>
      

      
    </div>
  )
}

export default Sample
