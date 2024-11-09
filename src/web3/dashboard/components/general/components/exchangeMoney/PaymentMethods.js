import React, { useState } from 'react';

const PaymentMethods = () => {
  const [currencyDrop, setCurrencyDrop] = useState(false);
  const clpPrice = 820; // Example value, replace with actual state/prop

  const withdraw = () => {
    // Add withdraw logic here
    console.log("Withdraw selected");
  };

  const deposit = () => {
    // Add deposit logic here
    console.log("Deposit selected");
  };

  return (
    <div className="w-full payment-methods">
      <div className="w-full form-group">
        <label htmlFor="paymentMethods">Metedos de Page</label>
        <div className="relative">
          <button
            type="button"
            className="flex items-center justify-between w-full mt-4"
            onClick={() => setCurrencyDrop(!currencyDrop)}
          >
            <div className="flex items-center w-3/4">
              <img src="/assets/logos/chile.svg" alt="chile-logo" />
              <p className="mx-2">Seleccionar método</p>
            </div>
            <div className="flex justify-end w-1/4 pr-1">
              <div className="cursor-pointer arrow">
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </div>
          </button>

          {currencyDrop && (
            <div className="absolute flex-col drop-down">
              <h2 className="p-3">Seleccione el método de pago</h2>
              <button
                type="button"
                className="flex items-center justify-start active"
                onClick={() => {
                  setCurrencyDrop(false);
                  withdraw();
                }}
              >
                <p>CLP en billitera</p>
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

      {/* Change Rate */}
      <div className="py-4 change-rate">
        <div className="flex items-center mb-3">
          <div className="mr-5 shape"></div>
          <p>
            1 USDT = <span>{clpPrice} CLP</span>
          </p>
        </div>
        <div className="flex items-center">
          <div className="mr-5 shape"></div>
          <p>
            Exchange Fee = <span>$2</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
