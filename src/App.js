import React from 'react';
import { useParams, Route , Routes} from "react-router-dom";
import './App.css';
import data from "./data/articleData.js";
import Article from "./component/Article.jsx";
 import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import articleData from './data/articleData.js';
 import Button from 'react-bootstrap/Button';
 import { useState  } from 'react';
 import { useEffect } from 'react';
import AddArticle from './pages/AddArticle';
import Home from './pages/Home';
import Articlelist from './pages/ArticleList';
import Header from './component/Header';
import Footer from './component/Footer';
 import { Col, Container, Row } from 'react-bootstrap';
import Avis from './pages/avis.js';
import EditArticle from './pages/EditArticle';

  function App(props) {
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8800/')
    .then((response) => response.json())
    .then ((res)=>{
      console.log(res)
      setData(res)
    
    })
     },[]);
 
const {articleid}=useParams("")
   return (
    <div className="App">
      <Header/>
      
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/list" element={<Articlelist data_list={data}/>} />
        <Route path="/add" element={<AddArticle />} />
        
        <Route path="/allavis" element={<Avis />} />
        <Route path="/Edit/:articleid" element={<EditArticle/>}/>
        </Routes>
        
      </div>
  );}
export default App;
