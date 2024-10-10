import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.scss';
import { AuthContext } from '../../../context/AuthContext';


const Login = () => {
  const navigate = useNavigate();
const {loginHandler} =useContext(AuthContext)
  const [showPass, setShowPass] = useState(false);

  // Form validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Correo es requerido'),
    password: Yup.string().min(6, 'Contraseña debe tener al menos 6 caracteres').required('Contraseña es requerida'),
    checkbox: Yup.bool().oneOf([true], 'Debe aceptar los términos y condiciones')
  });

  const loginSubmit = async (values) => {
    try{
        await loginHandler(values)
    }
    catch(error){
        console.log(error)
    }
  };

  return (
    <>
      {/* Desktop Version */}
      <div className="w-full overflow-x-hidden login-area hidden lg:block">
        <div className="flex w-full">
          <div className="w-3/4 xl:w-2/4 left-login-content">
            <div className="w-10/12 p-5 mx-auto content">
              <div className="top-content cursor-pointer" onClick={() => navigate('/')}>
                <img src="/assets/longx.png" alt="" style={{ width: '150px' }} />
              </div>
              <div className="pt-20 pb-10 hello-conote-contents">
                <h2>INICIA SESIÓN</h2>
              </div>

              {/* Login Form with Formik */}
              <div className="login-form">
                <Formik
                  initialValues={{ email: '', password: '', checkbox: false }}
                  validationSchema={validationSchema}
                  onSubmit={loginSubmit}
                >
                  {({ handleSubmit }) => (
                    <Form className="w-3/4">
                      {/* Email */}
                      <div className="flex flex-col mb-4 form-group">
                        <label htmlFor="email">Correo</label>
                        <Field
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          aria-describedby="helpId"
                          placeholder="example@gmail.com"
                        />
                        <ErrorMessage name="email" component="div" className="error-message" />
                      </div>

                      {/* Password */}
                      <div className="relative flex flex-col mb-4 form-group">
                        <label htmlFor="password">Contraseña</label>
                        <Field
                          type={showPass ? 'text' : 'password'}
                          className="form-control"
                          name="password"
                          id="password"
                        />
                        <button
                          type="button"
                          className="absolute h-full show-pass"
                          onClick={() => setShowPass(!showPass)}
                        >
                          <i className={`fa-solid ${showPass ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                        </button>
                        <ErrorMessage name="password" component="div" className="error-message" />
                      </div>

                      {/* Checkbox */}
                      <div className="py-4 form-check checkbox">
                        <label className="text-white form-check-label">
                          <Field
                            type="checkbox"
                            className="form-check-input"
                            name="checkbox"
                          />
                          Acepto la política de privacidad y los términos y condiciones
                        </label>
                        <ErrorMessage name="checkbox" component="div" className="error-message" />
                      </div>

                      {/* Submit button */}
                      <div className="py-5 login-btn">
                        <button type="submit" className="btn" onClick={handleSubmit}>
                          INICIAR
                        </button>
                      </div>

                      {/* Divider */}
                      <div className="flex items-center justify-between or">
                        <div className="divider"></div>
                        <div className="or-text">o</div>
                        <div className="divider"></div>
                      </div>

                      {/* Google login button */}
                      <div className="py-5 google-btn">
                        <button
                          type="button"
                          className="flex items-center justify-center px-10 btn"
                        >
                          <img src="/assets/icons/google.svg" alt="google" className="w-2/4" />
                          <span className="w-3/4">Continuar con Google</span>
                        </button>
                      </div>

                      {/* Links */}
                      <div className="flex items-center justify-center w-full py-4 text-center already-account">
                        <NavLink to='/forget/password' className="block text-white px-2">
                          OLVIDASTE TU CONTRASEÑA ?
                        </NavLink>
                        <p className="text-center">
                          <NavLink to="/register">Entre aquí</NavLink>
                        </p>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div className="w-1/4 xl:w-2/4 h-full overflow-hidden right-login-content"></div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="mobile-version block lg:hidden">
        <div className="w-full login-area">
          <div className="flex w-full h-full">
            <div className="w-full left-login-content h-full">
              <div className="w-full p-5 mx-auto content h-full flex items-center justify-center flex-col">
                <div className="top-content cursor-pointer" onClick={() => navigate('/')}>
                  <img src="/assets/longx.png" alt="" style={{ width: '150px' }} />
                </div>
                <div className="pb-10 pt-5 hello-conote-contents flex justify-center">
                  <h2>INICIA SESIÓN</h2>
                </div>

                {/* Login Form for Mobile */}
                <Formik
                  initialValues={{ email: '', password: '', checkbox: false }}
                  validationSchema={validationSchema}
                  onSubmit={loginSubmit}
                >
                  {({ handleSubmit }) => (
                    <Form className="w-full">
                      {/* Email */}
                      <div className="flex flex-col mb-4 form-group">
                        <label htmlFor="email">Correo</label>
                        <Field
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          aria-describedby="helpId"
                          placeholder="example@gmail.com"
                        />
                        <ErrorMessage name="email" component="div" className="error-message" />
                      </div>

                      {/* Password */}
                      <div className="relative flex flex-col mb-4 form-group">
                        <label htmlFor="password">Contraseña</label>
                        <Field
                          type={showPass ? 'text' : 'password'}
                          className="form-control"
                          name="password"
                          id="password"
                        />
                        <button
                          type="button"
                          className="absolute h-full show-pass"
                          onClick={() => setShowPass(!showPass)}
                        >
                          <i className={`fa-solid ${showPass ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                        </button>
                        <ErrorMessage name="password" component="div" className="error-message" />
                      </div>

                      {/* Checkbox */}
                      <div className="py-4 form-check checkbox">
                        <label className="text-white form-check-label">
                          <Field
                            type="checkbox"
                            className=""
                            name="checkbox"
                          />
                          Acepto la política de privacidad y los términos y condiciones
                        </label>
                        <ErrorMessage name="checkbox" component="div" className="error-message" />
                      </div>

                      {/* Submit button */}
                      <div className="py-5 login-btn">
                        <button type="submit" className="btn" onClick={handleSubmit}>
                          INICIAR
                        </button>
                      </div>

                      {/* Divider */}
                      <div className="flex items-center justify-between or">
                        <div className="divider"></div>
                        <div className="or-text">o</div>
                        <div className="divider"></div>
                      </div>

                      {/* Google login button */}
                      <div className="py-5 google-btn">
                        <button
                          type="button"
                          className="flex items-center justify-center px-10 btn"
                        >
                          <img src="assets/icons/google.svg" alt="google" className="w-2/4" />
                          <span className="w-3/4">Continuar con Google</span>
                        </button>
                      </div>

                      {/* Links */}
                      <div className="flex flex-col items-center justify-center w-full py-4 text-center already-account">
                        <NavLink to='/forget/password' className="block text-white px-2">
                          OLVIDASTE TU CONTRASEÑA ?
                        </NavLink>
                        <p className="text-center">
                          <NavLink to="/register" >Entre aquí</NavLink>
                        </p>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
