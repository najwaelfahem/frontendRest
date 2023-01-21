import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import AvisItem from '../component/avisItem';
function Avis(props) {
   
    const[dataAvis,setDataAvis]=useState([])
    useEffect(()=>{
        
        fetch('http://localhost:8800/allavis')
        .then((response) => response.json())
        .then ((res)=>{
          console.log(res)
          setDataAvis(res)
        })
         },[]);
    
  return (
    <div>
        <h1>Avis</h1>
        <ul>  
{
      
  
   dataAvis.map(elem =><AvisItem key={elem._id} createdAt={elem.createdAt} rate={elem.rate} 
    comment={elem.comment} createdby={elem.createdBy}>
        </AvisItem>)
}
        </ul>
    </div>
  )
}

export default Avis