import React from 'react'
import Navigation from './components/navbar/NavBar'
import AboutSite from './components/about-site/About-Site'
import Problems from './components/daily-problem/DailyProblem'
import {HashRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/main.css'




function App() {

  return (
    <>
    <Router>
      <Navigation />     
    </Router>
    <div className="d-flex flex-row flex-wrap mainContainer">
    <AboutSite />
    <Problems />
    </div>
    </>
  );

}

export default App;
