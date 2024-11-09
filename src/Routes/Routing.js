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
import Web3DashboardComponent from '../web3/dashboard/Dashboard';
import Web3GeneralComponent from '../web3/dashboard/components/general/GeneralComponent';
import Web3BilleteraComponent from '../web3/dashboard/components/billetera/BilleteraComponent';
import Web3WithdrawComponent from '../web3/dashboard/components/billetera/withdraw/WithdrawComponent';
import Web3DepositComponent from '../web3/dashboard/components/billetera/deposit/DepositComponent';
import Web3ClipWalletComponent from '../web3/dashboard/components/billetera/wallet/clp/ClipWalletComponent';
import Web3UsdtWalletComponent from '../web3/dashboard/components/billetera/wallet/usdt/UsdtWalletComponent';
import Web3TronixWalletComponent from '../web3/dashboard/components/billetera/wallet/trx/TronixWalletComponent';
import Web3BtcWalletComponent from '../web3/dashboard/components/billetera/wallet/btc/BtcWalletComponent';
import Web3InjWalletComponent from '../web3/dashboard/components/billetera/wallet/inj/InjWalletComponent';
import Web3EthWalletComponent from '../web3/dashboard/components/billetera/wallet/eth/EthWalletComponent';
import Web3UsdtWithdrawComponent from '../web3/dashboard/components/billetera/withdraw/usdt/UsdtWithdrawComponent';
import Web3ClpWithdrawComponent from '../web3/dashboard/components/billetera/withdraw/clp/ClpWithdrawComponent';
import Web3BitcoinWithdrawComponent from '../web3/dashboard/components/billetera/withdraw/btc/BitcoinWithdrawComponent';
import Web3TronixWithdrawComponent from '../web3/dashboard/components/billetera/withdraw/trx/TronixWithdrawComponent';
import Web3EthereumWithdrawComponent from '../web3/dashboard/components/billetera/withdraw/eth/EthereumWithdrawComponent';
import Web3InjectiveWithdrawComponent from '../web3/dashboard/components/billetera/withdraw/inj/InjectiveWithdrawComponent';
import Web3UsdtDepositComponent from '../web3/dashboard/components/billetera/deposit/usdt/UsdtDepositComponent';
import Web3ClpDepositComponent from '../web3/dashboard/components/billetera/deposit/clp/ClpDepositComponent';
import Web3BtcDepositComponent from '../web3/dashboard/components/billetera/deposit/btc/BtcDepositComponent';
import Web3TrxDepositComponent from '../web3/dashboard/components/billetera/deposit/trx/TrxDepositComponent';
import Web3EthDepositComponent from '../web3/dashboard/components/billetera/deposit/eth/EthDepositComponent';
import Web3InjDepositComponent from '../web3/dashboard/components/billetera/deposit/inj/InjDepositComponent';
import Web3ProfileComponent from '../web3/dashboard/components/profile/ProfileComponent';
import Web3TransactionHistory from '../web3/dashboard/components/history/TransactionHistory';


const Routing = () => {
  const { token, web3Token } = useContext(AuthContext);

  return (
    <Routes>
      {token || web3Token ? (
        <>
          {token ? (
            <>
              {/* Token-based routing */}
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="dashboard" element={<DashboardComponent />}>
                <Route path="" element={<Navigate to="general" />} />
                <Route path="general" element={<GeneralComponent />} />
                <Route path="wallet" element={<BilleteraComponent />}>
                  <Route path="" element={<Navigate to="clp" />} />
                  <Route path="clp" element={<ClipWalletComponent />} />
                  <Route path="usdt" element={<UsdtWalletComponent />} />
                  <Route path="trx" element={<TronixWalletComponent />} />
                  <Route path="btc" element={<BtcWalletComponent />} />
                  <Route path="inj" element={<InjWalletComponent />} />
                  <Route path="eth" element={<EthWalletComponent />} />
                </Route>
                <Route path="withdraw" element={<WithdrawComponent />}>
                  <Route path="" element={<Navigate to="clp" />} />
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
                <Route path="profile" element={<ProfileComponent />} />
                <Route path="history" element={<TransactionHistory />} />
              </Route>
            </>
          ) : (
            <>
              {/* Web3Token-based routing */}
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="dashboard" element={<Web3DashboardComponent />}>
                <Route path="" element={<Navigate to="general" />} />
                <Route path="general" element={<Web3GeneralComponent />} />
                <Route path="wallet" element={<Web3BilleteraComponent />}>
                  <Route path="" element={<Navigate to="clp" />} />
                  <Route path="clp" element={<Web3ClipWalletComponent />} />
                  <Route path="usdt" element={<Web3UsdtWalletComponent />} />
                  <Route path="trx" element={<Web3TronixWalletComponent />} />
                  <Route path="btc" element={<Web3BtcWalletComponent />} />
                  <Route path="inj" element={<Web3InjWalletComponent />} />
                  <Route path="eth" element={<Web3EthWalletComponent />} />
                </Route>
                <Route path="withdraw" element={<Web3WithdrawComponent />}>
                  <Route path="" element={<Navigate to="clp" />} />
                  <Route path="usdt" element={<Web3UsdtWithdrawComponent />} />
                  <Route path="clp" element={<Web3ClpWithdrawComponent />} />
                  <Route path="btc" element={<Web3BitcoinWithdrawComponent />} />
                  <Route path="trx" element={<Web3TronixWithdrawComponent />} />
                  <Route path="eth" element={<Web3EthereumWithdrawComponent />} />
                  <Route path="inj" element={<Web3InjectiveWithdrawComponent />} />
                </Route>
                <Route path="deposit" element={<Web3DepositComponent />}>
                  <Route path="usdt" element={<Web3UsdtDepositComponent />} />
                  <Route path="clp" element={<Web3ClpDepositComponent />} />
                  <Route path="btc" element={<Web3BtcDepositComponent />} />
                  <Route path="trx" element={<Web3TrxDepositComponent />} />
                  <Route path="eth" element={<Web3EthDepositComponent />} />
                  <Route path="inj" element={<Web3InjDepositComponent />} />
                </Route>
                <Route path="profile" element={<Web3ProfileComponent />} />
                <Route path="history" element={<Web3TransactionHistory />} />
              </Route>
            </>
          )}
        </>
      ) : (
        <>
          {/* Public Routes for unauthenticated access */}
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<HomeComponent />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forget/password" element={<ForgotPasswordComponent />} />
          <Route path="change/password" element={<ChangePasswordComponent />} />
        </>
      )}
    </Routes>
  );
};

export default Routing;
