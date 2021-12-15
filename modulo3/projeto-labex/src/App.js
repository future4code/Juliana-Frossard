import './App.css';
import React from 'react';
import Router from './Router/Router';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';

export default function App () {

  return (
    <div className="App">
<Header/>
     <Router/>
     <Footer/>
     </div>
  )
}