import axios from 'axios'
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
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
function CreatePost() {
  const [title, settitle] = useState('')
  const [summary, setsummary] = useState('')
  const [content, setcontent] = useState('')
  const [Files, setFiles] = useState('')
  const [data, setdate] = useState('')
  const [token, settoken] = useState('')


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
  const create_new_post = (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    const data = new FormData()
    data.set('title', title)
    data.set('summary', summary)
    data.set('content', content)
    data.set('File', Files[0])
    data.set('token', token)


    // console.log(Files[0].name,Files[0].lastModified,Files[0].lastModifiedDate,Files[0].type)
    console.log("this is frontend", data)
    console.log(Files)
    axios.post("https://myblogbackend.vercel.app/post", data).then((response) => {
      console.log(response);
    })
    settitle("")
    setsummary("")
    setcontent("")
    // setFiles("")
  }
  return (
    <>
      <form enctype="multipart/form-data">
        <input type="text" placeholder='Title' value={title} onChange={handle_title} />
        <input type="text" placeholder='Summary' value={summary} onChange={handle_summary} />
        <input type="file" onChange={handle_Files} />
        <ReactQuill value={content} onChange={handle_quill} modules={modules} formats={formats} />
        <button style={{ marginTop: '5px' }} className="create_post" onClick={create_new_post}>Create Post</button>
      </form>
    </>
  )
}

export default CreatePost