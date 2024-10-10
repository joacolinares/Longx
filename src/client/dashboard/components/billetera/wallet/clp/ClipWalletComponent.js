import React, { useState, useEffect, useContext } from "react";
import ReactApexChart from "react-apexcharts";
import { useNavigate } from "react-router-dom";
import "./ClipWalletComponent.scss";
import ExchangeMoneyComponent from "../../../general/components/exchangeMoney/ExchangeMoneyComponent";
import { AuthContext } from "../../../../../../context/AuthContext";
import { toast } from "react-toastify";
const ClipWalletComponent = () => {
  const { user, cryptoPrice } = useContext(AuthContext);
  const [getBalance, setGetBalance] = useState(0);
  const mainBalance = user.balance;
  const usdtPrice = cryptoPrice.usdtPrice;
  const clpPrice = cryptoPrice.clpPrice;
  const wallet = user.wallet;
  const [visible, setVisible] = useState(false);
  const [currentSearch, setCurrentSearch] = useState({
    icon: "/assets/flag/chile.svg",
    title: "Pesos Chilenos",
    subtitle: "CLP",
  });
  const [searching, setSearching] = useState("");
  const [portfolioList] = useState([
    {
      name: "Tether",
      price: "0 USDT",
      img: "/assets/logos/usdt.svg",
      url: "/dashboard/wallet/usdt",
    },
    {
      name: "TRON",
      price: "0 TRX",
      img: "/assets/logos/tronix.svg",
      url: "/dashboard/wallet/trx",
    },
    {
      name: "Bitcoin",
      price: "0 BTC",
      img: "/assets/logos/bitcoin.svg",
      url: "/dashboard/wallet/btc",
    },
    {
      name: "Injective",
      price: "0 INJ",
      img: "/assets/logos/Injective.svg",
      url: "/dashboard/wallet/inj",
    },
    {
      name: "Ethereum",
      price: "0 ETH",
      img: "/assets/flag/eth.svg",
      url: "/dashboard/wallet/eth",
    },
    {
      name: "Pesos Chilenos",
      price: "0 CLP",
      img: "/assets/flag/chile.svg",
      url: "/dashboard/wallet/clp",
    },
  ]);
  const [searchRouting, setSearchRouting] = useState([
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
      title: "TRON",
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
  ]);
  const [isSearch, setIsSearch] = useState(false);

  // Chart Options
  const [chartOptions, setChartOptions] = useState({
    series: [60, 40],
    chart: {
      type: "donut",
      width: 250,
      height: 250,
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
  });

  const [areaChartOptions, setAreaChartOptions] = useState({
    series: [
      {
        name: "$",
        data: [650, 680, 690, 750, 400, 500, 300, 200, 500],
      },
    ],
    chart: {
      type: "area",
      height: 836,
    },
    fill: {
      type: "gradient",
      colors: ["green"],
      gradient: {
        type: "vertical",
        opacityFrom: 1,
        opacityTo: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  });

  const navigate = useNavigate();

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

  const searchModel = (item) => {
    const updatedSearchRouting = searchRouting.map((el) =>
      el.id === item.id
        ? { ...el, isActive: !el.isActive }
        : { ...el, isActive: false }
    );
    setSearchRouting(updatedSearchRouting);
    setCurrentSearch({
      icon: item.icon,
      title: item.title,
      subtitle: item.subtitle,
    });
    setIsSearch(false);
  };
  const walletChange = (e) => {
    navigate(`/dashboard/wallet/${e.subtitle.toLowerCase()}`)
    console.log(e.subtitle.toLowerCase())
  }
  // Chart Update
  // const updateChart = () => {
  //   let newValue1 = 60;
  //   let newValue2 = 40;
  //   if (moneySwap) {
  //     newValue1 = 40;
  //     newValue2 = 60;
  //   }
  //   setChartOptions({ ...chartOptions, series: [newValue1, newValue2] });
  // };

  return (
    <>
      {/* Desktop Version */}
      <div className="desktop-version">
        <div className="p-5 wallet-area">
          <div className="flex">
            <div className="w-7/12 md:p-2 lg:p-2 2xl:p-4">
              <div className="flex py-8 wallet-top-bar">
                <div className="w-2/4 h-full border-r">
                  <div className="relative h-full chilean-pesos">
                    <div className="flex h-full p-5 top-item flex-w">
                      <div className="w-3/4">
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
                          <h2>{mainBalance}</h2>
                          <h4>
                            {(getBalance / clpPrice).toFixed(7)}{" "}
                            {currentSearch.subtitle}
                          </h4>
                        </div>
                        <div className="flex items-center justify-between pt-8 balance-button-group">
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
                      <div className="flex justify-end ">
                        <button
                          type="button"
                          className="flex items-center justify-between drop-button w-[120px] mr-2"
                          onClick={() => setIsSearch(!isSearch)}
                        >
                          <img
                            src={currentSearch.icon}
                            alt="clip"
                            className="mr-2"
                          />
                          <p className="mr-2">{currentSearch.subtitle}</p>
                          <div>
                            <i className="fa-solid fa-angle-down"></i>
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Drop-down */}
                    {isSearch && (
                      <div
                        className={`${isSearch ? "active" : ""
                          } absolute w-full search-drop z-20`}
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
                        {searchRouting.map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            className="flex items-center justify-between p-4 currency-item w-full h-[65px]"
                            onClick={() => (searchModel(item), walletChange(item))}
                          >
                            <div className="flex items-center justify-start top-content cursor-pointer">
                              <div className="top-content-btn">
                                <img src={item.icon} alt="photo" />
                              </div>
                              <div className="px-4">
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                              </div>
                            </div>
                            {item.isActive && (
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

                <div className="w-2/4">
                  <div className="p-5 right-content">
                    <div className="content-box">
                      <div className="flex">
                        <div className="w-2/4">
                          <p className="withdraw-txt">Withdraw</p>
                          <h3 className="py-1 price">0 CLP</h3>
                          <h3 className="py-1 total-price">0 USDT</h3>
                        </div>
                        <div className="flex flex-col items-center content-between justify-center w-2/4 h-full">
                          <div className="h-50">
                            <img src="/assets/graph/graph1.svg" alt="graph1" />
                          </div>
                          <div className="py-2 h-50">
                            <button className="price-btn" type="button">
                              +16.78 %
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-4 mt-2 bg-black rounded-full dark:bg-gray-700 progressbar">
                        <div
                          className="h-4 bg-red-400 rounded-full dark:bg-blue-500 progressbar-line"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="pt-3 content-box">
                      <div className="flex">
                        <div className="w-2/4">
                          <p className="withdraw-txt">Deposit</p>
                          <h3 className="py-1 price">0 CLP</h3>
                          <h3 className="py-1 total-price">0 USDT</h3>
                        </div>
                        <div className="flex flex-col items-center content-between justify-center w-2/4 h-full">
                          <div className="h-50">
                            <img src="/assets/graph/graph1.svg" alt="graph1" />
                          </div>
                          <div className="py-2 h-50">
                            <button className="price-btn" type="button">
                              +16.78 %
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-4 mt-2 bg-black rounded-full dark:bg-gray-700 progressbar">
                        <div
                          className="h-4 bg-red-400 rounded-full dark:bg-blue-500 progressbar-line"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-5/12 md:p-2 lg:p-2 2xl:p-4">
              <div className="portfolio">
                <div className="p-5">
                  <div className="flex items-center justify-between py-4 top-bar">
                    <div>
                      <h2>Portafolio</h2>
                    </div>
                    <div>
                      <button type="button">View All</button>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-start">
                    {portfolioList.map((items) => (
                      <div className="w-2/4 my-2" key={items.name}>
                        <a
                          className="flex items-center portfolio-btn decoration-none"
                          href={items.url}
                        >
                          <button type="button">
                            <img src={items.img} alt="usdt" />
                          </button>
                          <div className="p-2">
                            <h2>{items.name}</h2>
                            <p className="pt-2">{items.price}</p>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-6/12 2xl:w-8/12 mt-2 md:p-2 lg:p-2 2xl:p-4">
              <div className="p-5 currency-bar">
                <div className="flex items-center justify-start-between">
                  <div className="w-2/4 currency-drop">
                    <h3>Wallet Growth Statistics</h3>
                  </div>
                  <div className="flex items-start justify-end w-2/4 currency-btn-group">
                    <button type="button" className="btn active">
                      {" "}
                      1H{" "}
                    </button>
                    <button type="button" className="btn">
                      {" "}
                      3H{" "}
                    </button>
                    <button type="button" className="btn">
                      {" "}
                      1D{" "}
                    </button>
                    <button type="button" className="btn">
                      {" "}
                      1W{" "}
                    </button>
                    <button type="button" className="btn">
                      {" "}
                      1M{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="wallet-chart">
                <div className="chart-area">
                  <div className="chart-file">
                    <div id="chart">
                      <ReactApexChart
                        options={areaChartOptions}
                        series={areaChartOptions.series}
                        type="area"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-6/12 2xl:w-4/12 ">
              <div className="chart-area">
                <div className="flex items-end justify-start p-4 pt-6 mt-3 chart-file chart-pie">
                  <div className="w-7/12 h-full">
                    <div className="relative chartBox ">
                      <div className="chart-box z-10 relative">
                        <ReactApexChart
                          options={chartOptions}
                          series={chartOptions.series}
                          type="donut"
                        />
                      </div>

                      <div className="absolute top-0 text-white shape">
                        <div className="border_shape">
                          <p>Statistics</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-5/12 h-full">
                    <div className="flex chart-btn">
                      <div className="flex items-center buy">
                        <div className="mx-2 buyBg"></div>
                        <p>Retiros</p>
                      </div>
                      <div className="flex items-center px-2 Sell">
                        <div className="mx-2 SellBg"></div>
                        <p>Depositos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-5 statistics-right">
                <ExchangeMoneyComponent
                  usdtPrice={usdtPrice}
                  clpPrice={clpPrice}
                  wallet={wallet}
                  mainBalance={mainBalance}
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="mobile-version">
        <div class="p-5 wallet-area">
          <div class="flex flex-wrap w-full">
            <div class="w-full p-2 ">
              <div class="flex py-8 wallet-top-bar flex-wrap">
                <div class="w-full sm:w-2/4 h-full border-b sm:border-b-0  sm:border-r">
                  <div class="relative h-full chilean-pesos">
                    <div class="flex h-full p-5 top-item">
                      <div class="w-8/12">
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
                          <h2>{mainBalance}</h2>
                          <h4>
                            {(getBalance / clpPrice).toFixed(7)}{" "}
                            {currentSearch.subtitle}
                          </h4>
                        </div>
                        <div className="flex items-center justify-between pt-8 balance-button-group">
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

                      <div class="flex justify-end w-4/12">
                        <button
                          type="button"
                          className="flex items-center justify-between drop-button"
                          onClick={() => setIsSearch(!isSearch)}
                        >
                          <img
                            src={currentSearch.icon}
                            alt="clip"
                            className="mr-2"
                          />
                          <p className="mr-2">{currentSearch.subtitle}</p>
                          <div>
                            <i className="fa-solid fa-angle-down"></i>
                          </div>
                        </button>
                      </div>
                    </div>
                    {isSearch && (
                      <div
                        className={`${isSearch ? "active" : ""
                          } absolute w-full search-drop z-20`}
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
                        {searchRouting.map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            className="flex items-center justify-between p-4 currency-item w-full h-[65px]"
                            onClick={() => (searchModel(item), walletChange(item))}
                          >
                            <div className="flex items-center justify-start top-content cursor-pointer">
                              <div className="top-content-btn">
                                <img src={item.icon} alt="photo" />
                              </div>
                              <div className="px-4">
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                              </div>
                            </div>
                            {item.isActive && (
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
                <div class="w-full sm:w-2/4">
                  <div class="p-5 right-content">
                    <div class="content-box">
                      <div class="flex">
                        <div class="w-2/4">
                          <p class="withdraw-txt">Withdraw</p>
                          <h3 class="py-1 price">0 CLP</h3>
                          <h3 class="py-1 total-price">0 USDT</h3>
                        </div>
                        <div class="flex flex-col items-center content-between justify-center w-2/4 h-full">
                          <div class="h-50">
                            <img src="/assets/graph/graph1.svg" alt="graph1" />
                          </div>
                          <div class="py-2 h-50">
                            <button class="price-btn" type="button">+16.78 %</button>
                          </div>
                        </div>
                      </div>
                      <div class="w-full h-4 mt-2 bg-black rounded-full dark:bg-gray-700 progressbar">
                        <div class="h-4 bg-red-400 rounded-full dark:bg-blue-500 progressbar-line" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                    <div class="pt-3 content-box">
                      <div class="flex">
                        <div class="w-2/4">
                          <p class="withdraw-txt">Deposit</p>
                          <h3 class="py-1 price">0 CLP</h3>
                          <h3 class="py-1 total-price">0 USDT</h3>
                        </div>
                        <div class="flex flex-col items-center content-between justify-center w-2/4 h-full">
                          <div class="h-50">
                            <img src="/assets/graph/graph1.svg" alt="graph1" />
                          </div>
                          <div class="py-2 h-50">
                            <button class="price-btn" type="button">+16.78 %</button>
                          </div>
                        </div>
                      </div>
                      <div class="w-full h-4 mt-2 bg-black rounded-full dark:bg-gray-700 progressbar">
                        <div class="h-4 bg-red-400 rounded-full dark:bg-blue-500 progressbar-line" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full p-2 ">
              <div class="portfolio">
                <div class="p-5">
                  <div class="flex items-center justify-between py-4 top-bar">
                    <div>
                      <h2>Portafolio</h2>
                    </div>
                    <div>
                      <button type="button">View All</button>
                    </div>
                  </div>
                  <div class="flex flex-wrap items-center justify-start">
                    {portfolioList.map((items) => (
                      <div className="w-2/4 my-2" key={items.name}>
                        <a
                          className="flex items-center portfolio-btn decoration-none"
                          href={items.url}
                        >
                          <button type="button">
                            <img src={items.img} alt="usdt" />
                          </button>
                          <div className="p-2">
                            <h2>{items.name}</h2>
                            <p className="pt-2">{items.price}</p>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap w-full">
            <div class="w-full mt-2 p-2 ">
              <div class="p-5 currency-bar">
                <div class="flex items-center justify-start-between">
                  <div class="w-2/4 currency-drop">
                    <h3>Wallet Growth Statistics</h3>
                  </div>
                  <div class="flex items-start justify-end w-2/4 currency-btn-group">
                    <button type="button" class="btn active"> 1H </button>
                    <button type="button" class="btn"> 3H </button>
                    <button type="button" class="btn"> 1D </button>
                    <button type="button" class="btn"> 1W </button>
                    <button type="button" class="btn"> 1M </button>
                  </div>
                </div>
              </div>
              <div class="wallet-chart">
                <div class="chart-area" >
                  <div class="chart-file">
                    <div id="chart">
                      <ReactApexChart
                        options={areaChartOptions}
                        series={areaChartOptions.series}
                        type="area"
                      />


                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full">
              <div class="chart-area">
                <div class="flex items-center flex-wrap justify-center p-4 pt-6 mt-3 chart-file chart-pie w-full">
                  <div class="w-full h-full mx-auto flex justify-center">
                    <ReactApexChart
                      options={chartOptions}
                      series={chartOptions.series}
                      type="donut"
                    />
                  </div>
                </div>
                <div class="w-full h-full  sm:block py-3">
                  <div class="flex justify-center chart-btn">
                    <div class="flex items-center buy">
                      <div class="mx-2 buyBg"></div>
                      <p>Retiros</p>
                    </div>
                    <div class="flex items-center px-2 Sell">
                      <div class="mx-2 SellBg"></div>
                      <p>Depositos</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-5 statistics-right">
                <ExchangeMoneyComponent
                  usdtPrice={usdtPrice}
                  clpPrice={clpPrice}
                  wallet={wallet}
                  mainBalance={mainBalance}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ClipWalletComponent;
