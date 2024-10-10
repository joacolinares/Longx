import React, { useState } from 'react';

import './TransactionHistory.scss'; // Import your custom styles if needed

const TransactionHistory = () => {
  const [BankName, setBankName] = useState("TRANSACCIONES");
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(null);

  const BankList = [
    { name: "TRANSACCIONES" },
    { name: "Transacciones OTC" },
    { name: "Transacciones Marketplace" }
  ];

  const history = [
    {
      id: 1,
      flag: "/assets/flag/chile.svg",
      coinName: "Pesos Chilenos",
      coinSubName: "CLP",
      type: "Buy",
      typeBg: "buyC",
      date: "July 7 2023  -  2:28 AM",
      amount: "0 USDT",
      state: "Canceled",
      stateC: "canceledC"
    },
    {
      id: 2,
      flag: "/assets/logos/usdt.svg",
      coinName: "Tether",
      coinSubName: "USDT",
      type: "Sell",
      typeBg: "sellC",
      date: "July 7 2023  -  2:28 AM",
      amount: "0 USDT",
      state: "Pending",
      stateC: "pendingC"
    },
    //... more history data here
  ];

  const BankNameChange = (event) => {
    setBankName(event.target.innerText);
    setIsOpen(false);
  };

  const handleDateInput = (date) => {
    if (date) {
      const month = date.toLocaleString('default', { month: 'short' });
      const day = date.getDate();
      const year = date.getFullYear();
      setCurrentDate(`${month} ${day}, ${year}`);
    } else {
      setCurrentDate(null);
    }
  };

  const filterHistory = () => {
    if (!currentDate) return history;

    return history.filter(item => {
      const itemDate = new Date(item.date);
      const formattedItemDate = `${itemDate.toLocaleString('default', { month: 'short' })} ${itemDate.getDate()}, ${itemDate.getFullYear()}`;
      return formattedItemDate === currentDate;
    });
  };

  return (
    <>
        <div className="desktop-version">
      <div className="p-5 overflow-hidden main">
        <div className="p-7 transaction-history">
          {/* Top bar */}
          <div className="top-bar">
            <h2 className="py-4">Transaction History</h2>
            <div className="flex items-center filter">
              <div className="relative w-1/4 mr-5 select-btn">
                <button type="button" className="flex items-center justify-between w-full px-4 rounded-lg btn" onClick={() => setIsOpen(!isOpen)}>
                  <span>{BankName}</span>
                  <i className={`fa-solid ${isOpen ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                </button>
                <div className={`absolute left-0 right-0 w-full p-4 rounded-lg dropdown-menu SelectBank-drop ${isOpen ? 'active' : ''}`}>
                  {BankList.map((item, index) => (
                    <button key={index} className="dropdown-item" type="button" onClick={BankNameChange}>{item.name}</button>
                  ))}
                </div>
              </div>

              <div class="w-1/4 select-btn">
                    <button type="button" class="flex items-center justify-between w-full px-4 rounded-lg btn date-btn">
                      <input type='date' placeholder="24-10-2024" className="w-full h-3/4 focus-within:border-0 px-4 bg-transparent" />
                      {/* <span></span>
                      <div class="text-white">
                        <i class="fa-regular fa-calendar"></i>
                      </div> */}
                    </button>
                </div>
            </div>
          </div>

          {/* Transaction Table */}
          <div className="py-8 transaction-table">
            <div className="flex transaction-table-head">
              <div className="w-3/12 Coin">
                <p>Coin</p>
              </div>
              <div className="w-3/12 text-center Type">
                <p>Type</p>
              </div>
              <div className="w-2/12 text-center Date">
                <p>Date</p>
              </div>
              <div className="w-2/12 text-center Amount">
                <p>Amount</p>
              </div>
              <div className="w-1/12 text-center State">
                <p>State</p>
              </div>
              <div className="w-1/12 text-center State"></div>
            </div>
            {filterHistory().map(item => (
              <div key={item.id} className="flex items-center py-5 transaction-table-body">
                <div className="w-3/12 text-center coin">
                  <div className="flex">
                    <div className="flex items-center justify-center coin-box">
                      <img src={item.flag} alt={item.coinName} />
                    </div>
                    <div className="pl-3 coin-content">
                      <h4>{item.coinName}</h4>
                      <p>{item.coinSubName}</p>
                    </div>
                  </div>
                </div>
                <div className="w-3/12 text-center type">
                  <p className={item.typeBg}>{item.type}</p>
                </div>
                <div className="w-2/12 text-center Date">
                  <p>{item.date}</p>
                </div>
                <div className="w-2/12 text-center Amount">
                  <p>{item.amount}</p>
                </div>
                <div className="w-1/12 text-center State">
                  <p className={item.stateC}>{item.state}</p>
                </div>
                <div className="w-1/12 text-center State">
                  <button type="button">
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="py-6 pagination">
          <div className="flex">
            <div className="w-5/12">
              <div className="flex items-center">
                <p className="mx-4 showing">Showing</p>
                <div className="form-group">
                  <button className="pageBtn">
                    <span className="mr-4">7</span>
                    <i className="fa-solid fa-angle-down"></i>
                  </button>
                  <div className="menu">
                    <button>10</button>
                    <button>20</button>
                  </div>
                </div>
                <p className="mx-4 showing">entries of 430 entries</p>
              </div>
            </div>
            <div className="w-7/12">
              <div className="flex items-center justify-end page-btn">
                <button type="button" className="mx-2">
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <button type="button" className="mx-2 active">1</button>
                <button type="button" className="mx-2">2</button>
                <button type="button" className="mx-2">3</button>
                <button type="button" className="mx-2">...</button>
                <button type="button" className="mx-2">20</button>
                <button type="button" className="mx-2">
                  <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mobile-version">
      <div className="p-5 overflow-hidden main">
        <div className="p-7 transaction-history">
          {/* Top bar */}
          <div className="top-bar">
            <h2 className="py-4">Transaction History</h2>
            <div className="flex items-center filter">
              <div className="relative w-1/4 mr-5 select-btn">
                <button type="button" className="flex items-center justify-between w-full px-4 rounded-lg btn" onClick={() => setIsOpen(!isOpen)}>
                  <span>{BankName}</span>
                  <i className={`fa-solid ${isOpen ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                </button>
                <div className={`absolute left-0 right-0 w-full p-4 rounded-lg dropdown-menu SelectBank-drop ${isOpen ? 'active' : ''}`}>
                  {BankList.map((item, index) => (
                    <button key={index} className="dropdown-item" type="button" onClick={BankNameChange}>{item.name}</button>
                  ))}
                </div>
              </div>

              <div class="w-1/4 select-btn">
                    <button type="button" class="flex items-center justify-between w-full px-4 rounded-lg btn date-btn">
                      <input type='date' placeholder="24-10-2024" className="w-full h-3/4 focus-within:border-0 px-4 bg-transparent" />
                      {/* <span></span>
                      <div class="text-white">
                        <i class="fa-regular fa-calendar"></i>
                      </div> */}
                    </button>
                </div>
            </div>
          </div>

          {/* Transaction Table */}
          <div className="py-8 transaction-table">
            <div className="flex transaction-table-head">
              <div className="w-3/12 Coin">
                <p>Coin</p>
              </div>
              <div className="w-3/12 text-center Type">
                <p>Type</p>
              </div>
              <div className="w-2/12 text-center Date">
                <p>Date</p>
              </div>
              <div className="w-2/12 text-center Amount">
                <p>Amount</p>
              </div>
              <div className="w-1/12 text-center State">
                <p>State</p>
              </div>
              <div className="w-1/12 text-center State"></div>
            </div>
            {filterHistory().map(item => (
              <div key={item.id} className="flex items-center py-5 transaction-table-body">
                <div className="w-3/12 text-center coin">
                  <div className="flex">
                    <div className="flex items-center justify-center coin-box">
                      <img src={item.flag} alt={item.coinName} />
                    </div>
                    <div className="pl-3 coin-content">
                      <h4>{item.coinName}</h4>
                      <p>{item.coinSubName}</p>
                    </div>
                  </div>
                </div>
                <div className="w-3/12 text-center type">
                  <p className={item.typeBg}>{item.type}</p>
                </div>
                <div className="w-2/12 text-center Date">
                  <p>{item.date}</p>
                </div>
                <div className="w-2/12 text-center Amount">
                  <p>{item.amount}</p>
                </div>
                <div className="w-1/12 text-center State">
                  <p className={item.stateC}>{item.state}</p>
                </div>
                <div className="w-1/12 text-center State">
                  <button type="button">
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="py-6 pagination">
          <div className="flex">
            <div className="w-5/12">
              <div className="flex items-center">
                <p className="mx-4 showing">Showing</p>
                <div className="form-group">
                  <button className="pageBtn">
                    <span className="mr-4">7</span>
                    <i className="fa-solid fa-angle-down"></i>
                  </button>
                  <div className="menu">
                    <button>10</button>
                    <button>20</button>
                  </div>
                </div>
                <p className="mx-4 showing">entries of 430 entries</p>
              </div>
            </div>
            <div className="w-7/12">
              <div className="flex items-center justify-end page-btn">
                <button type="button" className="mx-2">
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <button type="button" className="mx-2 active">1</button>
                <button type="button" className="mx-2">2</button>
                <button type="button" className="mx-2">3</button>
                <button type="button" className="mx-2">...</button>
                <button type="button" className="mx-2">20</button>
                <button type="button" className="mx-2">
                  <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default TransactionHistory;
