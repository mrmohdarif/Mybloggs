import React, { useState} from 'react'

import { Link } from 'react-router-dom'
function Post(props) {
  // console.log(title,summary,cover,content)
  console.log(props.data)


    return (
      <>
      {props.data.map((post,index)=>{
      return <div className="post" key={index}>
     <div className="image">
      <Link to={`/post/${post._id}`}>
      <img src={'https://arifblogserver.onrender.com/'+post.cover} alt=""/>
      </Link> 
       </div>
        <div className="text"> 
        <Link to={`/post/${post._id}`}>
        <h2>{post.title}</h2>
        </Link>      
        
        <p className="info">
         {/* <a className="auther">{post.auther.username}</a> */}
         <time>{post.createdAt}</time>
        </p>
        <p className="summery">{post.summary}</p>
        
     </div>        
   </div> 
  })}
      </>
      
    )
 
 
}

export default Post