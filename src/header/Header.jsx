import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
function Header() {
  const [user,setuser]=useState()

  useEffect(()=>{
    const token=localStorage.getItem('token')
   const tokendata={
    jwttoken:token
   }
 axios.post("http://localhost:8080/profile",tokendata).then((response)=>{
   console.log(response);
   if(response.status==200)
   {
    setuser(response.data)
    // window.location.reload();
   }
   
  //  window.location.reload();
  })
  },[])
 const logout=()=>{
  axios.post("http://localhost:8080/logout").then((response)=>{
    localStorage.clear('token')
    setuser(null)
    // console.log(response);
  })
 }
  return (
    <header>
        <Link to="/" className='logo'>My Blog</Link>
          <nav>  
            {user && 
              <>
              <span className="use_name">Hi,{user}</span>
              <Link to='/create'>Creat a new post</Link>
              <a onClick={logout}>Logout</a>
              </>
              
            }
            {!user &&(
              <>
              <Link to='/login'>Login</Link> 
             <Link to='/register'>Register</Link>     
              </>
            )}         
                   
          </nav>
    </header>
  )
}
export default Header