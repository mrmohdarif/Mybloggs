import React, { useEffect, useState } from 'react'
import Post from '../post/Post'
import axios from 'axios'
import Example from './Example'
function Indexpage() {
  const [post,setpost]=useState([])
  const [page,setpage]=useState(1)
  const [loading,setloading]=useState(true)
const handlscroll=async()=>{
         try{
          console.log("entire document",document.documentElement.scrollHeight) 
          console.log("innerHeight",window.innerHeight) 
          console.log("ScrollTop",document.documentElement.scrollTop) 
          if(document.documentElement.scrollTop+window.innerHeight>=document.documentElement.scrollHeight)
          {
            setloading(true)
            setpage((prev)=>prev+1)
          }
         }
         catch(err)
         {
          console.log(err)
         }
}

  useEffect(()=>{
  axios.get(`https://arifblogserver.onrender.com/`).then((response)=>{
   console.log(response.data)
   setpost((prev)=>[...prev,...response.data])
   setloading(false)
   console.log(post)
  })
  },[page])

  useEffect(()=>{
    window.addEventListener('scroll',handlscroll)
    window.removeEventListener('scroll',handlscroll)
  },[])
  return (
    <div>
        <main>
        
          <Post data={post}/>
        <Example/>
        
        </main>
        
    </div>
  )
}

export default Indexpage