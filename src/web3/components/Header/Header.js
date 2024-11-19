import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Header.scss"
import { AuthContext } from '../../../context/AuthContext';
import { ConnectButton } from 'thirdweb/react';
import { optimism } from 'thirdweb/chains';
import { client } from "../../../client";


const Web3HeaderComponent = () => {
  const [notificationBar, setNotificationBar] = useState(false);
  const {user} =useContext(AuthContext)
  const navigate = useNavigate();


  const toggleNotificationBar = () => {
    setNotificationBar(!notificationBar);
  };

  const profileButton = () => {
    navigate('/dashboard/profile');
  };

  return (
    <>
      {/* Desktop Version */}
      <div className="desktop-version">
        <div className="w-full header-content">
          <div className="flex items-center justify-between w-full px-10">
            <div className="w-2/6 mx-2 user-name">
              <h2>
                Bienvenido, <span>{user?.name}</span>
              </h2>
            </div>
            <div className="w-2/6 mx-2 search-content">
              <div className="w-full search-bar">
                <div className="relative w-full form-group">
                  <input
                    type="text"
                    className="px-6 form-control"
                    name="search"
                    id="search"
                    placeholder="Search..."
                  />
                  <button type="button" className="absolute right-0 h-full px-5 text-white button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative w-2/6 mx-2 profile-details">
              <div className="flex items-center justify-end profile-details">
                <div className="mx-5 notification">
                  <button type="button" onClick={toggleNotificationBar}>
                    <img src="/assets/icons/notification.svg" alt="notification" />
                    <span className="notification-badge"></span>
                  </button>
                </div>
                {/* <div className="profile">
                  <button type="button" className="flex items-center p-4 cursor-pointer" onClick={profileButton}>
                    <div className="mx-3 info">
                      <h2>{user?.name}</h2>
                      <p>{user?.email}</p>
                    </div>
                    <button className="mx-2 text-white" type="button">
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                  </button>
                </div> */}

                <ConnectButton
              client={client}
              chain={optimism}
                  />   
              </div>
              {notificationBar && (
                <div className={`notification-area ${notificationBar ? 'active' : ''}`}>
                  <div className="flex items-center justify-between p-5 top-bar">
                    <div><h2>Notificaciones</h2></div>
                    <div>
                      <button type="button" onClick={() => setNotificationBar(false)}>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  </div>
                  {/* Notification items */}
                  {[1, 2, 3, 4].map((item, index) => (
                    <div key={index} className="p-5 content">
                      <div className="flex items-center justify-between item">
                        <div>
                          <h4>Lorem Ipsum</h4>
                          <p className="pt-2">Lorem Ipsum</p>
                        </div>
                        <div>
                          <div className="status-btn">
                            <button type="button" className={index % 2 === 0 ? 'buy' : 'sell'}>
                              +16.78 %
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="mobile-version w-full">
        <div className="w-full header-content">
          <div className="flex items-center justify-between w-full px-10">
            <div className="ml-4 search-content">
              <div className="w-full search-bar">
                <div className="relative w-full form-group">
                  <input
                    type="text"
                    className="px-6 form-control"
                    name="search"
                    id="search"
                    placeholder="Search..."
                  />
                  <button type="button" className="absolute right-0 h-full px-5 text-white button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative mx-2 profile-details">
              <div className="flex items-center justify-end profile-details">
                <div className="w-2/12 notification">
                  <button type="button" onClick={toggleNotificationBar}>
                    <img src="/assets/icons/notification.svg" alt="notification" />
                    <span className="notification-badge"></span>
                  </button>
                </div>
                {/* <div className="profile w-10/12">
                  <button type="button" className="flex items-center p-4 cursor-pointer" onClick={profileButton}>
                    <div className="mx-3 info">
                      <h2>{user?.name}</h2>
                      <p>{user?.email}</p>
                    </div>
                    <button className="mx-2 text-white" type="button">
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                  </button>
                </div> */}

                <ConnectButton
              client={client}
              chain={optimism}
                  />   

              </div>

              {notificationBar && (
                <div className={`notification-area ${notificationBar ? 'active' : ''}`}>
                  <div className="flex items-center justify-between p-5 top-bar">
                    <div><h2>Notificaciones</h2></div>
                    <div>
                      <button type="button" onClick={() => setNotificationBar(false)}>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  </div>
                  {/* Notification items */}
                  {[1, 2, 3, 4].map((item, index) => (
                    <div key={index} className="p-5 content">
                      <div className="flex items-center justify-between item">
                        <div>
                          <h4>Lorem Ipsum</h4>
                          <p className="pt-2">Lorem Ipsum</p>
                        </div>
                        <div>
                          <div className="status-btn">
                            <button type="button" className={index % 2 === 0 ? 'buy' : 'sell'}>
                              +16.78 %
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Web3HeaderComponent;
