import React,{FC} from 'react';
import Home from "./Pages/Home/Home";
import {Route,Router} from "react-router-dom";
import {createBrowserHistory} from "history"
import Dashboard from './Pages/Dashboard/Dashboard';

export const history = createBrowserHistory();

const App:FC = (): JSX.Element =>{
  return(
    <Router history={history}>
      <Route exact path="/" component={Home}/>
      <Route path="/dashboard" component={Dashboard}/>
    </Router>
  
  )
}
export default App;
