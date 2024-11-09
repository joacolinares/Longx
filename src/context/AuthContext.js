// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { forgotPasswordUser, getCryptoPrice, loginUser, registerUser, requestUserInformation, resetPasswordUser, walletUser } from '../api/api';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [ web3Token,setWeb3Token] = useState(null)
    const [token, setToken] = useState("");
    const [user, setUser] = useState(null);
    const [cryptoPrice, setCryptoPrice] = useState([]);
    const [userInfo,setUserInfo] = useState([])
    const navigate = useNavigate();

    // Load token and user from local storage on component mount

    const web3TokenSetup =(data)=>{
        setWeb3Token(data)
        localStorage.setItem('webToken',data);
        console.log(web3Token)
    }

    // Register handler
    const registerHandler = async (data) => {
        try {
            const userData = await registerUser(data);
            localStorage.setItem('token', userData.data.token);
            localStorage.setItem('user', JSON.stringify(userData.data.user)); // store user object
            setUser(userData.data.user);
            setToken(userData.data.token);
            toast.success('Registration successful!');
            navigate('/dashboard');  // Redirect to dashboard after registration
        } catch (error) {
            toast.error(error.response?.data?.message || 'Registration failed');
        }
    };

    // Login handler
    const loginHandler = async (data) => {
        try {
            const userData = await loginUser(data);
            localStorage.setItem('token', userData.data.token)
            localStorage.setItem('user', JSON.stringify(userData.data.user)); // store user object
            setUser(userData.data.user);
            setToken(userData.data.token);
            toast.success('Login successful!');
            navigate('/dashboard');  // Redirect to dashboard after login
        } catch (error) {
            toast.error(error.response?.data?.message || 'Login failed');
        }
    };

    // forgot Password
    const forgotPasswordHandler = async (data) => {
        try {
            await forgotPasswordUser(data);
            toast.success('Forgot Password successful!');
            navigate('/dashboard');  // Redirect to dashboard after login
        } catch (error) {
            toast.error(error.response?.data?.message || 'Forgot failed');
        }
    };
    const resetPasswordHandler = async (data) => {
        try {
            const userData = await resetPasswordUser(data);
            localStorage.setItem('token', userData.data.token)
            localStorage.setItem('user', JSON.stringify(userData.data.user)); // store user object
            setUser(userData.data.user);
            setToken(userData.data.token);
            toast.success('Password Change  successful!');
            navigate('/dashboard');  // Redirect to dashboard after login
        } catch (error) {
            toast.error(error.response?.data?.message || 'Change failed');
        }
    };
    
    const getCryptoPriceHandler = async () => {
        try {
            const userData = await getCryptoPrice();
            localStorage.setItem('crypto_price', JSON.stringify(userData.data));
            return userData
        } catch (error) {
            toast.error(error.response?.data?.message || 'Change failed');
        }
    };    
    const getWalletHandler = async () => {
        try {
            const userData = await walletUser();
            return userData
        } catch (error) {
            toast.error(error.response?.data?.message || 'Change failed');
        }
    };

     const requestUserInformationHandler = async () => {
        try {
            const userData = await requestUserInformation();
            localStorage.setItem('userInfo', JSON.stringify(userData.data.user)); // store user object
            setUserInfo(userData.data.user);
        } catch (error) {
            console.error('Failed to fetch user information:', error);
            toast.error('Failed to fetch user information. Please try again.');
        }
     }   
    // Logout handler
    const logout = () => {
        try {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setUser(null);
            setToken(null);
            toast.success('Logged out successfully!');
        } catch (error) {
            console.error('Failed to log out:', error);
            toast.error('Failed to log out. Please try again.');
        }
    };



    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        const storedPrice = localStorage.getItem('crypto_price');
        const storedWeb3 = localStorage.getItem('webToken')

        if (storedToken) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
            setCryptoPrice(JSON.parse(storedPrice));
        }
        if (storedWeb3) {
            setWeb3Token(storedWeb3);
        }
    }, []);
    return (
        <AuthContext.Provider value={{
            token,
            user,
            registerHandler,
            loginHandler,
            forgotPasswordHandler,
            resetPasswordHandler,
            getCryptoPriceHandler,
            cryptoPrice,
            getWalletHandler,
            requestUserInformationHandler,
            web3TokenSetup,
            web3Token,
            logout
        }}>
            {children}
            <ToastContainer autoClose={5000} draggable={false} />
        </AuthContext.Provider>
    );
};

export default AuthProvider;
