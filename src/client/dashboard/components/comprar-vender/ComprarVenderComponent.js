import React, { useState, useEffect, useContext } from 'react';
import ReactApexChart from 'react-apexcharts';
import { AuthContext } from '../../../../context/AuthContext';
import ExchangeMoneyComponent from '../general/components/exchangeMoney/ExchangeMoneyComponent';
import "./ComprarVenderComponent.scss"
const ComprarVenderComponent = () => {
    const { user, getCryptoPriceHandler, getWalletHandler, cryptoPrice } = useContext(AuthContext);
    const mainBalance = user.balance
    const usdtPrice = cryptoPrice.usdtPrice;
    const clpPrice = cryptoPrice.clpPrice;
    const wallet = user.wallet
    const [currencyDrop, setCurrencyDrop] = useState(false);
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

    const chartOptions2 = {
        series: [
            {
                name: '$',
                data: [650, 680, 690, 750, 400, 500, 300, 200, 500],
            },
            {
                name: '$',
                data: [400, 550, 470, 500, 200, 400, 200, 100, 400],
            },
        ],
        fill: {
            type: 'fill',
            colors: ['#F44336', '#E91E63', '#9C27B0'],
        },
        chart: {
            height: 400,
            type: 'line',
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'April',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],
        },
    };




    const history = [
        {
            id: 1,
            flag: '/assets/flag/chile.svg',
            coinName: 'CLP',
            type: 'Buy',
            typeBg: 'buyC',
            state: 'Canceled',
            stateC: 'canceledC',
            time: '06.01 AM',
        },
        {
            id: 2,
            flag: '/assets/logos/usdt.svg',
            coinName: 'USDT',
            type: 'Sell',
            typeBg: 'sellC',
            state: 'Pending',
            stateC: 'pendingC',
            time: '06.01 AM',
        },
        // Add other history items here...
    ];
    const HistoryRoute = () => {
        // Function to handle View More button click
        console.log('View More clicked');
      };
    return (
        <div className="compare-vender-area">
            {/* Desktop Version */}
            <div className="desktop-version">
                <div className="p-5 compare-area">
                    <div className="flex">
                        <div className="w-6/12 2xl:w-4/12 md:p-2 lg:p-2 2xl:p-4">
                            <div className="statistics-right">
                                <ExchangeMoneyComponent usdtPrice={usdtPrice} clpPrice={clpPrice} wallet={wallet} mainBalance={mainBalance} isPayment="true" />
                            </div>
                            <div className="chart-area mt-8">
                                <div className="flex items-end justify-start  mt-3 chart-file chart-pie py-6">
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
                        </div>

                        {/* Right Side */}
                        <div className="w-6/12 2xl:w-8/12 md:p-2 lg:p-2 2xl:p-4">
                            <div class="p-5 currency-bar">
                                <div class="flex items-center justify-start-between">
                                    <div class="w-2/4 currency-drop">
                                        <h3>Estadisticas de comercio</h3>
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

                            <div class="mb-4 comapare-chart">
                                <div class="chart-area" >
                                    <div class="chart-file2">
                                        <div id="chart">
                                            <ReactApexChart
                                                options={chartOptions2}
                                                series={chartOptions2.series}
                                                type="line"
                                                height={350}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Transaction History */}
                            <div className="px-6 py-5 transaction-history">
                                <div className="flex justify-between top-text">
                                    <p>Comercio Recente</p>
                                    <button type="button" onClick={HistoryRoute}>View More</button>
                                </div>
                                {history.map((item, index) => (
                                    <div key={index} className="py-2 transaction-table-body">
                                        <div className="flex items-center">
                                            <div className="w-3/12 text-center coin">
                                                <div className="flex items-center">
                                                    <div className="flex items-center justify-center coin-box">
                                                        <img src={item.flag} alt={item.coinName} />
                                                    </div>
                                                    <div className="pl-3 coin-content">
                                                        <h4>{item.coinName}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-3/12 text-center type">
                                                <p className={item.typeBg}>{item.type}</p>
                                            </div>
                                            <div className="w-3/12 text-center Date">
                                                <p>{item.time}</p>
                                            </div>
                                            <div className="w-3/12 text-center State">
                                                <p className={item.stateC}>{item.state}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Version */}
            <div className="mobile-version">
                {/* Similar content adapted for mobile views */}
            </div>
        </div >
    );
};

export default ComprarVenderComponent;
