import React from "react";
import FooterView from "./FooterView";
import Headerview from "./HeaderView";
import Homemethod from "./Home";
import Aboutmethod from "./About";
import Contactmethod from "./Contact";

import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import NavigatorTab from "./NavigationComponent";


function Mainview()
{
    return(
        <React.Fragment>
        <Headerview/>

        <NavigatorTab/>


        <Switch>
            <Route path='/Home' components={Homemethod}/>
            <Route path='/About' components={Aboutmethod}/>
            <Route path='/Contact' components={Contactmethod}/>
            <Redirect to='/Home'/>
        </Switch>


        <FooterView/>

        
        </React.Fragment>
        
    )
}

export default withRouter(Mainview);