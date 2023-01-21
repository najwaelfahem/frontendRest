import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import ArticleList from './ArticleList';
const AddArticle = () => {
  const[title,setTitle]=useState("")
  const[img,setImg]=useState("")
  const[description,setDescription]=useState("")
  const[status,setStatus]=useState(true)
  const[save,setSave]=useState({})
  
    var handleChangeTitle=function(event){
      setTitle(event.target.value)
       console.log(title)
        }
        var handleChangeImg=function(event){
          setImg(event.target.value)}
          var handleChangeDescription = function(event){
            setDescription(event.target.value)
                        }
         var handleChangeStatus=function(event){
          setStatus(event.target.value)
          console.log(event.target.value)
         }               
       var addart=()=> {
    axios.post("http://localhost:8800/add",{
          title: title,
          image: img,
          description: description,
          status:status
       })
      console.log(ArticleList)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        // timer: 5000
      })}
      
      
                                     
  return (
    <section className="create-post">
      <h2>Add New Article</h2>
      <form>
        <label> title :</label>
        <input onChange={handleChangeTitle} type="text" required />
        <label> Image :</label>
        <input type="url"  onChange={handleChangeImg} required />
        <label>Description :</label>
        <textarea required rows="3" onChange={handleChangeDescription}></textarea>
        <label>Status :</label>
        <select value={status} onChange={handleChangeStatus}>
          <option value={true}>acheté</option>
          <option value={false}>epuisé</option>
        </select>
        <button className="btn"  onClick={addart}>
          Add Article
        </button>
      </form>
    </section>
  )
}

export default AddArticle
