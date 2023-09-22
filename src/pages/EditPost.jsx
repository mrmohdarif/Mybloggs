import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'
const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  }
  
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]
function EditPost() {
  const id=useParams()
  const paramId=id.id
    console.log(id);
    const [title, settitle] = useState('')
    const [summary, setsummary] = useState('')
    const [content, setcontent] = useState('')
    const [Files, setFiles] = useState('')

      useEffect(()=>{
        axios.post(`http://localhost:8080/post/${paramId}`,id).then((response)=>{
            console.log(response.data)
            // console.log(response)
            // console.log(response)
            settitle(response.data.title)
            setsummary(response.data.summary)
            setcontent(response.data.content)
        })
      },[])



    const handle_title = (e) => {
        settitle(e.target.value)
        console.log(title)
      }
      const handle_summary = (e) => {
        setsummary(e.target.value)
        console.log(summary)
      }
      const handle_quill = (newValue) => {
        setcontent(newValue)
        console.log(content)
      }
      const handle_Files = (e) => {
        setFiles(e.target.files)
      }

      const Update_post=(e)=>{
         e.preventDefault()
         const token = localStorage.getItem('token')
           const data = new FormData()
           data.set('title', title)
          data.set('summary', summary)
          data.set('content', content)
          data.set('token',token)
          data.set('id',paramId)
          if(Files?.[0])
          {
            data.set('File', Files?.[0]) 
          }
          // data.set('File', Files?.[0])
    // data.set('token', token)
     axios.put('http://localhost:8080/post',data).then((response)=>{
        console.log(response.data)
           const result=response.data
        if(result===false)
        {
          alert("Your are not auther")
        }
        else if(result){
             alert("Update sucessfully")
        }
     })
      }
  return (
    <div>
         <form>
        <input type="text" placeholder='Title' value={title} onChange={handle_title} />
        <input type="text" placeholder='Summary' value={summary} onChange={handle_summary} />
        <input type="file" onChange={handle_Files} />
        <ReactQuill value={content} onChange={handle_quill} modules={modules} formats={formats} />
        <button style={{ marginTop: '5px' }} className="create_post" onClick={Update_post}>Update post</button>
      </form>
    </div>
  )
}

export default EditPost