import React, { useContext, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";
import "./GeneralComponent.scss";
import ExchangeMoneyComponent from "./components/exchangeMoney/ExchangeMoneyComponent";
import GeneralTopbarComponent from "./components/generalTopbar/GeneralTopbarComponent";

const Web3GeneralComponent = () => {
 // Static data instead of context data
 const mainBalance = 1000; // Static balance
 const usdtPrice = 35.35; // Static USDT price
 const clpPrice = 950; // Static CLP price
 const wallet = {
   usdt: 500,
   clp: 2000,
   btc: 0.05
 }; // Example static wallet

 const [transactions, setTransactions] = useState([]);
 const [currencyDrop, setCurrencyDrop] = useState(false);
 const [clip, setClip] = useState(true);
 const [usdtDrop, setUsdtDrop] = useState(false);
 const [currentDrop, setCurrentDrop] = useState({
   name: "CLP",
   pic: "/assets/logos/chile.svg",
 });
 const navigate = useNavigate();

 const handleCurrencyDrop = (currency, pic) => {
   setCurrentDrop({ name: currency, pic });
   setClip(currency === "CLP");
   setUsdtDrop(currency === "USDT");
   setCurrencyDrop(false);
 };

 const handleNavigate = (path) => {
   navigate(path);
 };

 useEffect(() => {
   // Static transactions data
   setTransactions([
     { type: "Deposit", amount: 500, time: "Depositar", status: "Canceled" },
     { type: "Withdraw", amount: 300, time: "06:01 AM", status: "Pending" },
     { type: "Withdraw", amount: 150, time: "06:01 AM", status: "Canceled" },
     { type: "Sent USDT", amount: 200, time: "05:34 PM", status: "Done" },
   ]);
 }, []);

 const navigateToBuySell = () => {
   navigate("/dashboard/buy-sell");
 };

 const navigateToPortfolio = () => {
   navigate("/dashboard/wallet");
 };

 const navigateToHistory = () => {
   navigate("/dashboard/historial-transacciones");
 };

 const navigateToWallet = (e) => {
   navigate(`/dashboard/wallet/${e}`);
 };

  return (
    <>
     <div className="desktop-version">
      <div className="main p-5">
        {/* top-bar */}
        <GeneralTopbarComponent usdtPrice={usdtPrice} clpPrice={clpPrice} wallet={wallet} mainBalance={mainBalance} />
        <div className="statistics-area w-full">
          <div className="flex w-full">
            <div className="lg:w-7/12 2xl:w-8/12 w-3/4 md:p-2 lg:p-2 2xl:p-4 statistics-left">
              <div className="statistics-content">
                <div className="top-bar flex justify-between p-5">
                  <h3 className="title">Estadisticas</h3>
                  <div className="flex items-center chart-btn relative">
                    <button>
                      <img src="/assets/icons/candle.svg" alt="" />
                    </button>
                    <button
                      onClick={() => setCurrencyDrop(!currencyDrop)}
                      className="currencyBtn flex items-center capitalize"
                    >
                      <img src={currentDrop.pic} alt="" />
                      <span>{currentDrop.name}</span>
                    </button>
                    {currencyDrop && (
                      <div className="drop-down absolute flex-col">
                        <button
                          onClick={() =>
                            handleCurrencyDrop(
                              "CLP",
                              "/assets/logos/chile.svg"
                            )
                          }
                        >
                          CLP
                        </button>
                        <button
                          onClick={() =>
                            handleCurrencyDrop(
                              "USDT",
                              "/assets/logos/usdt.svg"
                            )
                          }
                        >
                          USDT
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-5 currency-bar">
                </div>
                {clip ? (
                  <div className="p-5 chart-bar">
                    <div className="chart-area">
                      <div className="chart-file">
                        <div id="chart">

                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-5 chart-area2">
                    <div className="chart-area2">
                      <div className="chart-file2">
                        <div id="chart">

                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="lg:w-5/12 2xl:w-4/12 md:p-2 lg:p-2 2xl:p-4 statistics-right">
              <ExchangeMoneyComponent usdtPrice={usdtPrice} clpPrice={clpPrice} wallet={wallet} mainBalance={mainBalance} />
            </div>
          </div>
        </div>
        
      <div className="general-portfolio">
      <div className="flex flex-wrap">
        <div className="w-8/12 p-4">
          <div className="p-4 general-left">
            <div className="flex items-center justify-between w-full">
              <div>
                <h2>Portafolio General</h2>
              </div>
              <div>
                <div className="flex items-center justify-between view">
                  <button type="button" className="btn" onClick={navigateToPortfolio}>
                    View More
                  </button>
                </div>
              </div>
            </div>
            <div className="p-0 sm:p-4 portfolio-table">
              {/* Table Head */}
              <div className="flex items-center py-4 t-head">
                <div className="w-3/12"></div>
                <div className="w-2/12 text-center">
                  <p>Total</p>
                </div>
                <div className="w-2/12">
                  <p>Change</p>
                </div>
                <div className="w-2/12">
                  <p>Estado</p>
                </div>
                <div className="w-2/12">
                  <p>Estado</p>
                </div>
                <div className="w-1/12"></div>
              </div>
              {/* Chile Portfolio */}
              <div className="flex items-center mb-3 table-bodys">
                <div className="w-3/12">
                  <div className="flag-box">
                    <div className="flex items-center justify-start top-content">
                      <button type="button" className="btn">
                        <img src="/assets/flag/chile.svg" alt="chile" />
                      </button>
                      <div className="px-4">
                        <h3>Total CLP</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-2/12">
                  <div className="total">
                    <p>0</p>
                  </div>
                </div>
                <div className="w-2/12">
                  <div className="mx-auto Change">
                    <p>+16.78 %</p>
                  </div>
                </div>
                <div className="w-2/12 text-center">
                  <div className="Estado1 cursor-pointer" onClick={() => navigateToWallet("deposit/clp")}>
                    <p>Depositar</p>
                  </div>
                </div>
                <div className="w-2/12 text-center">
                  <div className="Estado2 cursor-pointer" onClick={() => navigateToWallet("withdraw/clp")}>
                    <p>Retirar</p>
                  </div>
                </div>
                <div className="w-1/12">
                  <div className="action-btn">
                    <button type="button">
                      <i className="fa-solid fa-ellipsis"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* USDT Portfolio */}
              <div className="flex items-center mb-3 table-bodys">
                <div className="w-3/12">
                  <div className="flag-box">
                    <div className="flex items-center justify-start top-content">
                      <button type="button" className="btn">
                        <img src="/assets/logos/usdt.svg" alt="usdt" />
                      </button>
                      <div className="px-4">
                        <h3>Total USDT</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-2/12">
                  <div className="total">
                    <p>0</p>
                  </div>
                </div>
                <div className="w-2/12">
                  <div className="mx-auto Change active">
                    <p>+16.78 %</p>
                  </div>
                </div>
                <div className="w-2/12 text-center">
                  <div className="Estado1 cursor-pointer" onClick={() => navigateToWallet("deposit/usdt")}>
                    <p>Depositar</p>
                  </div>
                </div>
                <div className="w-2/12 text-center">
                  <div className="Estado2 cursor-pointer" onClick={() => navigateToWallet("withdraw/usdt")}>
                    <p>Retirar</p>
                  </div>
                </div>
                <div className="w-1/12">
                  <div className="action-btn">
                    <button type="button">
                      <i className="fa-solid fa-ellipsis"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* BTC Portfolio */}
              <div className="flex items-center table-bodys">
                <div className="w-3/12">
                  <div className="flag-box">
                    <div className="flex items-center justify-start top-content">
                      <button type="button" className="btn">
                        <img src="/assets/flag/btc.svg" alt="btc" />
                      </button>
                      <div className="px-4">
                        <h3>Total BTC</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-2/12">
                  <div className="total">
                    <p>0</p>
                  </div>
                </div>
                <div className="w-2/12">
                  <div className="mx-auto Change">
                    <p>+16.78 %</p>
                  </div>
                </div>
                <div className="w-2/12 text-center">
                  <div className="Estado1 cursor-pointer" onClick={() => navigateToWallet("deposit/btc")}>
                    <p>Depositar</p>
                  </div>
                </div>
                <div className="w-2/12 text-center">
                  <div className="Estado2 cursor-pointer" onClick={() => navigateToWallet("withdraw/btc")}>
                    <p>Retirar</p>
                  </div>
                </div>
                <div className="w-1/12">
                  <div className="action-btn">
                    <button type="button">
                      <i className="fa-solid fa-ellipsis"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Transactions Section */}
        <div className="w-4/12 p-4">
          <div className="flex flex-col justify-between p-4 general-right">
            <div className="flex items-center justify-between w-full">
              <div>
                <h2>Transacciónes</h2>
              </div>
              <div>
                <div className="flex items-center justify-between view">
                  <button type="button" className="btn" onClick={navigateToHistory}>
                    View More
                  </button>
                </div>
              </div>
            </div>
            <div className="p-0 sm:p-4 transactions-table">
              {transactions.map((transaction, index) => (
                <div className="flex items-center mb-5 table-bodys" key={index}>
                  <div className="w-4/12">
                    {transaction.type === "Deposit" ? (
                      <div className="deposit">
                        <div className="flex items-center">
                          <div className="deposit-btn">
                            <i className="fa-solid fa-arrow-down"></i>
                          </div>
                          <p>{transaction.type}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="withdraw">
                        <div className="flex items-center">
                          <div className="withdraw-btn">
                            <i className="fa-solid fa-arrow-up"></i>
                          </div>
                          <p>{transaction.type}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="w-2/12">
                    <div className="total">
                      <p>{transaction.amount}</p>
                    </div>
                  </div>
                  <div className="w-3/12 text-center">
                    <div className="time">
                      <p>{transaction.time}</p>
                    </div>
                  </div>
                  <div className="w-3/12 text-center">
                    <div className={`${transaction.status.toLowerCase()} status`}>
                      <p>{transaction.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>

    <div className="mobile-version">
      <div className="main p-5">
        {/* top-bar */}
        <GeneralTopbarComponent usdtPrice={usdtPrice} clpPrice={clpPrice} wallet={wallet} mainBalance={mainBalance} />
        <div className="statistics-area w-full">
          <div className="flex flex-wrap statistics-box">
            <div className="md:p-2 lg:p-2 2xl:p-4 statistics-left">
              <div className="statistics-content">
                <div className="top-bar flex justify-between p-5">
                  <h3 className="title">Estadisticas</h3>
                  <div className="flex items-center chart-btn relative">
                    <button>
                      <img src="/assets/icons/candle.svg" alt="" />
                    </button>
                    <button
                      onClick={() => setCurrencyDrop(!currencyDrop)}
                      className="currencyBtn flex items-center capitalize"
                    >
                      <img src={currentDrop.pic} alt="" />
                      <span>{currentDrop.name}</span>
                    </button>
                    {currencyDrop && (
                      <div className="drop-down absolute flex-col">
                        <button
                          onClick={() =>
                            handleCurrencyDrop(
                              "CLP",
                              "/assets/logos/chile.svg"
                            )
                          }
                        >
                          CLP
                        </button>
                        <button
                          onClick={() =>
                            handleCurrencyDrop(
                              "USDT",
                              "/assets/logos/usdt.svg"
                            )
                          }
                        >
                          USDT
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-5 currency-bar">
  
                </div>
                {clip ? (
                  <div className="p-5 chart-bar">
                    <div className="chart-area">
                      <div className="chart-file">
                        <div id="chart">

                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-5 chart-area2">
                    <div className="chart-area2">
                      <div className="chart-file2">
                        <div id="chart">

                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="lg:w-5/12 2xl:w-4/12 md:p-2 lg:p-2 2xl:p-4 statistics-right">
              <ExchangeMoneyComponent usdtPrice={usdtPrice} clpPrice={clpPrice} wallet={wallet} mainBalance={mainBalance} />
            </div>
          </div>

          <div className="general-portfolio">
            <div className="portfolio-table">
              {transactions.map((transaction, index) => (
                <div key={index} className="table-bodys">
                  <div>
                    {transaction.type === "Deposit" ? (
                      <div className="deposit">
                        <div className="flex items-center">
                          <div className="deposit-btn">
                            <i className="fa-solid fa-arrow-down"></i>
                          </div>
                          <p>{transaction.type}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="withdraw">
                        <div className="flex items-center">
                          <div className="withdraw-btn">
                            <i className="fa-solid fa-arrow-up"></i>
                          </div>
                          <p>{transaction.type}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <p>{transaction.amount}</p>
                  </div>
                  <div>
                    <p>{transaction.time}</p>
                  </div>
                  <div>
                    <p className={`${transaction.status.toLowerCase()} status`}>
                      {transaction.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      <div className="general-portfolio">
      <div className="flex flex-wrap">
        <div className="w-full py-4">
          <div className="p-4 general-left">
            <div className="flex items-center justify-between w-full">
              <div>
                <h2>Portafolio General</h2>
              </div>
              <div>
                <div className="flex items-center justify-between view">
                  <button type="button" className="btn" onClick={navigateToPortfolio}>
                    View More
                  </button>
                </div>
              </div>
            </div>
            <div className="p-0 sm:p-4 portfolio-table">
              {/* Table Head */}
              <div className="flex items-center py-4 t-head">
                <div className="w-3/12"></div>
                <div className="w-2/12 text-center">
                  <p>Total</p>
                </div>
                <div className="w-2/12">
                  <p>Change</p>
                </div>
                <div className="w-2/12">
                  <p>Estado</p>
                </div>
                <div className="w-2/12">
                  <p>Estado</p>
                </div>
                <div className="w-1/12"></div>
              </div>
              {/* Chile Portfolio */}
              <div className="flex items-center mb-3 table-bodys">
                <div className="w-3/12">
                  <div className="flag-box">
                    <div className="flex items-center justify-start top-content">
                      <button type="button" className="btn">
                        <img src="/assets/flag/chile.svg" alt="chile" />
                      </button>
                      <div className="px-4">
                        <h3>Total CLP</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-2/12">
                  <div className="total">
                    <p>0</p>
                  </div>
                </div>
                <div className="w-2/12">
                  <div className="mx-auto Change">
                    <p>+16.78 %</p>
                  </div>
                </div>
                <div className="w-2/12 text-center">
                  <div className="Estado1 cursor-pointer" onClick={() => navigateToWallet("deposit/clp")}>
                    <p>Depositar</p>
                  </div>
                </div>
                <div className="w-2/12 text-center">
                  <div className="Estado2 cursor-pointer" onClick={() => navigateToWallet("withdraw/clp")}>
                    <p>Retirar</p>
                  </div>
                </div>
                <div className="w-1/12">
                  <div className="action-btn">
                    <button type="button">
                      <i className="fa-solid fa-ellipsis"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* USDT Portfolio */}
              <div className="flex items-center mb-3 table-bodys">
                <div className="w-3/12">
                  <div className="flag-box">
                    <div className="flex items-center justify-start top-content">
                      <button type="button" className="btn">
                        <img src="/assets/logos/usdt.svg" alt="usdt" />
                      </button>
                      <div className="px-4">
                        <h3>Total USDT</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-2/12">
                  <div className="total">
                    <p>0</p>
                  </div>
                </div>
                <div className="w-2/12">
                  <div className="mx-auto Change active">
                    <p>+16.78 %</p>
                  </div>
                </div>
                <div className="w-2/12 text-center">
                  <div className="Estado1 cursor-pointer" onClick={() => navigateToWallet("deposit/usdt")}>
                    <p>Depositar</p>
                  </div>
                </div>
                <div className="w-2/12 text-center">
                  <div className="Estado2 cursor-pointer" onClick={() => navigateToWallet("withdraw/usdt")}>
                    <p>Retirar</p>
                  </div>
                </div>
                <div className="w-1/12">
                  <div className="action-btn">
                    <button type="button">
                      <i className="fa-solid fa-ellipsis"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* BTC Portfolio */}
              <div className="flex items-center table-bodys">
                <div className="w-3/12">
                  <div className="flag-box">
                    <div className="flex items-center justify-start top-content">
                      <button type="button" className="btn">
                        <img src="/assets/flag/btc.svg" alt="btc" />
                      </button>
                      <div className="px-4">
                        <h3>Total BTC</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-2/12">
                  <div className="total">
                    <p>0</p>
                  </div>
                </div>
                <div className="w-2/12">
                  <div className="mx-auto Change">
                    <p>+16.78 %</p>
                  </div>
                </div>
                <div className="w-2/12 text-center">
                  <div className="Estado1 cursor-pointer" onClick={() => navigateToWallet("deposit/btc")}>
                    <p>Depositar</p>
                  </div>
                </div>
                <div className="w-2/12 text-center">
                  <div className="Estado2 cursor-pointer" onClick={() => navigateToWallet("withdraw/btc")}>
                    <p>Retirar</p>
                  </div>
                </div>
                <div className="w-1/12">
                  <div className="action-btn">
                    <button type="button">
                      <i className="fa-solid fa-ellipsis"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Transactions Section */}
        <div className="w-full py-4">
          <div className="flex flex-col justify-between p-4 general-right">
            <div className="flex items-center justify-between w-full">
              <div>
                <h2>Transacciónes</h2>
              </div>
              <div>
                <div className="flex items-center justify-between view">
                  <button type="button" className="btn" onClick={navigateToHistory}>
                    View More
                  </button>
                </div>
              </div>
            </div>
            <div className="p-0 sm:p-4 transactions-table">
              {transactions.map((transaction, index) => (
                <div className="flex items-center mb-5 table-bodys" key={index}>
                  <div className="w-4/12">
                    {transaction.type === "Deposit" ? (
                      <div className="deposit">
                        <div className="flex items-center">
                          <div className="deposit-btn">
                            <i className="fa-solid fa-arrow-down"></i>
                          </div>
                          <p>{transaction.type}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="withdraw">
                        <div className="flex items-center">
                          <div className="withdraw-btn">
                            <i className="fa-solid fa-arrow-up"></i>
                          </div>
                          <p>{transaction.type}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="w-2/12">
                    <div className="total">
                      <p>{transaction.amount}</p>
                    </div>
                  </div>
                  <div className="w-3/12 text-center">
                    <div className="time">
                      <p>{transaction.time}</p>
                    </div>
                  </div>
                  <div className="w-3/12 text-center">
                    <div className={`${transaction.status.toLowerCase()} status`}>
                      <p>{transaction.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
    </>
  );
};

export default Web3GeneralComponent;
