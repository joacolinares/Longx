import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomeComponent from '../home/Home';
import Login from '../client/auth/login/Login';
import Register from '../client/auth/register/Register';
import ForgotPasswordComponent from '../client/auth/forgotPassword/ForgotPassword';
import ChangePasswordComponent from '../client/auth/changePassword/ChangePassword';
import DashboardComponent from '../client/dashboard/Dashboard';
import { AuthContext } from '../context/AuthContext';
import GeneralComponent from '../client/dashboard/components/general/GeneralComponent';
import ClipWalletComponent from '../client/dashboard/components/billetera/wallet/clp/ClipWalletComponent';
import BilleteraComponent from '../client/dashboard/components/billetera/BilleteraComponent';
import UsdtWalletComponent from '../client/dashboard/components/billetera/wallet/usdt/UsdtWalletComponent';
import TronixWalletComponent from '../client/dashboard/components/billetera/wallet/trx/TronixWalletComponent';
import BtcWalletComponent from '../client/dashboard/components/billetera/wallet/btc/BtcWalletComponent';
import InjWalletComponent from '../client/dashboard/components/billetera/wallet/inj/InjWalletComponent';
import EthWalletComponent from '../client/dashboard/components/billetera/wallet/eth/EthWalletComponent';
import WithdrawComponent from '../client/dashboard/components/billetera/withdraw/WithdrawComponent';
import DepositComponent from '../client/dashboard/components/billetera/deposit/DepositComponent';
import UsdtDepositComponent from '../client/dashboard/components/billetera/deposit/usdt/UsdtDepositComponent';
import ClpDepositComponent from '../client/dashboard/components/billetera/deposit/clp/ClpDepositComponent';
import BtcDepositComponent from '../client/dashboard/components/billetera/deposit/btc/BtcDepositComponent';
import TrxDepositComponent from '../client/dashboard/components/billetera/deposit/trx/TrxDepositComponent';
import EthDepositComponent from '../client/dashboard/components/billetera/deposit/eth/EthDepositComponent';
import InjDepositComponent from '../client/dashboard/components/billetera/deposit/inj/InjDepositComponent';
import UsdtWithdrawComponent from '../client/dashboard/components/billetera/withdraw/usdt/UsdtWithdrawComponent';
import ClpWithdrawComponent from '../client/dashboard/components/billetera/withdraw/clp/ClpWithdrawComponent';

import TronixWithdrawComponent from '../client/dashboard/components/billetera/withdraw/trx/TronixWithdrawComponent';
import EthereumWithdrawComponent from '../client/dashboard/components/billetera/withdraw/eth/EthereumWithdrawComponent';
import InjectiveWithdrawComponent from '../client/dashboard/components/billetera/withdraw/inj/InjectiveWithdrawComponent';
import BitcoinWithdrawComponent from '../client/dashboard/components/billetera/withdraw/btc/BitcoinWithdrawComponent';
import ComprarVenderComponent from '../client/dashboard/components/comprar-vender/ComprarVenderComponent';
import Otc from '../client/dashboard/components/otc/Otc';
import BtcOtcComponent from '../client/dashboard/components/otc/Btc/BtcOtcComponent';
import UsdtOtcComponent from '../client/dashboard/components/otc/usdt/UsdtOtcComponent';
import ClpOtcComponent from '../client/dashboard/components/otc/clp/ClpOtcComponent';
import TrxOtcComponent from '../client/dashboard/components/otc/trx/TrxOtcComponent';
import EthOtcComponent from '../client/dashboard/components/otc/eth/EthOtcComponent';
import InjOtcComponent from '../client/dashboard/components/otc/inj/InjOtcComponent';
import ProfileComponent from '../client/dashboard/components/profile/ProfileComponent';
import TransactionHistory from '../client/dashboard/components/history/TransactionHistory';


const Routing = () => {
  const { token } = useContext(AuthContext)
  return (
    <Routes>

      {
        !token ?
          <>
            <Route path="/" element={< HomeComponent />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forget/password" element={<ForgotPasswordComponent />} />
            <Route path="change/password" element={<ChangePasswordComponent />} />
          </> :
          <>
            <Route path='/' element={<Navigate to="/dashboard" />} />
            <Route path="dashboard" element={<DashboardComponent />}>
              <Route path="" element={<Navigate to="general" />} />
              <Route path="general" element={<GeneralComponent />} />
              <Route path="wallet" element={<BilleteraComponent />}>
                <Route path='' element={<Navigate to="clp" />} />
                <Route path="clp" element={<ClipWalletComponent />} />
                <Route path="usdt" element={<UsdtWalletComponent />} />
                <Route path="trx" element={<TronixWalletComponent />} />
                <Route path="btc" element={<BtcWalletComponent />} />
                <Route path="inj" element={<InjWalletComponent />} />
                <Route path="eth" element={<EthWalletComponent />} />
              </Route>
              <Route path="withdraw" element={<WithdrawComponent />}>
                <Route path='' element={<Navigate to="clp" />} />
                <Route path="usdt" element={<UsdtWithdrawComponent />} />
                <Route path="clp" element={<ClpWithdrawComponent />} />
                <Route path="btc" element={<BitcoinWithdrawComponent />} />
                <Route path="trx" element={<TronixWithdrawComponent />} />
                <Route path="eth" element={<EthereumWithdrawComponent />} />
                <Route path="inj" element={<InjectiveWithdrawComponent />} />
              </Route>

              <Route path="deposit" element={<DepositComponent />}>
                <Route path="usdt" element={<UsdtDepositComponent />} />
                <Route path="clp" element={<ClpDepositComponent />} />
                <Route path="btc" element={<BtcDepositComponent />} />
                <Route path="trx" element={<TrxDepositComponent />} />
                <Route path="eth" element={<EthDepositComponent />} />
                <Route path="inj" element={<InjDepositComponent />} />
              </Route>
              <Route path="buy-sell" element={<ComprarVenderComponent />} />
              <Route path="otc" element={<Otc />}>
                <Route path='' element={<Navigate to="clp" />} />
                <Route path="usdt" element={<UsdtOtcComponent />} />
                <Route path="clp" element={<ClpOtcComponent />} />
                <Route path="btc" element={<BtcOtcComponent />} />
                <Route path="trx" element={<TrxOtcComponent />} />
                <Route path="eth" element={<EthOtcComponent />} />
                <Route path="inj" element={<InjOtcComponent />} />
              </Route>
              <Route path="profile" element={<ProfileComponent />} />
              <Route path="history" element={<TransactionHistory />} />
            </Route>

            {/* 

          </Route>
          <Route path="buy-sell" element={<ComprarVenderComponent />} />
          <Route path="market-place" element={<MarketplaceComponent />}>
            <Route path="" element={<MarketComponent />} />
            <Route path="home" element={<HomeMarketComponent />} />
            <Route path="payment" element={<PaymentComponent />} />
          </Route>
          <Route path="otc" element={<OTCComponent />}>
            <Route path="" element={<OtcClpComponent />} />
            <Route path="clp" element={<OtcClpComponent />} />
            <Route path="usdt" element={<OtcUsdtComponent />} />
            <Route path="trx" element={<TrxOtcComponent />} />
            <Route path="btc" element={<BtcOtcComponent />} />
            <Route path="inj" element={<InjOtcComponent />} />
          </Route>
          <Route path="historial-transacciones" element={<HistorialTransaccionesComponent />} />
          <Route path="profile" element={<PerfilComponent />} /> */}

          </>
      }
    </Routes>
  );
};

export default Routing;
