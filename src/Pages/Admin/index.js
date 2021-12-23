import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Sidebar from '../../Components/Admin/Sidebar/Sidebar';
import Topbar from '../../Components/Admin/Topbar/Topbar';
import './index.css'
import Storage from '../../Services/storage';


import PageNotfound from '../PageNotFound/PageNotFound';
import Home from './Home/Home';
//
import User from './User/User';
import AddUser from './User/AddUser';
import UserDetail from './User/UserDetail';
//
import Appointment from './Appointment/Appointment';
import AppointmentDetail from './Appointment/AppointmentDetail';
//
import Service from './Service/Service';
import ServiceDetail from './Service/ServiceDetail';
import AddService from './Service/AddService';
//
import Agency from './Agency/Agency'
import AddAgency from './Agency/AddAgency'
import AgencyDetail from './Agency/AgencyDetail'
//
import Staff from './Staff/Staff'
import AddStaff from './Staff/AddStaff'
import StaffDetail from './Staff/StaffDetail'


export default function Admin() {
  const admin = Storage.GetItem("user");
  return admin ? (
    admin.name == "ROLE_ADMIN" ? (
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
            <Route exact path="/admin/appointments/:appointmentId" component={AppointmentDetail} />

            <Route exact path="/admin/services" component={Service} />
            <Route exact path="/admin/services/add" component={AddService} />
            <Route exact path="/admin/services/:serviceId" component={ServiceDetail} />

            <Route exact path="/admin/agencies" component={Agency} />
            <Route exact path="/admin/agencies/add" component={AddAgency} />
            <Route exact path="/admin/agencies/:agencyId" component={AgencyDetail} />

            <Route exact path="/admin/staffs" component={Staff} />
            <Route exact path="/admin/staffs/add" component={AddStaff} />
            <Route exact path="/admin/staffs/:staffId" component={StaffDetail} />
          </Switch>
        </div>
      </div>
    ) : (<Redirect to="/" />)
  ) : (
    <Redirect to="/" />
  );
}
