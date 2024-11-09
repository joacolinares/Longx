import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // For navigation
import axios from 'axios'; // For making API requests
import "./Home.scss"
import { ethers } from "ethers";
import { AuthContext } from '../context/AuthContext';
const HomeComponent = () => {
  const [account, setAccount] = useState({ address: "", balance: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const {web3TokenSetup} =useContext(AuthContext)
    const navigate = useNavigate(); // Replacing Angular's Router for navigation
    const apiUrl = 'https://longx-backend.vercel.app';
    // Form state
    const [formData, setFormData] = useState({
      subject: '',
      email: '',
      message: ''
    });
  
    // Handle input change for form fields
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
    // Navigate to register page
    const goRegister = () => {
      navigate('/register'); // Similar to this.router.navigate(['/register'])
    };
  
    // Send mail function
    const sendMail = async () => {
      try {
        const response = await axios.post(`${apiUrl}/send/message`, formData); // Replace YOUR_API_ENDPOINT with your API URL
        console.log(response);
        // toast.success('Message Sent Successfully');
        setFormData({ subject: '', email: '', message: '' }); // Reset form data
      } catch (error) {
        console.log(error);
        // toast.error('Error Sending Message');
      }
    };

    const connectWallet = async () => {
      try {
        if (window.ethereum) {
          const provider = new ethers.BrowserProvider(window.ethereum);
          
          // Request account access and get address
          const accounts = await provider.send("eth_requestAccounts", []);
          const address = accounts[0];
  
          // Get balance
          const balance = await provider.getBalance(address);
  
          // Store address and balance in state
          setAccount({
            address,
            balance: ethers.formatEther(balance)
          });
          web3TokenSetup(address)
          console.log(address);
        } else {
          setErrorMessage("MetaMask is not installed!");
        }
      } catch (error) {
        if (error.code === "ACTION_REJECTED") {
          setErrorMessage("Connection request was rejected.");
        } else {
          setErrorMessage("An error occurred while connecting to MetaMask.");
        }
        console.error("Connection error:", error);
      }
    };
  return (
    <div className="overflow-hidden app">
      <header>
        <div className="w-11/12 mx-auto lg:w-10/12">
          <div className="flex items-center menu-area">
            <div className="w-4/12">
              <div className="left_menu_bar">
                <button type="button">
                  <img src="assets/home/icons/toggle.svg" alt="toggle" />
                </button>
              </div>
            </div>
            <div className="flex justify-center w-4/12">
              <div className="logo_bar">
                <button type="button">
                  <img src="/assets/longx.png" alt="toggle" />
                </button>
              </div>
            </div>
            <div className="w-4/12">
              <div className="social_icons">
                <ul className="flex items-center justify-end nav">
                  <li className="mx-4 nav-item">
                    <NavLink to="/" className="nav-link">
                      <img src="assets/home/icons/x.svg" alt="pic" />
                    </NavLink>
                  </li>
                  <li className="mx-4 nav-item">
                    <NavLink to="/" className="nav-link">
                      <img src="assets/home/icons/instagram.svg" alt="pic" />
                    </NavLink>
                  </li>
                  <li className="mx-4 nav-item">
                    <NavLink to="/" className="nav-link">
                      <img src="assets/home/icons/facebook.svg" alt="pic" />
                    </NavLink>
                  </li>
                  <li className="ml-4 nav-item">
                    <NavLink to="/" className="nav-link">
                      <img src="assets/home/icons/youtube.svg" alt="pic" />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Banner Section */}
      <section className="section1 banner_area">
        <div className="relative w-11/12 h-full mx-auto lg:w-9/12">
          <div className="flex flex-col items-center justify-center h-full banner_content">
            <div className="title">
              <h1>Long X</h1>
              <h4 className="subtitle">intercambio de criptomonedas</h4>
            </div>
            <div className="flex items-center justify-center pt-5 banner_btn">
              <button
                type="button"
                className="mx-4 create_account_btn"
                onClick={goRegister}
              >
                Crear Cuenta
              </button>
              <button type="button" className="get_into_btn" onClick={connectWallet}>
                <span>Connect Wallet</span>
                <i className="mx-2 fa-solid fa-angle-right"></i>
              </button>
            </div>
            <div className="flex justify-center items-center pt-10">
              <button type="button" className="-mr-3">
                <img src="assets/appstore.png" alt="appstore" style={{ width: '200px' }} />
              </button>
              <button type="button">
                <img src="assets/playstore.png" alt="appstore" style={{ width: '200px' }} />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 overly"></div>
      </section>

      {/* Quick Access Section */}
      <section className="relative pt-24 section2 quick_access">
        <div className="relative w-11/12 h-full mx-auto lg:w-9/12">
          <div className="quick_content py-14">
            <div className="top_items pb-14">
              <h1>Acceso rápido a criptomonedas en chile</h1>
            </div>
            <div className="flex flex-col items-center justify-between buy_send lg:flex-row lg:justify-start">
              <div className="flex justify-end w-full lg:w-6/12">
                <div className="relative inline-block buy_send_left_content">
                  <img src="assets/home/buy.png" alt="buy" className="object-cover w-full h-full" />
                  <div className="h-full p-10 overflow-hidden overly_items">
                    <div className="flex h-full">
                      <div className="flex flex-col items-start justify-between w-11/12 h-full">
                        <div className="flex justify-center w-full wallet_box">
                          <button type="button">
                            <img src="assets/home/icons/wallet.svg" alt="wallet" />
                          </button>
                        </div>
                        <div className="content">
                          <h4>Compra y guarda</h4>
                        </div>
                      </div>
                      <div className="w-1/12">
                        <div className="flex flex-col items-center justify-center h-full overly_content2">
                          <div className="line_txt">01</div>
                          <div className="line_chart"></div>
                          <div className="redEffects"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-12/12 lg:w-6/12">
                <div className="relative inline-block buy_send_right_content">
                  <img src="assets/home/send.png" alt="buy" className="object-cover w-full h-full" />
                  <div className="h-full p-10 overflow-hidden overly_items">
                    <div className="flex h-full">
                      <div className="flex flex-col items-start justify-between w-11/12 h-full">
                        <div className="flex justify-center w-full wallet_box">
                          <button type="button">
                            <img src="assets/home/icons/gift.svg" alt="wallet" />
                          </button>
                        </div>
                        <div className="content">
                          <h4 className="capitalize">
                            compra y envia <br /> a cualquier <br /> parte del mundo
                          </h4>
                        </div>
                      </div>
                      <div className="w-1/12">
                        <div className="flex flex-col items-center justify-center h-full overly_content2">
                          <div className="line_txt">02</div>
                          <div className="line_chart"></div>
                          <div className="redEffects"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full details_content">
            <div className="flex flex-col justify-center mx-auto lg:flex-row w-12/12 lg:w-9/12">
              <div className="w-11/12 mx-auto lg:w-7/12">
                <div className="left_details">
                  <p>
                    Las criptomonedas hoy se usan como inversión especulativa pero también como dinero
                    funcional, puedes enviarlas, comprar cosas o pagar proveedores en el caso de empresas. Cada
                    día son más los usos
                  </p>
                </div>
              </div>
              <div className="w-12/12 lg:w-5/12">
                <div className="w-full right_details">
                  <div className="flex items-center justify-center lg:items-start lg:justify-end icon_box">
                    <button type="button" className="mx-3">
                      <img src="assets/home/icons/thunder.svg" alt="thunder" />
                    </button>
                    <p>LA RAPIDEZ Y EFICIENCIA QUE NECESITAS</p>
                  </div>
                  <div className="divider"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute effects1"></div>
          <div className="absolute effects2"></div>
        </div>
      </section>

      {/* Create Account Section */}
      <section className="h-full section-3 create_account_area pt-14 pb-60">
        <div className="relative w-11/12 h-full mx-auto lg:w-9/12">
          <div className="p-6 create_account">
            <div className="top-title">
              <h2>
                Puedes crear tu cuenta <span>como persona natural o como empresa</span> accede a nuestro
                servicio OTC (over the counter) donde podrás comprar
              </h2>
            </div>
            <div className="flex items-end w-full flex-col lg:flex-row">
              <div className="w-11/12 lg:w-6/12">
                <div className="left_price_menu">
                  <ul className="flex items-center nav">
                    <li className="flex items-center nav-item">
                      <NavLink to="/" className="nav-link">
                        Velocidad
                      </NavLink>
                      <div className="mx-2 shape active"></div>
                    </li>
                    <li className="flex items-center nav-item">
                      <NavLink to="/" className="nav-link">
                        Eficiencia
                      </NavLink>
                      <div className="mx-2 shape"></div>
                    </li>
                    <li className="flex items-center nav-item">
                      <NavLink to="/" className="nav-link">
                        Comodidad
                      </NavLink>
                      <div className="mx-2 shape"></div>
                    </li>
                    <li className="flex items-center nav-item">
                      <NavLink to="/" className="nav-link">
                        Fiabilidad
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-11/12 lg:w-6/12">
                <div className="right_price_box mt-14">
                  <div className="flex justify-center pb-3 database">
                    <button type="button" className="database-btn">
                      <img src="assets/home/icons/database.svg" alt="database" />
                    </button>
                  </div>
                  <div className="pb-3 sub-title text-white">
                    <h3>GRANDES MONTOS SOBRE</h3>
                  </div>
                  <div className="pb-3 price">
                    <h1>$50,000</h1>
                  </div>
                  <div className="details">
                    <p>A TARIFA PREFERENCIAL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="relative footer py-14">
        <div className="relative w-11/12 lg:w-9/12 h-full mx-auto py-14">
          <div className="top_bar">
            <div className="flex items-center flex-col lg:flex-row justify-center lg:justify-start">
              <div className="w-11-/12 lg:w-8/12 h-full">
                <div className="relative flex flex-col lg:flex-row items-center h-full left_content">
                  <h1>
                    CREAR <br /> CUENTA AHORA
                  </h1>
                  <button type="button" className="lg:absolute arrow_btn" onClick={goRegister}>
                    <img src="assets/home/icons/arrow.svg" alt="arrow" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center lg:w-4/12 h-full">
                <div className="right_button">
                  <button type="button" onClick={goRegister}>
                    Crear Cuenta
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="h-full main_content pt-14">
            <div className="flex h-full flex-col justify-center items-center lg:flex-row">
              <div className="w-11/12 lg:w-6/12 h-full lg:pl-10 p:0 mx-auto">
                <div className="relative h-full left_content">
                  <div className="logo_bar">
                    <NavLink to="/">
                      <img src="/assets/longx.png" alt="logo" />
                    </NavLink>
                  </div>
                  <div className="pt-10 social_icons hidden lg:block">
                    <ul className="flex items-center justify-start nav">
                      <li className="mx-4 nav-item">
                        <NavLink to="/" className="nav-link">
                          <img src="assets/home/icons/x.svg" alt="pic" />
                        </NavLink>
                      </li>
                      <li className="mx-4 nav-item">
                        <NavLink to="/" className="nav-link">
                          <img src="assets/home/icons/instagram.svg" alt="pic" />
                        </NavLink>
                      </li>
                      <li className="mx-4 nav-item">
                        <NavLink to="/" className="nav-link">
                          <img src="assets/home/icons/facebook.svg" alt="pic" />
                        </NavLink>
                      </li>
                      <li className="ml-4 nav-item">
                        <NavLink to="/" className="nav-link">
                          <img src="assets/home/icons/youtube.svg" alt="pic" />
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="absolute copyright bottom-10 left-10 hidden lg:block">
                    <p>Copyright © 2023. Todos los derechos reservados.</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="w-11/12 lg:w-6/12 mx-auto h-full">
                <div className="h-full contact_form">
                  <div className="pb-5 title">
                    <h4>¿Tiene preguntas? Contáctenos</h4>
                  </div>
                  <div className="mb-5 form-group">
                    <label htmlFor="Name">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="Name"
                      placeholder="Introduce tu nombre..."
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-5 form-group">
                    <label htmlFor="Email">Correo electrónico</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      id="Email"
                      placeholder="Introduce tu correo..."
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-5 form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      rows="3"
                      placeholder="Escribe tu mensaje..."
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="submit_btn">
                    <button type="button" onClick={sendMail}>
                      Enviar mensaje
                    </button>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="pt-10 social_icons block lg:hidden relative z-10">
                  <ul className="flex items-center justify-center nav">
                    <li className="mx-4 nav-item">
                      <NavLink to="/" className="nav-link">
                        <img src="assets/home/icons/x.svg" alt="pic" />
                      </NavLink>
                    </li>
                    <li className="mx-4 nav-item">
                      <NavLink to="/" className="nav-link">
                        <img src="assets/home/icons/instagram.svg" alt="pic" />
                      </NavLink>
                    </li>
                    <li className="mx-4 nav-item">
                      <NavLink to="/" className="nav-link">
                        <img src="assets/home/icons/facebook.svg" alt="pic" />
                      </NavLink>
                    </li>
                    <li className="ml-4 nav-item">
                      <NavLink to="/" className="nav-link">
                        <img src="assets/home/icons/youtube.svg" alt="pic" />
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div className="relative z-10 text-center copyright bottom-10 left-10 block lg:hidden">
                  <p>Copyright © 2023. Todos los derechos reservados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Effects */}
        <div className="absolute effects1">
          <img src="assets/home/icons/cube.svg" alt="cube" />
        </div>
        <div className="absolute effects2">
          <img src="assets/home/cube.png" alt="cube" />
        </div>
        <div className="absolute effects3"></div>
      </section>
    </div>
  );
};

export default HomeComponent;
