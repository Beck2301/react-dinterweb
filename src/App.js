import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';


import Dinterweb from './components/pages/Dinterweb';
import Dinterweb2 from './components/pages/Dinterweb2';
import Dinterweb3 from './components/pages/Dinterweb3';
import Navbar from './components/Navbar'
import NotFound from './components/pages/NotFound';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Dinterweb}></Route>
          <Route path='/Dinterweb2' component={Dinterweb2}></Route>
          <Route path='/Dinterweb3' component={Dinterweb3}></Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
