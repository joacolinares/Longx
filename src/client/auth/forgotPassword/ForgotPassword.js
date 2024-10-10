import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./Forgot.scss"
import { AuthContext } from '../../../context/AuthContext';
// Yup validation schema
const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Correo inválido').required('Correo es requerido'),
});

const ForgotPasswordComponent = () => {
  const {forgotPasswordHandler}= useContext(AuthContext)
  const navigate = useNavigate();

  const forgetPassword = async (values) => {
    try {
      await forgotPasswordHandler(values);
    } catch (error) {
      toast.error('Email not found');
    }
  };

  return (
    <>
      {/* Desktop Version */}
      <div className="w-full overflow-x-hidden register-area lg:block hidden">
        <div className="flex w-full">
          <div className="w-3/4 xl:w-2/4 left-register-content">
            <div className="w-10/12 p-5 mx-auto content">
              <div className="top-content cursor-pointer" onClick={() => navigate('/')}>
                <img src="/assets/longx.png" alt="" style={{ width: '120px' }} />
              </div>
              <div className="pt-20 pb-10 hello-conote-contents">
                <h2>Olvidaste tu contraseña? 👋</h2>
              </div>

              <div className="register-form">
                <Formik
                  initialValues={{ email: '' }}
                  validationSchema={ForgotPasswordSchema}
                  onSubmit={forgetPassword}
                >
                  {({ isSubmitting }) => (
                    <Form className="w-3/4">
                      <div className="flex flex-col mb-4 form-group">
                        <label htmlFor="email">Email</label>
                        <Field type="text" className="form-control" name="email" id="email" />
                        <ErrorMessage name="email" component="div" className="text-red-500" />
                      </div>
                      <div className="py-5 register-btn">
                        <button type="submit" className="btn" disabled={isSubmitting}>
                          Recuperar contraseña
                        </button>
                      </div>
                      <div className="flex items-center justify-center w-full py-4 text-center already-account">
                        <p className="w-full text-center">
                          Ya tienes una cuenta? <NavLink to='/login'>Entre aquí</NavLink>
                        </p>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div className="w-1/4 xl:w-2/4 h-full overflow-hidden right-register-content"></div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="mobile-version lg:hidden block">
        <div className="w-full overflow-x-hidden register-area">
          <div className="flex w-full h-full">
            <div className="w-full left-register-content h-full">
              <div className="w-full p-5 mx-auto content flex flex-col justify-center h-full">
                <div
                  className="top-content cursor-pointer justify-center items-center flex"
                  onClick={() => navigate('/')}
                >
                  <img src="/assets/longx.png" alt="" style={{ width: '150px' }} />
                </div>
                <div className="pt-10 pb-10 hello-conote-contents justify-center items-center flex">
                  <h2>Olvidaste tu contraseña? 👋</h2>
                </div>

                <div className="register-form">
                  <Formik
                    initialValues={{ email: '' }}
                    validationSchema={ForgotPasswordSchema}
                    onSubmit={forgetPassword}
                  >
                    {({ isSubmitting }) => (
                      <Form className="w-full">
                        <div className="flex flex-col mb-4 form-group">
                          <label htmlFor="email">Email</label>
                          <Field type="text" className="form-control" name="email" id="email" />
                          <ErrorMessage name="email" component="div" className="text-red-500" />
                        </div>
                        <div className="py-5 register-btn">
                          <button type="submit" className="btn" disabled={isSubmitting}>
                            Recuperar contraseña
                          </button>
                        </div>
                        <div className="flex items-center justify-center w-full py-4 text-center already-account">
                          <p className="w-full text-center">
                            Ya tienes una cuenta? <NavLink to='/login'>Entre aquí</NavLink>
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
      </div>
    </>
  );
};

export default ForgotPasswordComponent;
