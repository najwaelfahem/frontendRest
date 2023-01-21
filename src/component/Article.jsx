import React from 'react';
// import data from "../data/articleData.js";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function Article(props) {
  const navigate = useNavigate()
 
   
    return (
<div>

<Card style={{ width: '18rem' }}>

      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.description}
        </Card.Text>
        <Card.Text>
         {props.children}
        </Card.Text>
        <Card.Text>
         <Link to={`/Edit/${props.id}`}>Edit</Link>
        </Card.Text>
        <Card.Text>
         <button  onClick={()=>{
axios.delete(`http://localhost:8800/delete/${props.id}`)
.then(() => console.log('Delete successful'));

Swal.fire({
position: 'top-end',
icon: 'success',
title: 'suprimé',
showConfirmButton: false,
 timer: 2000
})
navigate('/list', {replace: true})
         }}>Delete</button>
        </Card.Text>
      </Card.Body>
    </Card>
</div>




    )

}

