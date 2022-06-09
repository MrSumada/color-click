import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { exportComponentAsJPEG } from "react-component-export-image";

import CardList from './components/CardList';
import Nav from './components/Nav';

function App() {

  const printRef = useRef();

  const printCall = (data) => {
      console.log("printing!");
      exportComponentAsJPEG(printRef, "Color-Click");
  }

  return (
    
      <BrowserRouter basename="/color-click/">
      
        <Nav
          func={printCall}
        />
        <Routes>
          <Route exact path='/' element={<CardList ref={printRef} num={3}/>}/>
          <Route exact path='/1' element={<CardList ref={printRef} num={1}/>}/>
          <Route exact path='/9' element={<CardList ref={printRef} num={3}/>}/>
          <Route exact path='/25' element={<CardList ref={printRef} num={5}/>}/>
          <Route exact path='/100' element={<CardList ref={printRef} num={10}/>}/>
          <Route exact path='/400' element={<CardList ref={printRef} num={20}/>}/>
          <Route exact path='/1024' element={<CardList ref={printRef} num={32}/>}/>
          <Route path='*' element={<CardList num={3}/>}/>
        </Routes>
      
      </BrowserRouter>
  );
}

export default App;
