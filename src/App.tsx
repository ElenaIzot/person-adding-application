import React from 'react';
import './App.css';
import { Table } from './Components/Table';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="container-xxl">
      <Router basename='/'>
        <Switch>
          <Route path='/' component={Table} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
