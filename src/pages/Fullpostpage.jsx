import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Fullpostpage() {
  const [fullpost, setfullpost] = useState('')
  const[fullpostauth,setfullpostauth]=useState()
  const id = useParams()
  const paramId = id.id
  console.log(paramId)
  const token = localStorage.getItem('token')

  useEffect(() => {
    axios.post(`https://arifblogserver.onrender.com/post/${paramId}`, { id, "token": token }).then((response) => {
      console.log(response)
      // autherId=response.data.verefy
      // useridpost=response.data.postdoc._id
      // console.log(response.data.postdoc._id)
      // console.log(response.data.postdoc)
      setfullpost(response.data.postdoc)
      setfullpostauth(response.data.verefy)

    })
  }, [])
  //  console.log(fullpost.auther==fullpostauth)
  //  console.log("this1",fullpost.auther,"this2",fullpostauth)
  const handle_delete=()=>{
    axios.post(`https://arifblogserver.onrender.com/post/delete/${paramId}`, { id, "token": token }).then((response) => {
      console.log(response)
      // setfullpost(response.data.postdoc)
      // setfullpostauth(response.data.verefy)

    })
  }
  return (
    <div className='postpage'>
      {/* <span>{fullpost._id}</span> */}
      <h1 className="title">{fullpost.title}</h1>
      <div className="userinfo">
        <time>{fullpost.createdAt}</time>
        {/* <div>By {fullpost.auther.username}</div> */}
      </div>

      <br />
      {fullpost.auther==fullpostauth && <div className="edit-row">
        <Link className="edit-btn" to={`/edit/${fullpost._id}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="edit_post">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
          Edit this post
        </Link>
        <div>
   <button className='delete' onClick={handle_delete}>Delete</button>
         </div>
      </div>
 
     
      }

      <div className="image">
        <img src={`https://arifblogserver.onrender.com/${fullpost.cover}`} alt="" />
      </div>
      <div className='content'>{fullpost.content}</div>
    </div>
  )
}

export default Fullpostpage