import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'; 

import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import signin from './components/user/signin'
import signup from './components/user/signup'
import addmovie from './components/movies/AddMovie'
import logout from './components/user/Logout'
import editmovie from './components/movies/EditMovie'
import modal from './components/playground/modal'

function App() {
  return (
    <Router>
     
      <Route path="/" exact component={signin} />
      <Route path="/signup" component={signup}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/addmovie" component={addmovie}/>
      <Route path="/logout" component={logout}/>
      <Route path="/edit/:id" component={editmovie}/>
      
      
    </Router>
  );
}

export default App;
