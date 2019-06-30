import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import NavBar from './container/layout/NavBar'
import Dashboard from './container/dashboard/Dashboard'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar/>
    <Dashboard/>
    </div>
    </BrowserRouter>
  );
}

export default App;
