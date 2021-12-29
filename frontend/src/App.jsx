 import React from "react";
 import 'bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import './App.css';
 import Login from './Login';
 import Forget from './Forget';
 import Registration from './Registration';
 import ReactDOM from 'react-dom';
 //import Form from './Form';
 //import FormValidation from './FormValidation';
 import {Route,Switch,Redirect} from 'react-router-dom';

 const App = ()=>{
     return (
         <>
         <Switch>
             <Route exact path="/" component={Login} />
             <Route exact path="/forget" component={Forget} />
             <Route exact path="/registration" component={Registration} />
             <Redirect to="/"/>
         </Switch>    
         </>
     );
 };
 
 export default App;