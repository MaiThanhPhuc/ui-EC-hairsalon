import React from 'react'
import FeaturedInfo from "../../Components/Admin/featuredInfo/FeaturedInfo";
import Topbar from '../../Components/Admin/topbar/Topbar';

export default function Admin() {
  return (
    <>
      <Topbar/>
      <div className="home">
        <FeaturedInfo />
      </div>
      
    </>
  );
}
