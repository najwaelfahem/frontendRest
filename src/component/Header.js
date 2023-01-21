import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import ArticleList from '../pages/ArticleList';
import Home from '../pages/Home';
export default function Header(){
  return (
    
    <div>
      <Nav defaultActiveKey="Home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/">home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="list">ArticleList</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="add">addArticle</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="allavis">avisList</Nav.Link>
      </Nav.Item>
    </Nav>
      
    </div>
  )
}

