import React from 'react';
import { useState ,useEffect} from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Article from '../component/Article.jsx';
import Header from '../component/Header.js';
import articleData from '../data/articleData.js';
export default function ArticleList(props) {
 
  const[searchValue,setSearchValue]=useState("")
  const handleClick=function(event){
    if(event.target.innerHTML==="all"){setSearchValue('')}
   else
    setSearchValue(event.target.innerHTML)
    console.log(searchValue)
  }
  useEffect(()=>{
    console.log(" data ArticleList",props.data_list)
     },[])
  return (
    <div>
      <h1> Our Menu</h1> 
      <Button  onClick={handleClick}variant="primary" size="sm">
          all
        </Button>{''}
        <Button onClick= {handleClick}variant="primary" size="sm">
        Breackfast
        </Button>{''}
        <Button onClick= {handleClick} variant="primary" size="sm">
        lunch
        </Button>{''}
        <Button  onClick= {handleClick}variant="primary" size="sm">
        shakes
        </Button>{''}
        <Container>
        <Row>
        {
          props.data_list
          .filter(item=>item.title.includes(searchValue))
          .map(elem=> <Col key={elem._id} > <Article title={elem.title} img={elem.image} 
               description ={elem.description} id={elem._id}>{elem.status===false ? "épuisé" : "j'achete"} 
               
               </Article></Col>)
           }
   
   </Row>
   </Container>
</div>
  )
}
