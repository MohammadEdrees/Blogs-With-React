import React from 'react';
import Home from '../Components/Home'
import Header from '../Components/Header'
import Details from '../Components/Details'
import Edit from "../Components/Edit";
import Add from '../Components/AddNew'
import Login from '../Components/Login'
import { BrowserRouter as Router,Redirect,Route} from "react-router-dom";

//SmartClass

export default class AppRouter extends React.Component{
    state={
        myArr:[{Id:7,Name:'ooo'}]
    }
render(){

    return(
        <>
        <Router>
           <Header/>
            <Route component={Home} path="/" exact/>
            <Route component={Details} path='/details' exact/>
            <Route component={Edit} path="/Edit/:id" exact/>
            <Route component={Add} path="/AddNew" exact/>
            <Route component={Login} path='/login' exact/>
        </Router>
        
        </>
    )
}



}