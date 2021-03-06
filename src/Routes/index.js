import React from 'react'
import {
    Route,
    Switch
} from 'react-router-dom';
import Home from "../Pages/Index/index"
import SignIn from "../Pages/Signin/SignIn"
import SignUp from '../Pages/Signup/SignUp';
import Index from '../Pages/Index/index';
import PageNotfound from '../Pages/PageNotFound/PageNotFound';
import About from "../Pages/About/About";

import ChooseAgency from '../Pages/Reservation/ChooseAgency';
import ChooseService from '../Pages/Reservation/ChooseService';
import ChooseSlot from '../Pages/Reservation/ChooseSlot';
import Checkout from '../Pages/Reservation/Checkout';
import Services from "../Pages/Services/Services";


function MyRoutes() {
    return (
        <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/aboutus" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/home" component={Home} />

            <Route exact path="/agency" component={ChooseAgency} />
            <Route exact path="/agency/:agencyId/reservation/services"  component={ChooseService}/>
            <Route exact path="/agency/:agencyId/reservation/slots"  component={ChooseSlot}/>
            <Route exact path="/agency/:agencyId/reservation/checkout" component={Checkout}/>
            <Route component={PageNotfound} />
        </Switch>
    )
}

export default MyRoutes
//
