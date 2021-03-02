import React, { Component } from 'react';
import './App.css';
import Herohead from './Components/Herohead/Herohead';
import Services from './Components/Services/Services';
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Project from './Components/Project/Project';
import Staff from './Components/Staff/Staff';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Herohead />
        <Services/>
        <About/>
        <Contact/>
        <Project/>
        <Staff />
        <Footer/>
      </div>
    )
  }
}


export default App;
