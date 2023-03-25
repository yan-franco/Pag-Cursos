import React from 'react';
import './App.css';
import pagPrincipal from './componentes/pagPrincipal/index.jsx'
import {Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={pagPrincipal} />
      </Switch>
    </div>
  );
}

export default App;
