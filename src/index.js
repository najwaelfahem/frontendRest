import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ArticleList from './pages/ArticleList';
import AddArticle from './pages/AddArticle';
import  'bootstrap/dist/css/bootstrap.min.css' ;

import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


