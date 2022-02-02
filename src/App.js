import React from "react";
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import About from './components/about'
import Home from './components/home'
import Contact from './components/contact'
import Resume from './components/resume'
import Work from './components/work'
import Skill from './components/skill.js'
import Writing from './components/writing'
import NavBar from "./nav";

import './app.css'
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/resume/skill'>
          <Skill />
        </Route>
        <Route path='/writing'>
          <Writing />
        </Route>
        <Route path='/work'>
          <Work />
        </Route>
        <Route path='/resume'>
          <Resume />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
