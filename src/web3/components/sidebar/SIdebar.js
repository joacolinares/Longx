import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./Sidebar.scss";
import { AuthContext } from '../../../context/AuthContext';

const Web3SidebarComponent = () => {
  const { logout } = useContext(AuthContext);
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const  navigate = useNavigate()
  const MenuData = [
    { name: "General", url: "general", icon: "/assets/icons/general.svg" },
    { name: "Billetera", url: "wallet", icon: "/assets/icons/Billetera.svg" },
    { name: "Perfil", url: "profile", icon: "/assets/icons/Perfil.svg" },
    { name: "Historial de Transacciones", url: "history", icon: "/assets/icons/HistorialDeTransacciones.svg" },
  ];

  const handleLogout = () => {
    disconnectWallet();  // Disconnect MetaMask
    logout();  // Log the user out
    localStorage.removeItem("webToken")
    navigate('/');  // Redirect the user to the login page
  };

  const disconnectWallet = async () => {
    try {
      if (window.ethereum) {
        // Clear any stored information or state related to wallet connection
        // This triggers MetaMask to request a new connection next time
        window.localStorage.removeItem("connectedAccount");
      }
      console.log("MetaMask disconnected");
    } catch (error) {
      console.error("Failed to disconnect MetaMask:", error);
    }
  };

  return (
    <>
      {/* Desktop Version */}
      <div className="desktop-version">
        <div className="sidebar-content">
          <div className="nav-bar">
            <ul className="nav">
              <li className="nav-item flrx items-center -mt-3" style={{ marginTop: '-10px', marginBottom: '30px' }}>
                <img src="/assets/longx.png" alt="longx" style={{ width: '80%' }} />
              </li>
              {MenuData.map((menu, index) => (
                <li className="nav-item" key={index}>
                  <NavLink to={menu.url} className="nav-link">
                    <img src={menu.icon} alt={menu.name} />
                    <span>{menu.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-bar-bottom">
            <div className="nav-bar">
              <ul className="nav">
                <li className="nav-item">
                  <NavLink to="support" className="nav-link">
                    <img src="/assets/icons/Support.svg" alt="Support" />
                    <span>Support</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button type="button" onClick={handleLogout} className="nav-link">
                    <img src="/assets/icons/logout.svg" alt="Logout" />
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="mobile-version">
        <button type="button" className="text-white menu-bar" onClick={() => setMobileSidebar(true)}>
          <i className="fa-solid fa-bars"></i>
        </button>
        {mobileSidebar && (
          <div className="sidebar-content fixed">
            <div className="nav-bar relative">
              <ul className="nav">
                <li className="nav-item flrx items-center -mt-3" style={{ marginTop: '0', marginBottom: '32px' }}>
                  <img src="assets/longx.png" alt="longx" style={{ width: '60%' }} className="my-3 block" />
                </li>
                {MenuData.map((menu, index) => (
                  <li className="nav-item" key={index}>
                    <NavLink to={menu.url} className={({ isActive, isPending }) =>
                        isPending ? "pending " : isActive ? "active nav-link" : "nav-link"
                    }>
                    <img src={menu.icon} alt={menu.name} />
                     <span>{menu.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
              <button className="btn absolute top-5 right-5 z-10 text-white text-xl" type="button" onClick={() => setMobileSidebar(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="nav-bar-bottom">
              <div className="nav-bar">
                <ul className="nav">
                  <li className="nav-item">
                    <NavLink to="support" className="nav-link">
                      <img src="/assets/icons/Support.svg" alt="Support" />
                      <span>Support</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <button type="button" onClick={handleLogout} className="nav-link">
                      <img src="/assets/icons/logout.svg" alt="Logout" />
                      <span>Logout</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Web3SidebarComponent;
