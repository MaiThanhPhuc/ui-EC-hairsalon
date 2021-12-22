import React from 'react'

import {Link} from "react-router-dom";
import {
  LineStyle,
  EventAvailable,
  PermIdentity,
  Storefront,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  ListAlt,
  Menu,
} from "@mui/icons-material";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/admin" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/admin/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Customer
              </li>
            </Link>
            <Link to="/admin/appointments" className="link">
              <li className="sidebarListItem">
                <EventAvailable className="sidebarIcon" />
                Appointment
              </li>
            </Link>
            <Link to="/admin/services" className="link">
              <li className="sidebarListItem">
                <Menu className="sidebarIcon" />
                Services
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <Link to="/admin/staffs" className="link">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Manage Staff
              </li>
            </Link>
            <Link to="/admin/agencys" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Agency
              </li>
            </Link>
            <Link to="/admin/shifts" className="link">
              <li className="sidebarListItem">
                <ListAlt className="sidebarIcon" />
                Staff Shift
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
