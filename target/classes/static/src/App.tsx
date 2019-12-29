import React,{FC} from 'react';
import Home from "./Pages/Home/Home";
import {Route,Router} from "react-router-dom";
import {createBrowserHistory} from "history"
import Dashboard from './Pages/Dashboard/Dashboard';
import Fact from './Components/Fact/Fact';
import Activity from './Components/Activity/Activity';
import DashboardOptions from './Components/DashboardOptions/DashboardOptions';
import ManageFriends from './Components/ManageFriends/ManageFriends';
import Settings from './Components/Settings/Settings';
import EditProfile from './Components/EditProfile/EditProfile';
import ReportBug from './Components/ReportBug/ReportBug';
import SuggestFact from './Components/SuggestFact/SuggestFact';

export const history = createBrowserHistory();

const App:FC = (): JSX.Element =>{
  return(
    <Router history={history}>
        <Route exact path="/" component={Home}/>
        <Route path = "/dashboard" component={DashboardOptions}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route path ="/dashboard/fact" component={Fact}/>   
        <Route path ="/dashboard/activity" component={Activity}/>
        <Route path = "/dashboard/manage-friends" component ={ManageFriends}/>
        <Route path ="/dashboard/settings" component={Settings}/>
        <Route path ="/dashboard/edit-profile" component={EditProfile}/>
        <Route path = "/dashboard/report-bug" component={ReportBug}/>
        <Route path = "/dashboard/suggest-fact" component={SuggestFact}/>
    </Router>
  
  )
}
export default App;
