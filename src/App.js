//import logo from './logo.svg';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
//import {Switch,Route,Link} from 'react-router-dom';

/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";*/

function App() {
  const [Mode, setMode] = useState('light');
  const[alert,setalert] = useState(null);

  const showAlert = (message, type)=> {
    setalert
    ({
      msg: message,
      ty: type,
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const togglemode = ()=>
  {
    if(Mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#282b56';
      showAlert("Dark mode has been enabele", "success");
      document.title='TextUtil - Dark Mode';
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor ='#fff' ;
      showAlert("Light mode has been enabele", "success")
      document.title='TextUtil - Light Mode';
    }
  }
  return (
    <>
    <Navbar title="TextUtils" Mode={Mode} togglemode={togglemode}/> 
    <Alert alert={alert}/>
    <div className="container my-3" >
    <TextForm  showAlert={showAlert} heading="Employee Details" Mode={Mode}/>
    </div>
    </>
  );    
}

export default App;
