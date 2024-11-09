import React from 'react';
import { Outlet } from 'react-router-dom';
  // Import the Header component
import "./Dashboard.scss"
import Web3SidebarComponent from '../components/sidebar/SIdebar';
import Web3HeaderComponent from '../components/Header/Header';



const Web3DashboardComponent = () => {
  return (
    <div className="flex overflow-x-hidden main-dashboard h-full">
      {/* Sidebar Component */}
      <div className="sidebar">
        <Web3SidebarComponent />
      </div>

      {/* Right content */}
      <div className="overflow-x-hidden right-content">
        <div className="header-bar">
          {/* Header Component */}
          <div className="w-full">
          <Web3HeaderComponent/>
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

export default Web3DashboardComponent;
