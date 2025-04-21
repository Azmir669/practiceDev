import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './Sam.css';

const Sample = () => {
  const[name,setUserName]=useState("");
  const [userDetails,setUserDetails]=useState("")
  const notify = () => toast(`welcome${userDetails || 'man' }`);

  const getUserName=(event)=>{
    setUserName(event.target.value)
  }
  const newUserDetails=(e)=>{
    e.preventDefault()
    setUserDetails(name)
    notify()

  }
  return (
    <div>
      
      <h1>hello,{userDetails}</h1>
      <form onSubmit={newUserDetails}>
      <input onChange={getUserName} placeholder='enter the name'></input>
      <button  type='submit'>submit</button>
      <ToastContainer/>
      
      </form>
      

      
    </div>
  )
}

export default Sample
