import React, { useEffect } from 'react';
import  { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';
function EditArticle() {
  const[data,setData]=useState({})
  const navigate = useNavigate()
  const {articleid} = useParams()
  useEffect(()=>{
    console.log(articleid)
    fetch(`http://localhost:8800/getbyid/${articleid}`)
    .then((response) => response.json())
    .then ((res)=>{
      console.log(res)
      setData(res)
    
    })
     },[]);

  
  const[title,setTitle]=useState(data.title)
  const[img,setImg]=useState(data.image)
  const[description,setDescription]=useState(data.description)
  const[status,setStatus]=useState(true)
  const[save,setSave]=useState({})
  var edit =()=>{
    axios.post(`http://localhost:8800/update/${articleid}`,{
          title: title,
          image: img,
          description: description,
          status:status
       })
       Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'modifié',
        showConfirmButton: false,
         timer: 2000
      })
      navigate('/list', {replace: true})
  }
  
  
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
    
 
  return (
    <div>
       <section className="create-post">
      <h2>Edit article</h2>
      <form>
        <label> title :</label>
        <input onChange={handleChangeTitle} type="text" defaultValue={data.title} required  />
        <label> Image :</label>
        <input type="url" onChange={handleChangeImg} defaultValue={data.image}  required />
        <label>Description :</label>
        <textarea required rows="3"  onChange={handleChangeDescription} defaultValue={data.description}></textarea>
        <label>Status :</label>
        <select value= "" defaultValue={data.status} onChange={handleChangeStatus}>
          <option value={true}>acheté</option>
          <option value={false}>epuisé</option>
        </select>
        </form>
      <button type='button' onClick={edit}>Edit</button>
      
    </section> 
    </div>
  )
  }

export default EditArticle