import React, { useState } from 'react'
import '../loginregister/login.css'
import {Navigate} from 'react-router-dom'
import axios from 'axios'
function Login() {
  const [user,setUser]=useState('')
  const [pass,setpass]=useState('')
  const [redirect,setredirect]=useState('')
  
const handleuser=(e)=>{
setUser(e.target.value)
console.log(user);
}
const handle1pass=(e)=>{
setpass(e.target.value)
console.log(pass)
}
const handlesubmit=async (e)=>{
e.preventDefault()
const loginData={
  user:user,
  pass:pass
}
try{
  axios.post("http://localhost:8080/login",loginData).then((response)=>{

    if(response.status!==200)
    {
      alert("something went wring")
    }
    else
    {
      alert("sucessfully login") 
      // window. location. reload(); 
      // console.log(response.data)
      localStorage.setItem('token',response.data)    
      setredirect(true)
    }
})

}
catch(err){
  console.log("not login",err);
}
setpass('')
setUser('')
}
if(redirect)
{
  return <Navigate to={"/"}/>
}

  return (
    <div>
      <form className="login" action=''>
        <h1>Login</h1>
        <input type="text" placeholder='username' value={user} onChange={handleuser}/>
        <input type="password" placeholder='password' value={pass} onChange={handle1pass}/>
        <button onClick={handlesubmit}>Login</button>
      </form>
    </div>
  )
}
export default Login