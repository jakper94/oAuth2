import React from 'react';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import "./app.scss";
import "../../resources/site.scss";

import Navigation from "../navigation/navigation";
import Home from '../home/home'
import About from '../about/about'

const App =() =>{
  
  return (
    <HashRouter>
      <div className="app">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About}/>
          <Route from="*" to="/" component={Home} />
        </Switch>
        
      </div>
    </HashRouter>

  );
}

export default App;
