import React, { useState } from 'react'
import '../loginregister/register.css'
import axiox from 'axios'
import axios from 'axios'
 function Register() {
  const [username,setUsername]=useState()
  const[password,setpassword]=useState()
 const  handle1=(e)=>{
  setUsername(e.target.value);
  console.log(username);
 }
 const  handle2=(e)=>{
  setpassword(e.target.value);
  console.log(password);
 }
  const  inputHandle=async (e)=>{
    e.preventDefault()
    const data={
      username:username,
      password:password
    }
    try{
      axios.post("https://arifblogserver.onrender.com/register",data).then((response)=>{
        console.log(response);
      if(response.status!==200)
      {
        alert("Registration failed")
      }
      else
      {
            alert("Register sucessfull")
      }
      }).catch((err)=>{
              console.log(err);
      })
    }
    catch(err){
     console.log("registration failed",err)
    }
    setUsername("")
    setpassword("")
    }
    
  return (
    <div>
      <form className="register" action=''>
        <h1>Register</h1>
        <input type="text" placeholder='username' value={username} onChange={handle1}/>
        <input type="password" placeholder='password' value={password} onChange={handle2}/>
        <button onClick={inputHandle}>Register</button>
      </form>
    </div>
  )
}

export default Register