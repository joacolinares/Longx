import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clipboard } from 'react-clipboard.js'; // Import clipboard if necessary for copy functionality
import"./TrxDepositComponent.scss"
import { AuthContext } from '../../../../../../context/AuthContext';

const TrxDepositComponent = () => {
  const { user, cryptoPrice } = useContext(AuthContext);
  const [wallet, setWallet] = useState(user.wallet);
  const [selectBank, setSelectBank] = useState(true);
  const [IsSearch, setIsSearch] = useState(false);
  const [isBankName, setIsBankName] = useState(false);
  const [isBankNumber, setIsBankNumber] = useState(false);
  const [isBankType, setIsBankType] = useState(false);
  const [isNetwork, setIsNetwork] = useState(false);
  const [currentSearch, setCurrentSearch] = useState({
    icon: '/assets/flag/tronix.svg',
    title: 'TRON',
    subtitle: 'TRX',
  });
  const [searching, setSearching] = useState('');
  const [clipboardText, setClipboardText] = useState('02154dsf4g8hxdrer45gh4245884');
  const [BankName, setBankName] = useState('Lorem ipsum');
  const [BankNumber, setBankNumber] = useState('1234-2574-25410');
  const [AccountTypeName, setAccountTypeName] = useState('CTA');
  const [uploadPhoto, setUploadPhoto] = useState('Upload file');

  const searchRouting = [
    {
      id: 1,
      icon: '/assets/flag/chile.svg',
      title: 'Pesos Chilenos',
      subtitle: 'CLP',
      isActive: false,
    },
    {
      id: 2,
      icon: '/assets/flag/usdt.svg',
      title: 'Tether',
      subtitle: 'USDT',
      isActive: false,
    },
    {
      id: 3,
      icon: '/assets/flag/btc.svg',
      title: 'Bitcoin',
      subtitle: 'BTC',
      isActive: false,
    },
    {
      id: 4,
      icon: '/assets/flag/Injective.svg',
      title: 'Injective',
      subtitle: 'INJ',
      isActive: false,
    },
    {
      id: 5,
      icon: '/assets/flag/tronix.svg',
      title: 'TRON',
      subtitle: 'TRX',
      isActive: false,
    },
    {
      id: 6,
      icon: '/assets/flag/eth.svg',
      title: 'Ethereum',
      subtitle: 'ETH',
      isActive: false,
    },
  ];

  const BankList = [
    { name: 'Banco del Estado de Chile' },
    { name: 'Banco Santander-Chile' },
    { name: 'SCOTIABANK CHILE' },
    { name: 'Banco Falabella' },
  ];

  const BankNumberList = [
    { name: '1234-2574-25410' },
    { name: '1214-2074-20410' },
    { name: '0234-0574-05410' },
    { name: '2234-1574-15410' },
  ];

  const AccountTypeList = [
    { name: 'CTA' },
    { name: 'BTA' },
    { name: 'GTA' },
    { name: 'MTA' },
  ];

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
    {
      id: 3,
      flag: '/assets/flag/chile.svg',
      coinName: 'CLP',
      type: 'Exchange',
      typeBg: 'exchangeC',
      state: 'Done',
      stateC: 'doneC',
      time: '06.01 AM',
    },
    {
      id: 4,
      flag: '/assets/flag/chile.svg',
      coinName: 'CLP',
      type: 'Exchange',
      typeBg: 'exchangeC',
      state: 'Canceled',
      stateC: 'canceledC',
      time: '06.01 AM',
    },
    {
      id: 5,
      flag: '/assets/logos/usdt.svg',
      coinName: 'USDT',
      type: 'Sell',
      typeBg: 'sellC',
      state: 'Pending',
      stateC: 'pendingC',
      time: '06.01 AM',
    },
    {
      id: 6,
      flag: '/assets/flag/chile.svg',
      coinName: 'CLP',
      type: 'Exchange',
      typeBg: 'exchangeC',
      state: 'Done',
      stateC: 'doneC',
      time: '06.01 AM',
    },
  ];

  const NetworkList = [
    { name: 'Tron TRC 20' },
    { name: 'BTC' },
    { name: 'LTC' },
    { name: 'BNB' },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    // AuthService.wallet().then((data) => {
    //   setWallet(data.wallets);
    // });
  }, []);

  const searchModel = (e) => {
    const updatedSearchRouting = searchRouting.map((item) => {
      if (e.id === item.id) {
        item.isActive = !item.isActive;
        setCurrentSearch({ icon: e.icon, title: e.title, subtitle: e.subtitle });
        navigate(`/dashboard/deposit/${e.subtitle.toLowerCase()}`);
        setIsSearch(false);
      } else {
        item.isActive = false;
      }
      return item;
    });
  };

  const BankNameChange = (event) => {
    setBankName(event.target.innerText);
    setIsNetwork(false);
  };

  const BankNumberChange = (event) => {
    setBankNumber(event.target.innerText);
    setIsBankNumber(false);
  };

  const AccountTypeChange = (event) => {
    setAccountTypeName(event.target.innerText);
    setIsBankType(false);
  };

  return (
    <>
    <div className="desktop-version">
      <div className="p-5 deposit-area">
        <div className="flex flex-wrap">
          <div className="w-8/12 md:p-2 lg:p-2 2xl:p-4">
            <div className="p-5 left-content">
              <div className="flex top-bar">
                <div className="w-2/4">
                  <div className="title">
                    <h2>Deposit</h2>
                  </div>
                </div>
                <div className="relative flex items-center justify-end w-2/4">
                  <button
                    type="button"
                    className="flex items-center justify-between drop-button"
                    onClick={() => setIsSearch(!IsSearch)}
                  >
                    <img src={currentSearch.icon} alt="clip" className="mr-2" />
                    <p className="mr-2">{currentSearch.subtitle}</p>
                    <div>
                      <i className="fa-solid fa-angle-down"></i>
                    </div>
                  </button>
                  {IsSearch && (
                    <div className={`${IsSearch? 'active':''} absolute w-full search-drop z-20`} style={{ height: '350px', overflowY: 'auto' }}>
                      <div className="p-5 bg-transparent">
                        <div className="relative w-full form-group">
                          <input
                            type="text"
                            className="w-full form-control"
                            placeholder="Search Currency"
                            value={searching}
                            onChange={(e) => setSearching(e.target.value)}
                          />
                          <button type="button" className="absolute top-0 right-2 h-full">
                            <i className="fa-solid fa-magnifying-glass"></i>
                          </button>
                        </div>
                      </div>
                      {searchRouting.map((items) => (
                        <button
                          key={items.id}
                          type="button"
                          className="flex items-center justify-between  currency-item w-full h-[65px]"
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
              <div className="py-3 price-box">
                <div className="flex items-start justify-between">
                  <div className="price-content">
                    <p>
                      {currentSearch.title}/{currentSearch.subtitle}
                    </p>
                    <h2 className="py-2">{wallet?.trx} TRX</h2>
                  </div>
                  <div className="price-button">
                    <div className="flex">
                      <button
                        type="button"
                        className={selectBank ? '' : 'active'}
                        onClick={() => setSelectBank(!selectBank)}
                      >
                        Bank
                      </button>
                      <button
                        type="button"
                        className={selectBank ? 'active' : ''}
                        onClick={() => setSelectBank(!selectBank)}
                      >
                        QR Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bank Area */}
              {!selectBank && (
                <div className="bank-area">
                  <div className="h-full p-6 bank-details">
                    <h2 className="pb-4">Bank Details</h2>
                    {/* Select Bank */}
                    <div className="relative flex flex-col mb-4 form-group">
                      <label htmlFor="SelectBank">Seleccione Red</label>
                      <button
                        type="button"
                        className="flex justify-start w-full SelectBank-btn"
                        onClick={() => setIsBankName(!isBankName)}
                      >
                        <div className="w-3/4 px-3 text-left">
                          <p>{BankName}</p>
                        </div>
                        <div className="flex justify-end w-1/4 px-3 text-end">
                          <button type="button" className="flex items-center justify-end arrow-btn">
                            <i className={`fa-solid ${isBankName ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                          </button>
                        </div>
                      </button>
                      {isBankName && (
                        <div className={`${isBankName?'active':''} absolute left-0 right-0 w-full p-4 rounded-lg dropdown-menu SelectBank-drop`} >
                          {BankList.map((item, index) => (
                            <button
                              key={index}
                              className="dropdown-item"
                              type="button"
                              onClick={(event) => BankNameChange(event)}
                            >
                              {item.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bank Account */}
                    <div className="relative flex flex-col mb-4 form-group">
                      <label htmlFor="SelectBank">Bank Account</label>
                      <button
                        type="button"
                        className="flex justify-start w-full SelectBank-btn"
                        onClick={() => setIsBankNumber(!isBankNumber)}
                      >
                        <div className="w-3/4 px-3 text-left">
                          <p>{BankNumber}</p>
                        </div>
                        <div className="flex justify-end w-1/4 px-3 text-end">
                          <button type="button" className="flex items-center justify-end arrow-btn">
                            <i className={`fa-solid ${isBankNumber ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                          </button>
                        </div>
                      </button>
                      {isBankNumber && (
                        <div  className={`${isBankNumber?'active':''} absolute left-0 right-0 w-full p-4 rounded-lg dropdown-menu SelectBank-drop`}>
                          {BankNumberList.map((item, index) => (
                            <button
                              key={index}
                              className="dropdown-item"
                              type="button"
                              onClick={(event) => BankNumberChange(event)}
                            >
                              {item.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Account Type */}
                    <div className="flex mb-4">
                      <div className="w-2/4">
                        <div className="relative flex flex-col mb-4 form-group">
                          <label htmlFor="SelectBank">Account Type</label>
                          <button
                            type="button"
                            className="flex justify-start w-full SelectBank-btn"
                            onClick={() => setIsBankType(!isBankType)}
                          >
                            <div className="w-3/4 px-3 text-left">
                              <p>{AccountTypeName}</p>
                            </div>
                            <div className="flex justify-end w-1/4 px-3 text-end">
                              <button type="button" className="flex items-center justify-end arrow-btn">
                                <i className={`fa-solid ${isBankType ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                              </button>
                            </div>
                          </button>
                          {isBankType && (
                            <div  className={`${isBankType?'active':''} absolute left-0 right-0 w-full p-4 rounded-lg dropdown-menu SelectBank-drop`}>
                              {AccountTypeList.map((item, index) => (
                                <button
                                  key={index}
                                  className="dropdown-item"
                                  type="button"
                                  onClick={(event) => AccountTypeChange(event)}
                                >
                                  {item.name}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-2/4">
                        <div className="flex flex-col pl-3 form-group">
                          <label htmlFor="RUT">RUT</label>
                          <input type="text" name="RUT" id="RUTRUT" className="form-control" placeholder="Lorem ipsum" />
                        </div>
                      </div>
                    </div>

                    {/* Business Name and Email */}
                    <div className="flex mb-4">
                      <div className="w-2/4">
                        <div className="flex flex-col form-group">
                          <label htmlFor="BusinessName">Business Name</label>
                          <input
                            type="text"
                            name="BusinessName"
                            id="BusinessName"
                            className="form-control"
                            placeholder="Lorem ipsum"
                          />
                        </div>
                      </div>
                      <div className="w-2/4">
                        <div className="flex flex-col pl-3 form-group">
                          <label htmlFor="Mail">Mail</label>
                          <input
                            type="text"
                            name="Mail"
                            id="Mail"
                            className="form-control"
                            placeholder="Lorem ipsum@gmail.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Confirm Amount and File Upload */}
                    <div className="flex mb-4">
                      <div className="w-2/4">
                        <div className="flex flex-col form-group">
                          <label htmlFor="ConfirmAmount">Confirm Amount</label>
                          <div className="relative">
                            <input
                              type="text"
                              name="ConfirmAmount"
                              id="ConfirmAmount"
                              className="w-full px-10 form-control"
                              placeholder="Lorem ipsum"
                            />
                            <button type="button" className="absolute top-0 bottom-0 left-0 px-4">
                              $
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="w-2/4">
                        <div className="flex flex-col pl-3 form-group">
                          <label htmlFor="file">Attach file</label>
                          <div className="flex items-center justify-between file-input">
                            <div>
                              <label htmlFor="file">
                                <p>{uploadPhoto}</p>
                              </label>
                            </div>
                            <div>
                              <label htmlFor="file">
                                <img src="/assets/icons/uploadFile.svg" alt="uploadFile" />
                              </label>
                            </div>
                            <input
                              type="file"
                              className="hidden"
                              id="file"
                              onChange={(e) => setUploadPhoto(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="py-5 save-button">
                      <button type="button" className="btn">
                        Deposit
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* QR Code Payment */}
              {selectBank && (
                <div className="p-4 bank-qr">
                  <div className="py-4 title">
                    <p>Scan Code to Make Payment</p>
                  </div>
                  <div className="flex justify-center w-full py-4 text-center qr-code-box">
                    <img src="/assets/logos/qrCode.svg" alt="qrCode" />
                  </div>

                  <div className="relative flex flex-col mb-4 form-group">
                    <label htmlFor="SelectBank">Seleccione Red</label>
                    <button
                      type="button"
                      className="flex justify-start w-full SelectBank-btn"
                      onClick={() => setIsNetwork(!isNetwork)}
                    >
                      <div className="w-3/4 px-3 text-left">
                        <p>{BankName}</p>
                      </div>
                      <div className="flex justify-end w-1/4 px-3 text-end">
                        <button type="button" className="flex items-center justify-end arrow-btn">
                          <i className={`fa-solid ${isNetwork ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                        </button>
                      </div>
                    </button>
                    {isNetwork && (
                      <div className="absolute left-0 right-0 w-full p-4 rounded-lg dropdown-menu SelectBank-drop">
                        {NetworkList.map((item, index) => (
                          <button
                            key={index}
                            className="dropdown-item"
                            type="button"
                            onClick={(event) => BankNameChange(event)}
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col w-full h-full form-group">
                    <label htmlFor="ValuePerUsdt">Address</label>
                    <div className="relative w-full">
                      <input
                        type="text"
                        name="ValuePerUsdt"
                        id="ValuePerUsdt"
                        className="w-full form-control"
                        placeholder="RED TRON TRC-20"
                        value={clipboardText}
                        onChange={(e) => setClipboardText(e.target.value)}
                      />
                      <button
                        type="button"
                        className="absolute btn-copy"
                        data-toggle="button"
                        onClick={() => navigator.clipboard.writeText(clipboardText)}
                      >
                        Copiar <i className="fa-regular fa-copy"></i>
                      </button>
                    </div>
                  </div>

                  <div className="py-5 save-button">
                    <button type="button" className="btn">
                      Deposit
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Transaction History */}
          <div className="w-4/12 md:p-2 lg:p-2 2xl:p-4">
            <div className="px-6 py-5 transaction-history">
              <div className="flex justify-between top-text">
                <p>Ultimos Deposito</p>
                <button>View More</button>
              </div>
              {history.map((items) => (
                <div key={items.id} className="flex items-center py-2 transaction-table-body">
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
          </div>
        </div>
      </div>
    </div>
    <div className="mobile-version">
      <div className="p-5 deposit-area">
        <div className="flex flex-wrap">
          <div className="w-full md:p-2 lg:p-2 2xl:p-4">
            <div className="p-5 left-content">
              <div className="flex top-bar">
                <div className="w-2/4">
                  <div className="title">
                    <h2>Deposit</h2>
                  </div>
                </div>
                <div className="relative flex items-center justify-end w-2/4">
                  <button
                    type="button"
                    className="flex items-center justify-between drop-button"
                    onClick={() => setIsSearch(!IsSearch)}
                  >
                    <img src={currentSearch.icon} alt="clip" className="mr-2" />
                    <p className="mr-2">{currentSearch.subtitle}</p>
                    <div>
                      <i className="fa-solid fa-angle-down"></i>
                    </div>
                  </button>
                  {IsSearch && (
                    <div className={`${IsSearch? 'active':''} absolute w-full search-drop z-20`} style={{ height: '350px', overflowY: 'auto' }}>
                      <div className="p-5 bg-transparent">
                        <div className="relative w-full form-group">
                          <input
                            type="text"
                            className="w-full form-control"
                            placeholder="Search Currency"
                            value={searching}
                            onChange={(e) => setSearching(e.target.value)}
                          />
                          <button type="button" className="absolute top-0 right-2 h-full">
                            <i className="fa-solid fa-magnifying-glass"></i>
                          </button>
                        </div>
                      </div>
                      {searchRouting.map((items) => (
                        <button
                          key={items.id}
                          type="button"
                          className="flex items-center justify-between  currency-item w-full h-[65px]"
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
              <div className="py-3 price-box">
                <div className="flex items-start justify-between">
                  <div className="price-content">
                    <p>
                      {currentSearch.title}/{currentSearch.subtitle}
                    </p>
                    <h2 className="py-2">{wallet?.trx} TRX</h2>
                  </div>
                  <div className="price-button">
                    <div className="flex">
                      <button
                        type="button"
                        className={selectBank ? '' : 'active'}
                        onClick={() => setSelectBank(!selectBank)}
                      >
                        Bank
                      </button>
                      <button
                        type="button"
                        className={selectBank ? 'active' : ''}
                        onClick={() => setSelectBank(!selectBank)}
                      >
                        QR Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bank Area */}
              {!selectBank && (
                <div className="bank-area">
                  <div className="h-full p-6 bank-details">
                    <h2 className="pb-4">Bank Details</h2>
                    {/* Select Bank */}
                    <div className="relative flex flex-col mb-4 form-group">
                      <label htmlFor="SelectBank">Seleccione Red</label>
                      <button
                        type="button"
                        className="flex justify-start w-full SelectBank-btn"
                        onClick={() => setIsBankName(!isBankName)}
                      >
                        <div className="w-3/4 px-3 text-left">
                          <p>{BankName}</p>
                        </div>
                        <div className="flex justify-end w-1/4 px-3 text-end">
                          <button type="button" className="flex items-center justify-end arrow-btn">
                            <i className={`fa-solid ${isBankName ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                          </button>
                        </div>
                      </button>
                      {isBankName && (
                        <div className={`${isBankName?'active':''} absolute left-0 right-0 w-full p-4 rounded-lg dropdown-menu SelectBank-drop`} >
                          {BankList.map((item, index) => (
                            <button
                              key={index}
                              className="dropdown-item"
                              type="button"
                              onClick={(event) => BankNameChange(event)}
                            >
                              {item.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bank Account */}
                    <div className="relative flex flex-col mb-4 form-group">
                      <label htmlFor="SelectBank">Bank Account</label>
                      <button
                        type="button"
                        className="flex justify-start w-full SelectBank-btn"
                        onClick={() => setIsBankNumber(!isBankNumber)}
                      >
                        <div className="w-3/4 px-3 text-left">
                          <p>{BankNumber}</p>
                        </div>
                        <div className="flex justify-end w-1/4 px-3 text-end">
                          <button type="button" className="flex items-center justify-end arrow-btn">
                            <i className={`fa-solid ${isBankNumber ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                          </button>
                        </div>
                      </button>
                      {isBankNumber && (
                        <div  className={`${isBankNumber?'active':''} absolute left-0 right-0 w-full p-4 rounded-lg dropdown-menu SelectBank-drop`}>
                          {BankNumberList.map((item, index) => (
                            <button
                              key={index}
                              className="dropdown-item"
                              type="button"
                              onClick={(event) => BankNumberChange(event)}
                            >
                              {item.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Account Type */}
                    <div className="flex mb-4">
                      <div className="w-2/4">
                        <div className="relative flex flex-col mb-4 form-group">
                          <label htmlFor="SelectBank">Account Type</label>
                          <button
                            type="button"
                            className="flex justify-start w-full SelectBank-btn"
                            onClick={() => setIsBankType(!isBankType)}
                          >
                            <div className="w-3/4 px-3 text-left">
                              <p>{AccountTypeName}</p>
                            </div>
                            <div className="flex justify-end w-1/4 px-3 text-end">
                              <button type="button" className="flex items-center justify-end arrow-btn">
                                <i className={`fa-solid ${isBankType ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                              </button>
                            </div>
                          </button>
                          {isBankType && (
                            <div  className={`${isBankType?'active':''} absolute left-0 right-0 w-full p-4 rounded-lg dropdown-menu SelectBank-drop`}>
                              {AccountTypeList.map((item, index) => (
                                <button
                                  key={index}
                                  className="dropdown-item"
                                  type="button"
                                  onClick={(event) => AccountTypeChange(event)}
                                >
                                  {item.name}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-2/4">
                        <div className="flex flex-col pl-3 form-group">
                          <label htmlFor="RUT">RUT</label>
                          <input type="text" name="RUT" id="RUTRUT" className="form-control" placeholder="Lorem ipsum" />
                        </div>
                      </div>
                    </div>

                    {/* Business Name and Email */}
                    <div className="flex mb-4">
                      <div className="w-2/4">
                        <div className="flex flex-col form-group">
                          <label htmlFor="BusinessName">Business Name</label>
                          <input
                            type="text"
                            name="BusinessName"
                            id="BusinessName"
                            className="form-control"
                            placeholder="Lorem ipsum"
                          />
                        </div>
                      </div>
                      <div className="w-2/4">
                        <div className="flex flex-col pl-3 form-group">
                          <label htmlFor="Mail">Mail</label>
                          <input
                            type="text"
                            name="Mail"
                            id="Mail"
                            className="form-control"
                            placeholder="Lorem ipsum@gmail.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Confirm Amount and File Upload */}
                    <div className="flex mb-4">
                      <div className="w-2/4">
                        <div className="flex flex-col form-group">
                          <label htmlFor="ConfirmAmount">Confirm Amount</label>
                          <div className="relative">
                            <input
                              type="text"
                              name="ConfirmAmount"
                              id="ConfirmAmount"
                              className="w-full px-10 form-control"
                              placeholder="Lorem ipsum"
                            />
                            <button type="button" className="absolute top-0 bottom-0 left-0 px-4">
                              $
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="w-2/4">
                        <div className="flex flex-col pl-3 form-group">
                          <label htmlFor="file">Attach file</label>
                          <div className="flex items-center justify-between file-input">
                            <div>
                              <label htmlFor="file">
                                <p>{uploadPhoto}</p>
                              </label>
                            </div>
                            <div>
                              <label htmlFor="file">
                                <img src="/assets/icons/uploadFile.svg" alt="uploadFile" />
                              </label>
                            </div>
                            <input
                              type="file"
                              className="hidden"
                              id="file"
                              onChange={(e) => setUploadPhoto(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="py-5 save-button">
                      <button type="button" className="btn">
                        Deposit
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* QR Code Payment */}
              {selectBank && (
                <div className="p-4 bank-qr">
                  <div className="py-4 title">
                    <p>Scan Code to Make Payment</p>
                  </div>
                  <div className="flex justify-center w-full py-4 text-center qr-code-box">
                    <img src="/assets/logos/qrCode.svg" alt="qrCode" />
                  </div>

                  <div className="relative flex flex-col mb-4 form-group">
                    <label htmlFor="SelectBank">Seleccione Red</label>
                    <button
                      type="button"
                      className="flex justify-start w-full SelectBank-btn"
                      onClick={() => setIsNetwork(!isNetwork)}
                    >
                      <div className="w-3/4 px-3 text-left">
                        <p>{BankName}</p>
                      </div>
                      <div className="flex justify-end w-1/4 px-3 text-end">
                        <button type="button" className="flex items-center justify-end arrow-btn">
                          <i className={`fa-solid ${isNetwork ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                        </button>
                      </div>
                    </button>
                    {isNetwork && (
                      <div className="absolute left-0 right-0 w-full p-4 rounded-lg dropdown-menu SelectBank-drop">
                        {NetworkList.map((item, index) => (
                          <button
                            key={index}
                            className="dropdown-item"
                            type="button"
                            onClick={(event) => BankNameChange(event)}
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col w-full h-full form-group">
                    <label htmlFor="ValuePerUsdt">Address</label>
                    <div className="relative w-full">
                      <input
                        type="text"
                        name="ValuePerUsdt"
                        id="ValuePerUsdt"
                        className="w-full form-control"
                        placeholder="RED TRON TRC-20"
                        value={clipboardText}
                        onChange={(e) => setClipboardText(e.target.value)}
                      />
                      <button
                        type="button"
                        className="absolute btn-copy"
                        data-toggle="button"
                        onClick={() => navigator.clipboard.writeText(clipboardText)}
                      >
                        Copiar <i className="fa-regular fa-copy"></i>
                      </button>
                    </div>
                  </div>

                  <div className="py-5 save-button">
                    <button type="button" className="btn">
                      Deposit
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Transaction History */}
          <div className="w-full md:p-2 lg:p-2 2xl:p-4">
            <div className="px-6 py-5 transaction-history">
              <div className="flex justify-between top-text">
                <p>Ultimos Deposito</p>
                <button>View More</button>
              </div>
              {history.map((items) => (
                <div key={items.id} className="flex items-center py-2 transaction-table-body">
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
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TrxDepositComponent;
