import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/Pages/Home";
import Match from "../src/Pages/Match";
import Populate from "../src/Pages/Populate";



const App = () => (
<Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/match" component={Match} />
        <Route exact path="/populate" component={Populate} />
       
      </Switch>
    </div>
  </Router>
);
    


export default App;
