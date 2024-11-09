import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { AuthContext } from '../../../../../../context/AuthContext';


const GeneralTopbarComponent = ({usdtPrice,clpPrice,wallet,mainBalance}) => {
  const [getBalance, setGetBalance] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {

  }, []);

  const changeRoute= (e)=>{
    if (e.type === 'deposit' || e.type === 'withdraw') {
      navigate(`/dashboard/wallet/${e.type}/${e.action}`);
    } else {
      navigate(`/dashboard/${e.type}/${e.action}`);
    }
  };

  return (
    <>
      <div className="desktop-version lg:block hidden">
        <div className="top-bar">
          <div className="flex">
            <div className="w-1/4 md:p-2 lg:p-2 2xl:p-4">
              <div className="estimated-balance top-item">
                <div className="flex items-center justify-start top-content">
                  <button type="button" className="top-content-btn">
                    <img src="/assets/icons/wallet.svg" alt="" />
                  </button>
                  <div className="px-4">
                    <h3>Balance Estimado</h3>
                  </div>
                </div>
                <div className="lg:pb-2 lg:pt-4 balance-price 2xl:pb-5 2xl:pt-8 md:pb-2 md:pt-4">
                  <div className="flex items-center justify-between">
                    <div className="price-details">
                    <h2>{mainBalance}</h2>
                      <p>
                        {new Intl.NumberFormat('en-US', {
                          minimumFractionDigits: 7,
                          maximumFractionDigits: 7,
                        }).format(getBalance / clpPrice)} USDT
                      </p>
                    </div>
                    <div className="price-parcent">
                      <p>+16.78 %</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between balance-button-group">
                  <button type="button" className="mr-2 lg:w-2/4 remove-btn" onClick={()=>changeRoute({type:'withdraw', action:'clp'})}>
                    {/*  (click)="changeRoute({type:'withdraw', action:'clp'})" */}
                    retirar
                  </button>
                  <button type="button" className="ml-2 lg:w-2/4 deposit-btn"  onClick={()=>changeRoute({type:'deposit', action:'clp'})}>
                    Depositar
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/4 md:p-2 lg:p-2 2xl:p-4">
              <div className="cursor-pointer top-item chilean-pesos" onClick={()=>changeRoute({type:'wallet', action:'clp'})}>
                <button type="button"  role="button">
                  <div className="flex items-center justify-start cursor-pointer top-content">
                    <button type="button"  role="button" className="top-content-btn">
                      <img src="/assets/flag/chile.svg" alt="chile" />
                    </button>
                    <div className="px-4">
                      <h3>Pesos Chilenos</h3>
                      <p>CLP</p>
                    </div>
                  </div>
                </button>
                <div className="lg:pb-2 lg:pt-4 balance-price 2xl:pb-5 2xl:pt-8 md:pb-2 md:pt-4">
                  <div className="flex items-center justify-between relative">
                    <div className="price-details">
                    <h2>{wallet?.clp} CLP</h2>
                      <p>{usdtPrice} USDT</p> 
                    </div>
                    <div className="bg-transparent absolute right-0">
                      <img src="/assets/graph/graph1.svg" alt="chile" />
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
            <div className="w-1/4 md:p-2 lg:p-2 2xl:p-4">
              <div className="cursor-pointer top-item chilean-pesos" onClick={()=>changeRoute({type:'wallet', action:'clp'})}>
                <div className="flex items-center justify-start top-content">
                  <button type="button" className="top-content-btn" >
                    <img src="/assets/logos/usdt.svg" alt="chile" />
                  </button>
                  <div className="px-4">
                    <h3>Tether</h3>
                    <p>USDT</p>
                  </div>
                </div>
                <div className="lg:pb-2 lg:pt-4 balance-price 2xl:pb-5 2xl:pt-8 md:pb-2 md:pt-4">
                  <div className="flex items-center justify-between relative">
                    <div className="price-details">
                      <h2>{wallet?.usdt} USDT</h2>
                          
                       <p>{clpPrice} CLP</p>      
                    </div>
                    <div className="bg-transparent absolute right-0">
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
            <div className="w-1/4 md:p-2 lg:p-2 2xl:p-4">
              <div className="cursor-pointer top-item chilean-pesos" onClick={()=>changeRoute({type:'wallet', action:'clp'})}>
                <div className="flex items-center justify-start top-content">
                  <button type="button"  role="button" className="top-content-btn">
                    <img src="/assets/flag/btc.svg" alt="chile" />
                  </button>
                  <div className="px-4">
                    <h3>Bitcoin</h3>
                    <p>BTC</p>
                  </div>
                </div>
                <div className="lg:pb-2 lg:pt-4 balance-price 2xl:pb-5 2xl:pt-8 md:pb-2 md:pt-4">
                  <div className="flex items-center justify-between relative">
                    <div className="price-details">
                      <h2>{wallet?.btc} BTC</h2>
                          
                            <p>{usdtPrice} USDT</p> 
                    </div>
                    <div className="bg-transparent absolute right-0">
                      <img src="/assets/graph/graph3.svg" alt="chile" />
                    </div>
                  </div>
                </div>
                <div className="pt-4 pb-5 chilean-bottom">
                  <div className="flex items-center justify-between">
                    <div className="chilean-bottom-details2">
                      <p>Ver mis Activos</p>
                    </div>
                    <div className="chilean-bottom-details2">
                      <p><i className="fa-solid fa-eye"></i></p>
                    </div>
                    <div className="chilean-bottom-details3">
                      <p>+16.78 %</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-version lg:hidden block">
        <div className="top-bar">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-2/4 p-2 lg:p-2 2xl:p-4">
              <div className="estimated-balance top-item">
                <div className="flex items-center justify-start top-content">
                  <button type="button" role="button" className="top-content-btn">
                    <img src="/assets/icons/wallet.svg" alt="" />
                  </button>
                  <div className="px-4">
                    <h3>Balance Estimado</h3>
                  </div>
                </div>
                <div className="lg:pb-2 lg:pt-4 balance-price 2xl:pb-5 2xl:pt-8 md:pb-2 md:pt-4">
                  <div className="flex items-center justify-between">
                    <div className="price-details pt-2">
                     <h2>{mainBalance}</h2>
                      <p>
                        {new Intl.NumberFormat('en-US', {
                          minimumFractionDigits: 7,
                          maximumFractionDigits: 7,
                        }).format(getBalance / clpPrice)} USDT
                      </p>
                    </div>
                    <div className="price-parcent">
                      <p>+16.78 %</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between balance-button-group">
                  <button type="button"  role="button" className="mr-2 lg:w-2/4 remove-btn" onClick={()=>changeRoute({type:'withdraw', action:'clp'})}>
                    retirar
                  </button>
                  <button type="button"  role="button" className="ml-2 lg:w-2/4 deposit-btn" onClick={()=>changeRoute({type:'deposit', action:'clp'})}>
                    Depositar
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-2/4 p-2 lg:p-2 2xl:p-4">
              <div className="cursor-pointer top-item chilean-pesos" onClick={()=>changeRoute({type:'wallet', action:'clp'})}>
                <button type="button"  role="button">
                  <div className="flex items-center justify-start cursor-pointer top-content">
                    <button type="button" role="button" className="top-content-btn">
                      <img src="/assets/flag/chile.svg" alt="chile" />
                    </button>
                    <div className="px-4">
                      <h3>Pesos Chilenos</h3>
                      <p>CLP</p>
                    </div>
                  </div>
                </button>
                <div className="lg:pb-2 lg:pt-4 balance-price 2xl:pb-5 2xl:pt-8 md:pb-2 md:pt-4">
                  <div className="flex items-center justify-between relative">
                    <div className="price-details pt-2">
                     <h2>{wallet?.clp} CLP</h2>
                             <p>{usdtPrice} USDT</p> 
                    </div>
                    <div className="bg-transparent absolute right-0">
                      <img src="/assets/graph/graph1.svg" alt="chile" />
                    </div>
                  </div>
                </div>
                <div className="pt-4 pb-0 chilean-bottom">
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
            <div className="w-full sm:w-2/4 p-2 lg:p-2 2xl:p-4">
              <div className="cursor-pointer top-item chilean-pesos" onClick={()=>changeRoute({type:'wallet', action:'clp'})}>
                {/* (click)="changeRoute()" */}
                <div className="flex items-center justify-start top-content">
                  <button type="button" className="top-content-btn" >
                    <img src="/assets/logos/usdt.svg" alt="chile" />
                  </button>
                  <div className="px-4">
                    <h3>Tether</h3>
                    <p>USDT</p>
                  </div>
                </div>
                <div className="lg:pb-2 lg:pt-4 balance-price 2xl:pb-5 2xl:pt-8 md:pb-2 md:pt-4">
                  <div className="flex items-center justify-between relative">
                    <div className="price-details pt-2">
                     <h2>{wallet?.usdt} USDT</h2>
                      
                                       <p>{clpPrice} CLP</p>  
                    </div>
                    <div className="bg-transparent absolute right-0">
                      <img src="/assets/graph/graph2.svg" alt="chile" />
                    </div>
                  </div>
                </div>
                <div className="pt-4  chilean-bottom">
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
            <div className="w-full sm:w-2/4 p-2 lg:p-2 2xl:p-4">
              <div className="cursor-pointer top-item chilean-pesos" onClick={()=>changeRoute({type:'wallet', action:'btc'})}>
                {/* (click)="changeRoute()" */}
                <div className="flex items-center justify-start top-content">
                  <button type="button" className="top-content-btn">
                    <img src="/assets/flag/btc.svg" alt="chile" />
                  </button>
                  <div className="px-4">
                    <h3>Bitcoin</h3>
                    <p>BTC</p>
                  </div>
                </div>
                <div className="lg:pb-2 lg:pt-4 balance-price 2xl:pb-5 2xl:pt-8 md:pb-2 md:pt-4">
                  <div className="flex items-center justify-between relative">
                    <div className="price-details pt-2">
                      <h2>{wallet?.btc} BTC</h2>
                             <p>{usdtPrice} USDT</p> 
                    </div>
                    <div className="bg-transparent absolute right-0">
                      <img src="/assets/graph/graph3.svg" alt="chile" />
                    </div>
                  </div>
                </div>
                <div className="pt-4  chilean-bottom">
                  <div className="flex items-center justify-between">
                    <div className="chilean-bottom-details2">
                      <p>Ver mis Activos</p>
                    </div>
                    <div className="chilean-bottom-details2">
                      <p><i className="fa-solid fa-eye"></i></p>
                    </div>
                    <div className="chilean-bottom-details3">
                      <p>+16.78 %</p>
                    </div>
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

export default GeneralTopbarComponent;
