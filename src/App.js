import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

import FirstComponent from './components/FirstComponent';
import NavigationContainer from "./components/NavigationContainer";


// ReactDOM.render(<App />, document.getElementById('root'))

function App() {
  return (
    <Router>

      <NavigationContainer />

      <Switch>
        <Route path="/about-me" component={About} />
      </Switch>

      <Switch>
        <Route path="/projects" component={Projects} />
      </Switch>

      <Switch>
        <Route path="/contact" component={Contact} />
      </Switch>

      <div className="App">
      <header>Test</header>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <FirstComponent displaytext="First Component Data"/> */}
    </div>
    </Router>
    
    
  );
}

export default App;
