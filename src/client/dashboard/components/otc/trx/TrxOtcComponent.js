import React, { useState, useEffect, useContext } from "react";
import ApexCharts from "react-apexcharts";
import { useNavigate } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import "./TrxOtcComponent.scss";
import { AuthContext } from "../../../../../context/AuthContext";
const TrxOtcComponent = () => {
  const navigate = useNavigate();
  const { user ,cryptoPrice} =
  useContext(AuthContext);
  const  mainBalance = user.balance
  const usdtPrice = cryptoPrice.usdtPrice;
  const clpPrice = cryptoPrice.clpPrice;
  const wallet =user.wallet
  const [currencyDrop, setCurrencyDrop] = useState(false);
  const [visible, setVisible] = useState(true);
  const [totalBalance, setTotalBalance] = useState("");
  const [compareUsdt, setCompareUsdt] = useState("");
  const [compareClp, setCompareClp] = useState("");
  const [searching, setSearching] = useState("");
  const [MainBalance, setMainBalance] = useState("");
  const [GetBalance, setGetBalance] = useState(0);
  const [IsSearch, setIsSearch] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [clipboardText, setClipboardText] = useState("RED TRON TRC-20");
  const [OTCstep1, setOTCstep1] = useState(true);
  const [OTCstep2, setOTCstep2] = useState(false);
  const [Method, setMethod] = useState({
    name: "Seleccionar método",
    pic: "/assets/flag/chile.svg",
  });
  const [isOpen, setIsOpen] = useState(false);

  const currentSearch = {
    icon: "/assets/flag/Injective.svg",
    title: "Injective",
    subtitle: "INJ",
  };

  const searchRouting = [
    {
      id: 1,
      icon: "/assets/flag/chile.svg",
      title: "Pesos Chilenos",
      subtitle: "CLP",
      isActive: false,
    },
    {
      id: 2,
      icon: "/assets/flag/usdt.svg",
      title: "Tether",
      subtitle: "USDT",
      isActive: false,
    },
    {
      id: 3,
      icon: "/assets/flag/btc.svg",
      title: "Bitcoin",
      subtitle: "BTC",
      isActive: false,
    },
    {
      id: 4,
      icon: "/assets/flag/Injective.svg",
      title: "Injective",
      subtitle: "INJ",
      isActive: false,
    },
    {
      id: 5,
      icon: "/assets/flag/tronix.svg",
      title: "Tronix",
      subtitle: "TRX",
      isActive: false,
    },
    {
      id: 6,
      icon: "/assets/flag/eth.svg",
      title: "Ethereum",
      subtitle: "ETH",
      isActive: false,
    },
  ];

  const history = [
    {
      id: 1,
      flag: "/assets/flag/chile.svg",
      coinName: "CLP",
      type: "Buy",
      typeBg: "buyC",
      state: "Canceled",
      stateC: "canceledC",
      time: "06.01 AM",
    },
    {
      id: 2,
      flag: "/assets/logos/usdt.svg",
      coinName: "USDT",
      type: "Sell",
      typeBg: "sellC",
      state: "Pending",
      stateC: "pendingC",
      time: "06.01 AM",
    },
    {
      id: 3,
      flag: "/assets/flag/chile.svg",
      coinName: "CLP",
      type: "Exchange",
      typeBg: "exchangeC",
      state: "Done",
      stateC: "doneC",
      time: "06.01 AM",
    },
  ];

  const chartOptions = {
    series: [60, 40],
    chart: {
      type: "donut",
      width: "250px",
      height: "250px",
    },
    legend: {
      show: false,
    },
    stroke: {
      colors: ["transparent", "transparent"],
    },
    tooltip: {
      enabled: false,
    },
    labels: ["Vender", "Comprar"],
    fill: {
      colors: ["rgba(45, 45, 60, 1)", "#C20505"],
    },
  };

  const chartOptions2 = {
    series: [60, 40],
    chart: {
      type: "donut",
      width: "250px",
      height: "250px",
    },
    legend: {
      show: false,
    },
    stroke: {
      colors: ["transparent", "transparent"],
    },
    tooltip: {
      enabled: false,
    },
    labels: ["Vender", "Comprar"],
    fill: {
      colors: ["rgba(45, 45, 60, 1)", "rgba(8, 132, 50, 1)"],
    },
  };

  const searchModel = (e) => {
    searchRouting.forEach((element) => {
      if (e.id === element.id) {
        e.isActive = !e.isActive;
        navigate(`/dashboard/otc/${e.subtitle.toLowerCase()}`);
        setIsSearch(false);
      } else {
        element.isActive = false;
      }
    });
  };

  const withdraw = () => {
    navigate(
      `/dashboard/withdraw/${currentSearch.subtitle.toLowerCase()}`
    );
  };

  const deposit = () => {
    navigate(
      `/dashboard/deposit/${currentSearch.subtitle.toLowerCase()}`
    );
  };

  const compareUsdtPrice = (e) => {
    const inputValue = parseFloat(e.target.value);
    if (!isNaN(inputValue)) {
      const balance = inputValue * 0.3;
      const currentUsdt = balance + inputValue;
      setTotalBalance(currentUsdt);
      setCompareClp(currentUsdt * clpPrice);
    } else {
      console.error("Input value is not a valid number.");
    }
  };

  const clpOtc = (e) => {
    navigate(`/dashboard/otc/${e.toLowerCase()}`);
  };

  const handleCheckboxClick = () => {
    setCheckbox(!checkbox);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(clipboardText).then(() => {
      alert('Copied to clipboard!');
    });
  };

  const handleExchange = () => {
    setVisible(true); // Show the exchange modal or handle the exchange logic here
  };

  useEffect(() => {
  }, []);

  return (
    <>
        <div className="desktop-version">
      <div className="overflow-hidden otc-area">
        <div className="w-full overflow-hidden">
          <div className="flex">
            <div className="w-7/12 p-4 top-bar">
              <div className="flex">
                <div className="w-2/4 md:p-2 lg:p-2 2xl:p-4">
                  <div className="relative h-full chilean-pesos">
                    <div className="flex flex-wrap h-full p-5 top-item">
                      <div className="xl:w-7/12">
                        <div className="flex items-center justify-start cursor-pointer top-content">
                          <button type="button" className="top-content-btn">
                            <img src={currentSearch.icon} alt="chile" />
                          </button>
                          <div className="px-4">
                            <h3>{currentSearch.title}</h3>
                            <p>{currentSearch.subtitle}</p>
                          </div>
                        </div>
                        <div className="balance">
                          <p className="pt-4 pb-2">Total Balance</p>
                          <h2>{MainBalance}</h2>
                          <h4>
                            {(GetBalance / clpPrice).toFixed(7)}{" "}
                            {currentSearch.subtitle}
                          </h4>
                        </div>
                      </div>
                      <div className="flex justify-end xl:w-5/12">
                        <button
                          type="button"
                          className="flex items-center justify-between drop-button"
                          onClick={() => setIsSearch(!IsSearch)}
                        >
                          <img
                            src={currentSearch.icon}
                            alt="clip"
                            className="mr-2"
                          />
                          <p className="mr-2">{currentSearch.subtitle}</p>
                          <i className="fa-solid fa-angle-down"></i>
                        </button>
                      </div>
                      <div className="flex w-full items-center justify-between pt-8 balance-button-group">
                        <button
                          type="button"
                          className="mr-2 capitalize lg:w-2/4 remove-btn"
                          onClick={withdraw}
                        >
                          retirar
                        </button>
                        <button
                          type="button"
                          className="ml-2 capitalize lg:w-2/4 deposit-btn"
                          onClick={deposit}
                        >
                          Depositar
                        </button>
                      </div>
                    </div>

                    {/* Drop-down search */}
                    {IsSearch && (
                      <div
                        className="absolute w-full search-drop z-20 active"
                        style={{ height: "350px", overflowY: "auto" }}
                      >
                        <div className="p-5 bg-transparent">
                          <div className="relative w-full form-group">
                            <input
                              type="text"
                              className="w-full form-control"
                              placeholder="Search Currency"
                              value={searching}
                              onChange={(e) => setSearching(e.target.value)}
                            />
                            <button
                              type="button"
                              className="absolute top-0 right-2 h-full"
                            >
                              <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                          </div>
                        </div>
                        {searchRouting.map((items) => (
                          <button
                            type="button"
                            className="flex items-center justify-between p-5 currency-item w-full"
                            key={items.title}
                            onClick={() => searchModel(items)}
                          >
                            <div className="flex items-center justify-start top-content cursor-pointer">
                              <div className="top-content-btn">
                                <img src={items.icon} alt="pic" />
                              </div>
                              <div className="px-4">
                                <h3>{items.title}</h3>
                                <p>{items.subtitle}</p>
                              </div>
                            </div>
                            {items.isActive && (
                              <div className="text-white text-end">
                                <i className="fa-solid fa-check"></i>
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Tether Balance Section */}
                <div className="w-2/4 md:p-2 lg:p-2 2xl:p-4">
                  <div
                    className="cursor-pointer top-item chilean-pesos"
                    onClick={() => clpOtc("usdt")}
                  >
                    <div className="flex items-center justify-start top-content">
                      <button type="button" className="top-content-btn">
                        <img src="/assets/flag/usdt.svg" alt="chile" />
                      </button>
                      <div className="px-4">
                        <h3>Tether</h3>
                        <p>USDT</p>
                      </div>
                    </div>
                    <div className="lg:pb-2 lg:pt-4 balance-price 2xl:pb-5 2xl:pt-8 md:pb-2 md:pt-4">
                      <div className="flex items-center justify-between">
                        <div className="price-details">
                          <h2>${wallet?.usdt} USDT</h2>
                          <p>{usdtPrice} USDT</p>
                        </div>
                        <div className="bg-transparent">
                          <img src="/assets/graph/graph2.svg" alt="chile" />
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 pb-5 chilean-bottom">
                      <div className="flex items-center justify-between">
                        <div className="chilean-bottom-details1">
                          <p>PnL Daily</p>
                        </div>
                        <div className="chilean-bottom-details2">
                          <p>+$16.78</p>
                        </div>
                        <div className="chilean-bottom-details3">
                          <p>+16.78 %</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exchange Bar */}
              <div className="w-full p-4 usdt-clip-area">
                <div className="flex items-center justify-between md:p-2 lg:p-2 2xl:p-4">
                  <h2 className="otc-text">
                    OTC <span>Usdt/CLP</span>
                  </h2>
                  <div className="flex company">
                    <button type="button" className="btn active">
                      Empresa
                    </button>
                    <button type="button" className="btn">
                      Persona
                    </button>
                  </div>
                </div>
                <div className="w-full md:p-2 lg:p-2 2xl:p-4 statistics-right">
                  {/* Exchange buttons */}
                  <div className="exchange-bar">
                    <div className="flex items-center justify-between w-full top-btn-group">
                      <div className="compare-btn-group">
                        <button
                          type="button"
                          className={`btn ${OTCstep1 ? "active" : ""}`}
                          onClick={() => {
                            setOTCstep1(true);
                            setOTCstep2(false);
                          }}
                        >
                          <span>Comprar</span>
                        </button>
                        <button
                          type="button"
                          className={`ml-3 btn ${OTCstep2 ? "active" : ""}`}
                          onClick={() => {
                            setOTCstep1(false);
                            setOTCstep2(true);
                          }}
                        >
                          <span>Vender</span>
                        </button>
                      </div>
                      <div className="usdt-btn-area">
                        <button type="button" className="usdt-btn">
                          <img
                            src={currentSearch.icon}
                            alt="chile"
                            className="mx-2"
                          />
                          <h3>{currentSearch.subtitle}</h3>
                        </button>
                      </div>
                    </div>

                    {/* OTC Step 1 */}
                    {OTCstep1 && (
                      <div className="flex flex-col items-start justify-between p-5 compare-market Step-one">
                        <div className="w-full">
                          <div className="flex flex-col w-full h-full my-3 form-group">
                            <label htmlFor="ValuePerUsdt">Valor por USDT hhh Confirmado</label>
                            <div className="relative w-full">
                              <input
                                type="text"
                                name="ValuePerUsdt"
                                id="ValuePerUsdt"
                                className="w-full form-control"
                                placeholder={compareUsdt}
                                value={compareUsdt}
                                onChange={compareUsdtPrice}
                              />
                            </div>
                          </div>
                          <div className="flex mb-3">
                            <div className="w-2/4 pr-3">
                              <div className="flex flex-col w-full h-full form-group">
                                <label htmlFor="totalUsdt">Total USDT</label>
                                <div className="relative w-full">
                                  <input
                                    type="text"
                                    name="totalUsdt"
                                    id="totalUsdt"
                                    className="w-full form-control"
                                    value={totalBalance}
                                    onChange={(e) => setTotalBalance(e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="w-2/4 pl-3">
                              <div className="flex flex-col w-full h-full form-group">
                                <label htmlFor="Total">Valor por USDT Confirmado</label>
                                <div className="relative w-full">
                                  <input
                                    type="text"
                                    name="Total"
                                    id="Total"
                                    className="w-full form-control"
                                    value={compareClp}
                                    onChange={(e) => setCompareClp(e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col w-full h-full mb-3 form-group payment-methods">
                            <div className="flex flex-col w-full h-full form-group">
                              <label htmlFor="ValuePerUsdt">Valor por USDT Confirmado</label>
                              <div className="relative w-full">
                                <button
                                  type="button"
                                  className="flex items-center justify-between w-full mt-4"
                                  onClick={() => setCurrencyDrop(!currencyDrop)}
                                >
                                  <div className="flex items-center w-3/4">
                                    <img src="/assets/logos/chile.svg" alt="Chile" />
                                    <p className="mx-2">Seleccionar método</p>
                                  </div>
                                  <div className="flex justify-end w-1/4 pr-1">
                                    <div className="cursor-pointer arrow">
                                      <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                  </div>
                                </button>
                                {currencyDrop && (
                                  <div className="absolute  flex-col drop-down" style={{width:'300px',left:'60%'}}>
                                    <h2 className="p-3">Seleccione el método de pago</h2>
                                    <button
                                      type="button"
                                      className="flex items-center justify-start active"
                                      onClick={() => setCurrencyDrop(false)}
                                    >
                                      <p>CLP en billetera</p>
                                    </button>
                                    <button
                                      type="button"
                                      className="flex items-center justify-start"
                                      onClick={() => {
                                        setCurrencyDrop(false);
                                        deposit();
                                      }}
                                    >
                                      <p>DEPÓSITO CLP</p>
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col w-full h-full mb-3 form-group">
                            <div className="flex flex-col w-full h-full form-group">
                              <label htmlFor="ValuePerUsdt">Valor por USDT Confirmado</label>
                              <div className="relative w-full">
                                <input
                                  type="text"
                                  name="ValuePerUsdt"
                                  id="ValuePerUsdt"
                                  className="w-full form-control"
                                  placeholder="02154dsf4g8hxdrer45gh4245884"
                                  value={clipboardText}
                                  onChange={(e) => setClipboardText(e.target.value)}
                                />
                                <button
                                  type="button"
                                  className="absolute btn-copy2"
                                  onClick={() => navigator.clipboard.writeText(clipboardText)}
                                >
                                  Confirm Wallet
                                  <i className="fa-regular fa-copy"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="mt-8 form-check checkbox">
                            <label className="text-white form-check-label">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="confirm"
                                id="confirm"
                                value="true"
                                checked={checkbox}
                                onChange={() => setCheckbox(!checkbox)}
                              />
                              Confirmo que deposite usdt a esta direccion
                            </label>
                          </div>
                        </div>
                        <div className="flex justify-center w-full h-full pb-10 text-center">
                          <button
                            type="button"
                            className="exchange-button"
                            onClick={() => setVisible(true)}
                          >
                            Exchange
                          </button>
                        </div>
                      </div>
                    )}

                    {/* OTC Step 2 */}
                    {OTCstep2 && (
                      <div className="flex flex-col items-start justify-between p-5 compare-market Step-one">
                        <div className="w-full">
                          <div className="flex flex-col w-full h-full my-3 form-group">
                            <label htmlFor="ValuePerUsdt">
                              Valor por USDT Confirmado
                            </label>
                            <div className="relative w-full">
                              <input
                                type="text"
                                name="ValuePerUsdt"
                                id="ValuePerUsdt"
                                className="w-full form-control"
                                placeholder={usdtPrice}
                                value={compareUsdt}
                                onChange={(e) => compareUsdtPrice(e)}
                              />
                            </div>
                          </div>
                          <div className="flex mb-3">
                            <div className="w-2/4 pr-3">
                              <div className="flex flex-col w-full h-full form-group">
                                <label htmlFor="totalUsdt">TOTAL USDT</label>
                                <div className="relative w-full">
                                  <input
                                    type="text"
                                    name="totalUsdt"
                                    id="totalUsdt"
                                    className="w-full form-control"
                                    placeholder="0"
                                    value={totalBalance}
                                    onChange={(e) =>
                                      setTotalBalance(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="w-2/4 pl-3">
                              <div className="flex flex-col w-full h-full form-group">
                                <label htmlFor="Total">
                                  Valor por USDT Confirmado
                                </label>
                                <div className="relative w-full">
                                  <input
                                    type="text"
                                    name="Total"
                                    id="Total"
                                    className="w-full form-control"
                                    placeholder="$75.229.000"
                                    value={compareClp}
                                    onChange={(e) =>
                                      setCompareClp(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col w-full h-full mb-3 form-group">
                            <div className="flex flex-col w-full h-full form-group">
                              <label htmlFor="ValuePerUsdt">
                                Valor por USDT Confirmado
                              </label>
                              <div className="relative w-full">
                                <input
                                  type="text"
                                  name="ValuePerUsdt"
                                  id="ValuePerUsdt"
                                  className="w-full form-control"
                                  placeholder="RED TRON TRC-20"
                                  value={clipboardText}
                                  onChange={(e) =>
                                    setClipboardText(e.target.value)
                                  }
                                />
                                <button
                                  type="button"
                                  className="absolute btn-copy"
                                  onClick={handleCopy}
                                >
                                  Copiar
                                  <i className="fa-regular fa-copy"></i>
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="mt-8 form-check checkbox">
                            <label className="text-white form-check-label">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="confirm"
                                id="confirm"
                                value="true"
                                checked={checkbox}
                                onChange={handleCheckboxClick}
                              />
                              Confirmo que deposite usdt a esta direccion
                            </label>
                          </div>
                        </div>
                        <div className="flex justify-center w-full h-full pb-10 text-center">
                          <button
                            type="button"
                            className="exchange-button"
                            onClick={() => setVisible(true)}
                          >
                            Exchange
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Transaction History */}
            <div className="w-5/12 p-4 pl-0">
              <div className="md:p-2 lg:p-2 2xl:p-4">
                <div className="px-6 py-5 transaction-history">
                  <div className="flex justify-between top-text">
                    <p>Transaction History OTC</p>
                    <button>View More</button>
                  </div>
                  {history.map((items, index) => (
                    <div
                      key={index}
                      className="flex items-center py-2 transaction-table-body"
                    >
                      <div className="w-3/12 text-center coin">
                        <div className="flex items-center">
                          <div className="flex items-center justify-center coin-box">
                            <img src={items.flag} alt="chile" />
                          </div>
                          <div className="pl-3 coin-content">
                            <h4>{items.coinName}</h4>
                          </div>
                        </div>
                      </div>
                      <div className="w-3/12 text-center type">
                        <p className={items.typeBg}>{items.type}</p>
                      </div>
                      <div className="w-3/12 text-center Date">
                        <p>{items.time}</p>
                      </div>
                      <div className="w-3/12 text-center State">
                        <p className={items.stateC}>{items.state}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="flex items-end justify-start p-4 mt-6 chart-file chart-pie">
                  <div className="w-7/12 h-full">
                    <div className=" relative">
                      <div className="chart-box z-10 relative">
                        <ApexCharts
                          options={chartOptions}
                          series={chartOptions.series}
                          type={chartOptions.chart.type}
                          height="250"
                        />
                      </div>

                      <div className="absolute top-0 text-white shape">
                        <div className="border_shape">
                          <p>CLP</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-5/12 h-full">
                    <div className="flex chart-btn">
                      <div className="flex items-center buy">
                        <div className="mx-2 buyBg"></div>
                        <p>Comprar</p>
                      </div>
                      <div className="flex items-center px-2 Sell">
                        <div className="mx-2 SellBg"></div>
                        <p>Vender</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-end justify-start p-4 mt-6 chart-file chart-pie">
                  <div className="w-7/12 h-full">
                    <div className="relative chartBox">
                      <div className="chart-box z-10 relative">
                        <ApexCharts
                          options={chartOptions2}
                          series={chartOptions2.series}
                          type={chartOptions2.chart.type}
                          height="250"
                        />
                      </div>

                      <div className="absolute top-0 text-white shape">
                        <div className="border_shape">
                          <p>USDT</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-5/12 h-full">
                    <div className="flex chart-btn">
                      <div className="flex items-center buy">
                        <div className="mx-2 buyBg buyBg1"></div>
                        <p>Comprar</p>
                      </div>
                      <div className="flex items-center px-2 Sell">
                        <div className="mx-2 SellBg SellBg2"></div>
                        <p>Vender</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mobile-version">
      <div className="overflow-hidden otc-area">
        <div className="w-full overflow-hidden">
          <div className="flex flex-wrap">
            <div className="w-full p-4 top-bar">
              <div className="flex flex-wrap">
                <div className="ww-full sm:w-2/4 p-2 lg:p-2 2xl:p-4">
                  <div className="relative h-full chilean-pesos">
                    <div className="flex flex-wrap h-full p-5 top-item">
                      <div className="w-7/12">
                        <div className="flex items-center justify-start cursor-pointer top-content">
                          <button type="button" className="top-content-btn">
                            <img src={currentSearch.icon} alt="chile" />
                          </button>
                          <div className="px-4">
                            <h3>{currentSearch.title}</h3>
                            <p>{currentSearch.subtitle}</p>
                          </div>
                        </div>
                        <div className="balance">
                          <p className="pt-4 pb-2">Total Balance</p>
                          <h2>{MainBalance}</h2>
                          <h4>
                            {(GetBalance / clpPrice).toFixed(7)}{" "}
                            {currentSearch.subtitle}
                          </h4>
                        </div>
                      </div>
                      <div className="flex justify-end w-5/12">
                        <button
                          type="button"
                          className="flex items-center justify-between drop-button"
                          onClick={() => setIsSearch(!IsSearch)}
                        >
                          <img
                            src={currentSearch.icon}
                            alt="clip"
                            className="mr-2"
                          />
                          <p className="mr-2">{currentSearch.subtitle}</p>
                          <i className="fa-solid fa-angle-down"></i>
                        </button>
                      </div>
                      <div className="flex w-full items-center justify-between pt-8 balance-button-group">
                        <button
                          type="button"
                          className="mr-2 capitalize lg:w-2/4 remove-btn"
                          onClick={withdraw}
                        >
                          retirar
                        </button>
                        <button
                          type="button"
                          className="ml-2 capitalize lg:w-2/4 deposit-btn"
                          onClick={deposit}
                        >
                          Depositar
                        </button>
                      </div>
                    </div>

                    {/* Drop-down search */}
                    {IsSearch && (
                      <div
                        className="absolute w-full search-drop z-20 active"
                        style={{ height: "350px", overflowY: "auto" }}
                      >
                        <div className="p-5 bg-transparent">
                          <div className="relative w-full form-group">
                            <input
                              type="text"
                              className="w-full form-control"
                              placeholder="Search Currency"
                              value={searching}
                              onChange={(e) => setSearching(e.target.value)}
                            />
                            <button
                              type="button"
                              className="absolute top-0 right-2 h-full"
                            >
                              <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                          </div>
                        </div>
                        {searchRouting.map((items) => (
                          <button
                            type="button"
                            className="flex items-center justify-between p-5 currency-item w-full"
                            key={items.title}
                            onClick={() => searchModel(items)}
                          >
                            <div className="flex items-center justify-start top-content cursor-pointer">
                              <div className="top-content-btn">
                                <img src={items.icon} alt="pic" />
                              </div>
                              <div className="px-4">
                                <h3>{items.title}</h3>
                                <p>{items.subtitle}</p>
                              </div>
                            </div>
                            {items.isActive && (
                              <div className="text-white text-end">
                                <i className="fa-solid fa-check"></i>
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Tether Balance Section */}
                <div className="w-full  sm:w-2/4 p-2 lg:p-2 2xl:p-4">
                  <div
                    className="cursor-pointer top-item chilean-pesos"
                    onClick={() => clpOtc("usdt")}
                  >
                    <div className="flex items-center justify-start top-content">
                      <button type="button" className="top-content-btn">
                        <img src="/assets/flag/usdt.svg" alt="chile" />
                      </button>
                      <div className="px-4">
                        <h3>Tether</h3>
                        <p>USDT</p>
                      </div>
                    </div>
                    <div className="lg:pb-2 lg:pt-4 balance-price 2xl:pb-5 2xl:pt-8 md:pb-2 md:pt-4">
                      <div className="flex items-center justify-between">
                        <div className="price-details">
                          <h2>${wallet?.usdt} USDT</h2>
                          <p>{usdtPrice} USDT</p>
                        </div>
                        <div className="bg-transparent">
                          <img src="/assets/graph/graph2.svg" alt="chile" />
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 pb-5 chilean-bottom">
                      <div className="flex items-center justify-between">
                        <div className="chilean-bottom-details1">
                          <p>PnL Daily</p>
                        </div>
                        <div className="chilean-bottom-details2">
                          <p>+$16.78</p>
                        </div>
                        <div className="chilean-bottom-details3">
                          <p>+16.78 %</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exchange Bar */}
              <div className="w-full p-4 usdt-clip-area">
                <div className="flex items-center justify-between md:p-2 lg:p-2 2xl:p-4">
                  <h2 className="otc-text">
                    OTC <span>Usdt/CLP</span>
                  </h2>
                  <div className="flex company">
                    <button type="button" className="btn active">
                      Empresa
                    </button>
                    <button type="button" className="btn">
                      Persona
                    </button>
                  </div>
                </div>
                <div className="w-full p-2 lg:p-2 2xl:p-4 statistics-right">
                  {/* Exchange buttons */}
                  <div className="exchange-bar">
                    <div className="flex items-center justify-between w-full top-btn-group">
                      <div className="compare-btn-group">
                        <button
                          type="button"
                          className={`btn ${OTCstep1 ? "active" : ""}`}
                          onClick={() => {
                            setOTCstep1(true);
                            setOTCstep2(false);
                          }}
                        >
                          <span>Comprar</span>
                        </button>
                        <button
                          type="button"
                          className={`ml-3 btn ${OTCstep2 ? "active" : ""}`}
                          onClick={() => {
                            setOTCstep1(false);
                            setOTCstep2(true);
                          }}
                        >
                          <span>Vender</span>
                        </button>
                      </div>
                      <div className="usdt-btn-area">
                        <button type="button" className="usdt-btn">
                          <img
                            src={currentSearch.icon}
                            alt="chile"
                            className="mx-2"
                          />
                          <h3>{currentSearch.subtitle}</h3>
                        </button>
                      </div>
                    </div>

                    {/* OTC Step 1 */}
                    {OTCstep1 && (
                      <div className="flex flex-col items-start justify-between p-5 compare-market Step-one">
                        <div className="w-full">
                          <div className="flex flex-col w-full h-full my-3 form-group">
                            <label htmlFor="ValuePerUsdt">Valor por USDT hhh Confirmado</label>
                            <div className="relative w-full">
                              <input
                                type="text"
                                name="ValuePerUsdt"
                                id="ValuePerUsdt"
                                className="w-full form-control"
                                placeholder={compareUsdt}
                                value={compareUsdt}
                                onChange={compareUsdtPrice}
                              />
                            </div>
                          </div>
                          <div className="flex mb-3">
                            <div className="w-2/4 pr-3">
                              <div className="flex flex-col w-full h-full form-group">
                                <label htmlFor="totalUsdt">Total USDT</label>
                                <div className="relative w-full">
                                  <input
                                    type="text"
                                    name="totalUsdt"
                                    id="totalUsdt"
                                    className="w-full form-control"
                                    value={totalBalance}
                                    onChange={(e) => setTotalBalance(e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="w-2/4 pl-3">
                              <div className="flex flex-col w-full h-full form-group">
                                <label htmlFor="Total">Valor por USDT Confirmado</label>
                                <div className="relative w-full">
                                  <input
                                    type="text"
                                    name="Total"
                                    id="Total"
                                    className="w-full form-control"
                                    value={compareClp}
                                    onChange={(e) => setCompareClp(e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col w-full h-full mb-3 form-group payment-methods">
                            <div className="flex flex-col w-full h-full form-group">
                              <label htmlFor="ValuePerUsdt">Valor por USDT Confirmado</label>
                              <div className="relative w-full">
                                <button
                                  type="button"
                                  className="flex items-center justify-between w-full mt-4"
                                  onClick={() => setCurrencyDrop(!currencyDrop)}
                                >
                                  <div className="flex items-center w-3/4">
                                    <img src="/assets/logos/chile.svg" alt="Chile" />
                                    <p className="mx-2">Seleccionar método</p>
                                  </div>
                                  <div className="flex justify-end w-1/4 pr-1">
                                    <div className="cursor-pointer arrow">
                                      <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                  </div>
                                </button>
                                {currencyDrop && (
                                  <div className="absolute  flex-col drop-down" style={{width:'300px',left:'60%'}}>
                                    <h2 className="p-3">Seleccione el método de pago</h2>
                                    <button
                                      type="button"
                                      className="flex items-center justify-start active"
                                      onClick={() => setCurrencyDrop(false)}
                                    >
                                      <p>CLP en billetera</p>
                                    </button>
                                    <button
                                      type="button"
                                      className="flex items-center justify-start"
                                      onClick={() => {
                                        setCurrencyDrop(false);
                                        deposit();
                                      }}
                                    >
                                      <p>DEPÓSITO CLP</p>
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col w-full h-full mb-3 form-group">
                            <div className="flex flex-col w-full h-full form-group">
                              <label htmlFor="ValuePerUsdt">Valor por USDT Confirmado</label>
                              <div className="relative w-full">
                                <input
                                  type="text"
                                  name="ValuePerUsdt"
                                  id="ValuePerUsdt"
                                  className="w-full form-control"
                                  placeholder="02154dsf4g8hxdrer45gh4245884"
                                  value={clipboardText}
                                  onChange={(e) => setClipboardText(e.target.value)}
                                />
                                <button
                                  type="button"
                                  className="absolute btn-copy2"
                                  onClick={() => navigator.clipboard.writeText(clipboardText)}
                                >
                                  Confirm Wallet
                                  <i className="fa-regular fa-copy"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="mt-8 form-check checkbox">
                            <label className="text-white form-check-label">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="confirm"
                                id="confirm"
                                value="true"
                                checked={checkbox}
                                onChange={() => setCheckbox(!checkbox)}
                              />
                              Confirmo que deposite usdt a esta direccion
                            </label>
                          </div>
                        </div>
                        <div className="flex justify-center w-full h-full pb-10 text-center">
                          <button
                            type="button"
                            className="exchange-button"
                            onClick={() => setVisible(true)}
                          >
                            Exchange
                          </button>
                        </div>
                      </div>
                    )}

                    {/* OTC Step 2 */}
                    {OTCstep2 && (
                      <div className="flex flex-col items-start justify-between p-5 compare-market Step-one">
                        <div className="w-full">
                          <div className="flex flex-col w-full h-full my-3 form-group">
                            <label htmlFor="ValuePerUsdt">
                              Valor por USDT Confirmado
                            </label>
                            <div className="relative w-full">
                              <input
                                type="text"
                                name="ValuePerUsdt"
                                id="ValuePerUsdt"
                                className="w-full form-control"
                                placeholder={usdtPrice}
                                value={compareUsdt}
                                onChange={(e) => compareUsdtPrice(e)}
                              />
                            </div>
                          </div>
                          <div className="flex mb-3">
                            <div className="w-2/4 pr-3">
                              <div className="flex flex-col w-full h-full form-group">
                                <label htmlFor="totalUsdt">TOTAL USDT</label>
                                <div className="relative w-full">
                                  <input
                                    type="text"
                                    name="totalUsdt"
                                    id="totalUsdt"
                                    className="w-full form-control"
                                    placeholder="0"
                                    value={totalBalance}
                                    onChange={(e) =>
                                      setTotalBalance(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="w-2/4 pl-3">
                              <div className="flex flex-col w-full h-full form-group">
                                <label htmlFor="Total">
                                  Valor por USDT Confirmado
                                </label>
                                <div className="relative w-full">
                                  <input
                                    type="text"
                                    name="Total"
                                    id="Total"
                                    className="w-full form-control"
                                    placeholder="$75.229.000"
                                    value={compareClp}
                                    onChange={(e) =>
                                      setCompareClp(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col w-full h-full mb-3 form-group">
                            <div className="flex flex-col w-full h-full form-group">
                              <label htmlFor="ValuePerUsdt">
                                Valor por USDT Confirmado
                              </label>
                              <div className="relative w-full">
                                <input
                                  type="text"
                                  name="ValuePerUsdt"
                                  id="ValuePerUsdt"
                                  className="w-full form-control"
                                  placeholder="RED TRON TRC-20"
                                  value={clipboardText}
                                  onChange={(e) =>
                                    setClipboardText(e.target.value)
                                  }
                                />
                                <button
                                  type="button"
                                  className="absolute btn-copy"
                                  onClick={handleCopy}
                                >
                                  Copiar
                                  <i className="fa-regular fa-copy"></i>
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="mt-8 form-check checkbox">
                            <label className="text-white form-check-label">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="confirm"
                                id="confirm"
                                value="true"
                                checked={checkbox}
                                onChange={handleCheckboxClick}
                              />
                              Confirmo que deposite usdt a esta direccion
                            </label>
                          </div>
                        </div>
                        <div className="flex justify-center w-full h-full pb-10 text-center">
                          <button
                            type="button"
                            className="exchange-button"
                            onClick={() => setVisible(true)}
                          >
                            Exchange
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Transaction History */}
            <div className="w-full p-4">
              <div className="px-4 sm:p-8 w-full">
                <div className="px-6 py-5 transaction-history">
                  <div className="flex justify-between top-text">
                    <p>Transaction History OTC</p>
                    <button>View More</button>
                  </div>
                  {history.map((items, index) => (
                    <div
                      key={index}
                      className="flex items-center py-2 transaction-table-body"
                    >
                      <div className="w-3/12 text-center coin">
                        <div className="flex items-center">
                          <div className="flex items-center justify-center coin-box">
                            <img src={items.flag} alt="chile" />
                          </div>
                          <div className="pl-3 coin-content">
                            <h4>{items.coinName}</h4>
                          </div>
                        </div>
                      </div>
                      <div className="w-3/12 text-center type">
                        <p className={items.typeBg}>{items.type}</p>
                      </div>
                      <div className="w-3/12 text-center Date">
                        <p>{items.time}</p>
                      </div>
                      <div className="w-3/12 text-center State">
                        <p className={items.stateC}>{items.state}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="flex flex-wrap items-end justify-start p-4 mt-6 chart-file chart-pie">
                  <div className="w-full h-full">
                    <div className=" relative">
                      <div className="chart-box z-10 relative">
                        <ApexCharts
                          options={chartOptions}
                          series={chartOptions.series}
                          type={chartOptions.chart.type}
                          height="250"
                        />
                      </div>

                      <div className="absolute top-0 text-white shape">
                        <div className="border_shape">
                          <p>CLP</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-full py-3">
                    <div className="flex chart-btn justify-center" >
                      <div className="flex items-center buy">
                        <div className="mx-2 buyBg"></div>
                        <p>Comprar</p>
                      </div>
                      <div className="flex items-center px-2 Sell">
                        <div className="mx-2 SellBg"></div>
                        <p>Vender</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-end justify-start p-4 mt-6 chart-file chart-pie">
                  <div className="w-full h-full">
                    <div className="relative chartBox">
                      <div className="chart-box z-10 relative">
                        <ApexCharts
                          options={chartOptions2}
                          series={chartOptions2.series}
                          type={chartOptions2.chart.type}
                          height="250"
                        />
                      </div>

                      <div className="absolute top-0 text-white shape">
                        <div className="border_shape">
                          <p>USDT</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-full  py-3">
                    <div className="flex chart-btn justify-center">
                      <div className="flex items-center buy">
                        <div className="mx-2 buyBg buyBg1"></div>
                        <p>Comprar</p>
                      </div>
                      <div className="flex items-center px-2 Sell">
                        <div className="mx-2 SellBg SellBg2"></div>
                        <p>Vender</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="modal-area">
          <Dialog
            header="OTC"
            visible={visible}
            style={{ width: "30vw" }}
            modal
            onHide={() => setVisible(false)}
          >
        <div className="modal">
          <div className="p-5 modal-content">
            <div className="py-10 form">
              <h4 className="py-5 title">Operation for +50,000 USDT</h4>
              <p className="py-2 sub-text">
                Estas ingresando a la opcion <span>OTC</span> (Over the counter, en espanol operaciones fuera del mercado minorista)
              </p>
              <p className="sub-text">
                Es por ello que la operacion se ejecutara directamente a tu wallet personal externa de la cual tienes que tener tus propias claves semillas.
              </p>
            </div>
          </div>
          <div className="pb-10 submit-modal">
            <button type="button" className="btn" onClick={() => setVisible(false)}>
              DE ACUERDO
            </button>
          </div>
        </div>
          </Dialog>      
        </div>
    </>

  );
};

export default TrxOtcComponent;
