import React, { useState } from 'react'
import './App.css';
import Navbar from './components/navbar';
import TextForm from './components/TextForm'
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom"

function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)
  const showAlert=(message,type)=>{
    setalert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#0c263f'
      showAlert("Dark mode enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode enabled","success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Text Manager" about="About us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      <Route exact path="about" element={<About/>}/>  
       <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode}/>}></Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
