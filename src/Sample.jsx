import React, { useState } from 'react';
import './Sam.css';

const Sample = () => {
  const[name,setUserName]=useState("");
  const [userDetails,setUserDetails]=useState("")
  const getUserName=(event)=>{
    setUserName(event.target.value)
  }
  const newUserDetails=(e)=>{
    e.preventDefault()
    setUserDetails(name)

  }
  return (
    <div>
      <h1>hello,{userDetails}</h1>
      <form onSubmit={newUserDetails}>
      <input onChange={getUserName} placeholder='enter the name'></input>
      <button  type='submit'>submit</button>
      </form>
      

      
    </div>
  )
}

export default Sample
