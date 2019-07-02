import React from 'react';
import {BrowserRouter, Switch , Route} from 'react-router-dom'
import NavBar from './container/layout/NavBar'
import Dashboard from './container/dashboard/Dashboard'
import SignIn from './container/auth/SignIn'
import SignUp from './container/auth/SignUp'
import CreateProject from './container/projects/CreateProject'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar/>
    <Switch>
    <Route exact path='/' component = {Dashboard}/>
    <Route path='/signIn' component = {SignIn}/>
    <Route path='/signUp' component = {SignUp}/>
    <Route path='/newProject' component = {CreateProject}/>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
