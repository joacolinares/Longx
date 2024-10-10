import React from 'react';
import { Outlet } from 'react-router-dom';
  // Import the Header component
import "./Dashboard.scss"
import SidebarComponent from '../components/sidebar/SIdebar';
import HeaderComponent from '../components/Header/Header';


const DashboardComponent = () => {
  return (
    <div className="flex overflow-x-hidden main-dashboard h-full">
      {/* Sidebar Component */}
      <div className="sidebar">
        <SidebarComponent />
      </div>

      {/* Right content */}
      <div className="overflow-x-hidden right-content">
        <div className="header-bar">
          {/* Header Component */}
          <div className="w-full">
          <HeaderComponent  />
          </div>
        </div>
        <div className="header-gap"></div>

        {/* Dynamic content based on routing */}
        <div className="w-full page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
