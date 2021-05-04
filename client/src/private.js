import React from 'react'
import {Redirect,Route} from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
    const email= window.localStorage.getItem("name")
  
    return(
        <Route
            {...rest}
            render={props =>{
                return email ? <Component {...props}/> : <Redirect to="/"/>
            }}
        >
        </Route>
        
    )
  }
 