import React from "react";
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main";
import Footer from "./components/Footer";
import {Route, Routes } from "react-router-dom"; // import BrowserRouter, Switch and Route from react-router-dom
import Contact from "./components/Contact"; // import the Contact component

function App() {
  return (
      <div className="App">
        <Navigation />
        <Routes> 
          <Route path="/" element={<Main/>} />
          <Route path="/contact" element={<Contact/>}  /> 
          </Routes>
        <Footer/>
      </div>

  );
}

export default App;
