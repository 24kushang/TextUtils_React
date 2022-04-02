// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/Navbar';
// import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('black')
      document.body.style.backgroundColor = '#15202b';
      document.body.style.color = 'white'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'
    }
  }
  return (
    <>
     

      <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <div className='container my-3'>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm />
          </Route>
        </Switch>
      </div>
      </Router>
      {/* <div className='container'>
        <TextForm heading='Enter the text to analyse' /> */}
        {/* <About /> */}
      {/* </div> */}

    </>
  );
}

export default App;

