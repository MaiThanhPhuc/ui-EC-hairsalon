import React from "react";

import { Link } from "react-router-dom";

import "./Topbar.css"


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/admin">
            <span className="logo">Admin Page</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
