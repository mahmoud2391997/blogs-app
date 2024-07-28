import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import * as ReactDOM from "react-dom/client";
import {
    BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login_Register_Form from './components/LoginForm.jsx'
render(
    
<div className=' h-full vw-100'>
<App/>
<Footer></Footer>
</div >
    

, document.getElementById('app'))
