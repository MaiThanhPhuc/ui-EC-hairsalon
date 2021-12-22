import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Sidebar from '../../Components/Admin/Sidebar/Sidebar';
import Topbar from '../../Components/Admin/Topbar/Topbar';
import './index.css'

import PageNotfound from '../PageNotFound/PageNotFound';
import Home from './Home/Home';
//
import User from './User/User';
import AddUser from './User/AddUser';
import UserDetail from './User/UserDetail';
//
import Appointment from './Appointment/Appointment';
import AddAppointment from './Appointment/AddAppointment';
//
import Service from './Service/Service';
import ServiceDetail from './Service/ServiceDetail';
import AddService from './Service/AddService';

export default function Admin() {
  return (

    <div className='wrapper'>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/admin" component={Home} />
          
          <Route exact path="/admin/users" component={User} />
          <Route exact path="/admin/users/add" component={AddUser} />
          <Route exact path="/admin/users/:userId" component={UserDetail} />
          
          <Route exact path="/admin/appointments" component={Appointment} />
          <Route exact path="/admin/appointments/add" component={AddAppointment} />

          <Route exact path="/admin/services" component={Service} />
          <Route exact path="/admin/services/add" component={ServiceDetail} />
          <Route exact path="/admin/services/:serviceId" component={AddService} />
        </Switch>
      </div>
    </div>

  );
}
