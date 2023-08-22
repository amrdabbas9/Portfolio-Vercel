// Sections :
import Main from './main.js'
import Landing from './sections/landing.js' 
import About from './sections/aboutme.js'
import Skills from './sections/skills.js'
import Portfolio from './sections/portfolio.js'
import Certs from './sections/certs.js'
import Contact from './sections/contact.js'



// CSS Files :
import './App.css'
import './css/all.min.css'
import './css/normalize.css'

import React from 'react'



function App(){

  return(
    <>
      <Landing />
      <About />
      <Skills />
      <Portfolio />
      <Certs />
      <Contact />
    </>
  );
}

export default App;