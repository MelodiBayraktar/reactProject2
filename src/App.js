import React from "react";
import './App.css';
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import About from "./components/About";
import Contact from "./components/Contact";
import {Home} from "./components/Home";
import { ErrorPage } from "./components/ErrorPage";
import { BrowserRouter as Router , Route, Routes} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes> 
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
       
      </div>
    </Router>
  );
}


export default App;
