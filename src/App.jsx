import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Main from './Pages/Main'
import About from './Pages/About'
import Episodes from './Pages/Episodes'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'

import Info from './Comps/Info';
import Nav from './Comps/Nav';
import './Styles/App.css';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" exact component={About} />
        <Route path="/episodes" exact component={Episodes} />
        <Route path="/blogs" exact component={Blog} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Info />
    </Router>
  )}

export default App;