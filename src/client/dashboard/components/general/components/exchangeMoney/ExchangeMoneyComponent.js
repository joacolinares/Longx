import React, { useState, useEffect } from 'react';
import './ExchangeMoneyComponent.scss';
import { Dialog } from 'primereact/dialog';
import PaymentMethods from './PaymentMethods';

const ExchangeMoneyComponent = ({ usdtPrice, clpPrice, wallet, mainBalance,isPayment }) => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [moneySwap, setMoneySwap] = useState(false);
  const [compareUsdt, setCompareUsdt] = useState('');
  const [compareClp, setCompareClp] = useState('');
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // If there's any logic needed to run on mount or state change, it can go here.
  }, []);

  const compareClpPrice = (e) => {
    const value = parseFloat(e.target.value) || 0; // Parse input to number and set to 0 if invalid
    setCompareClp(value);
    setCompareUsdt((value / clpPrice).toFixed(5)); // Update USDT price based on CLP
  };

  const compareUsdtPrice = (e) => {
    const value = parseFloat(e.target.value) || 0; // Parse input to number and set to 0 if invalid
    setCompareUsdt(value);
    setCompareClp((value * clpPrice).toFixed(5)); // Update CLP price based on USDT
  };

  const toggleSwap = () => {
    setMoneySwap(!moneySwap);
    // When swapping, reset both inputs
    setCompareUsdt('');
    setCompareClp('');
  };

  const openDialog = () => {
    setDialogVisible(!dialogVisible);
  };

  const calculateTotalFee = () => {
    const fee = (parseFloat(compareClp) || 0) * 0.03; // Assuming a 3% fee, handling invalid values
    return (parseFloat(compareClp) || 0) + fee;
  };

  return (
    <>
      <div className="exchange-bar">
        <div className="flex items-center w-full top-btn-group">
          <button type="button" className="btn"><span>Comprar</span></button>
          <button type="button" className="mx-1 btn2"><span className="ml-2">Vender</span></button>
          <button type="button" className="btn3"><span className="ml-5">Exchange</span></button>
        </div>

        <div className="flex flex-col items-start justify-between p-5 compare-market">
          {/* First input section */}
          <div className="flex flex-col w-full h-full form-group">
            <label htmlFor="total">Total</label>
            {!moneySwap ? (
              <div className="relative w-full">
                <input
                  type="text"
                  name="total"
                  id="Total"
                  className="w-full form-control"
                  placeholder={usdtPrice}
                  value={compareUsdt}
                  onChange={compareUsdtPrice}
                />
                <p className="absolute top-0 h-full left-2 dollar-sign">$</p>
                <button type="button" className="absolute top-0 right-0 h-full">
                  <img src="/assets/logos/usdt.svg" alt="usdt" className="mx-2" />
                  USDT
                </button>
              </div>
            ) : (
              <div className="relative w-full">
                <input
                  type="text"
                  name="total"
                  id="Total"
                  className="w-full form-control"
                  placeholder={clpPrice}
                  value={compareClp}
                  onChange={compareClpPrice}
                />
                <p className="absolute top-0 h-full left-2 dollar-sign">$</p>
                <button type="button" className="absolute top-0 right-0 h-full">
                  <img src="/assets/flag/chile.svg" alt="clp" className="mx-2" />
                  CLP
                </button>
              </div>
            )}
          </div>

          {/* Swap Button */}
          <div className="flex items-center justify-start w-full h-full py-4">
            <div className="divider"></div>
            <div className="flex justify-center w-1/4 mx-2 swap cursor-pointer" onClick={toggleSwap}>
              <img src="/assets/icons/Swap.svg" alt="Swap" />
            </div>
            <div className="divider"></div>
          </div>

          {/* Second input section */}
          <div className="flex flex-col w-full h-full mb-4 form-group">
            <label htmlFor="total">Total</label>
            {moneySwap ? (
              <div className="relative w-full">
                <input
                  type="text"
                  name="total"
                  id="Total"
                  className="w-full form-control"
                  placeholder={usdtPrice}
                  value={compareUsdt}
                  onChange={compareUsdtPrice}
                />
                <p className="absolute top-0 h-full left-2 dollar-sign">$</p>
                <button type="button" className="absolute top-0 right-0 h-full">
                  <img src="/assets/logos/usdt.svg" alt="usdt" className="mx-2" />
                  USDT
                </button>
              </div>
            ) : (
              <div className="relative w-full">
                <input
                  type="text"
                  name="total"
                  id="Total"
                  className="w-full form-control"
                  placeholder={clpPrice}
                  value={compareClp}
                  onChange={compareClpPrice}
                />
                <p className="absolute top-0 h-full left-2 dollar-sign">$</p>
                <button type="button" className="absolute top-0 right-0 h-full">
                  <img src="/assets/flag/chile.svg" alt="clp" className="mx-2" />
                  CLP
                </button>
              </div>
            )}
          </div>

          {/* Percentage Section */}
          <div className="w-full h-full py-4 percentage">
            <h5 className="py-3">Porcentaje</h5>
            <div className="w-full percentage-line">
              <div className="flex items-center justify-start w-full">
                <p className={`round-shape ${percentage >= 25 ? 'active' : ''}`}></p>
                <div className="divider"></div>
                <p className={`round-shape ${percentage >= 50 ? 'active' : ''}`}></p>
                <div className="divider"></div>
                <p className={`round-shape ${percentage >= 75 ? 'active' : ''}`}></p>
                <div className="divider"></div>
                <p className={`round-shape ${percentage === 100 ? 'active' : ''}`}></p>
              </div>
            </div>
          </div>

            {
              isPayment ? <PaymentMethods/> :''
            }
          {/* Exchange Button */}
          <div className="h-full py-4 exchange-btn">
            <button type="button" className="btn" onClick={openDialog}>Exchange</button>
          </div>
        </div>
      </div>
      <div className="modal-area">
        <Dialog header="Exchange" visible={dialogVisible} modal draggable={false} resizable={false} onHide={openDialog}>
          <div className="modal">
            <div className="p-5 modal-content">
              <div className="py-10 form">
                <h4 className="py-5 title">Operacion en progreso</h4>
                <div className="mb-4 convert">
                  <h2>USDT/CLP</h2>
                </div>
                <div className="mb-4 convert-value">
                  <h2>${compareUsdt} = ${compareClp}</h2>
                </div>
                <div className="fee-add">
                  <h4>FEE</h4>
                  <h4 className="price">{calculateTotalFee().toFixed(5)}</h4>
                </div>
              </div>
            </div>
            <div className="pb-10 submit-modal">
              <button type="button" className="btn" onClick={openDialog}>
                DE ACUERDO
              </button>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default ExchangeMoneyComponent;
