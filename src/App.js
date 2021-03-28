import React from 'react';
import './App.css';
import Home from './pages';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import abiotics from './pages/abiotics';
import investigations from './pages/investigations'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/abiotics' component={abiotics}  exact/>
        <Route path='/investigations' component={investigations}  exact/>
        {/* <Route path='/' component={Home} exact /> */}
      </Switch>
    </Router>
  );
}

export default App;
