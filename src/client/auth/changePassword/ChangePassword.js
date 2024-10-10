import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./ChangePassword.scss"
import { AuthContext } from '../../../context/AuthContext';
// Yup validation schema
const ChangePasswordSchema = Yup.object().shape({
  password: Yup.string().required('Contraseña es requerida'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('Confirmar contraseña es requerida'),
});

const ChangePasswordComponent = () => {
  const {resetPasswordHandler}= useContext(AuthContext)
  const navigate = useNavigate();

  const changePassword = async (values) => {
    try {
      await resetPasswordHandler(values)
    } catch (error) {
      // On error during login
      console.error('Login failed:', error);
      toast.error(`Login failed! ${error.response?.statusText || ''} Please try again.`);
    }
  };

  return (
    <>
      {/* Desktop Version */}
      <div className="w-full overflow-x-hidden register-area hidden lg:block">
        <div className="flex w-full">
          <div className="w-2/4 left-register-content">
            <div className="w-10/12 p-5 mx-auto content">
              <div className="top-content cursor-pointer" onClick={() => navigate('/')}>
                <img src="/assets/longx.png" alt="" style={{ width: '120px' }} />
              </div>
              <div className="pt-20 pb-10 hello-conote-contents">
                <h2>Restablecer la contraseña👋</h2>
              </div>
              <div className="register-form">
                <Formik
                  initialValues={{ password: '', confirmPassword: '' }}
                  validationSchema={ChangePasswordSchema}
                  onSubmit={changePassword}
                >
                  {({ isSubmitting }) => (
                    <Form className="w-3/4">
                      <div className="flex flex-col mb-4 form-group">
                        <label htmlFor="password">Contraseña</label>
                        <Field type="password" className="form-control" name="password" id="password" />
                        <ErrorMessage name="password" component="div" className="text-red-500" />
                      </div>
                      <div className="flex flex-col mb-4 form-group">
                        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                        <Field type="password" className="form-control" name="confirmPassword" id="confirmPassword" />
                        <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
                      </div>
                      <div className="py-5 register-btn">
                        <button type="submit" className="btn" disabled={isSubmitting}>
                          Cambiar la contraseña
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
          <div className="w-2/4 h-full overflow-hidden right-register-content"></div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="mobile-version block lg:hidden">
        <div className="w-full overflow-x-hidden register-area">
          <div className="flex w-full h-full">
            <div className="w-full left-register-content h-full flex-col flex items-center justify-center">
              <div className="w-full p-5 mx-auto content">
                <div className="top-content cursor-pointer" onClick={() => navigate('/')}>
                  <img src="/assets/longx.png" alt="" style={{ width: '150px' }} />
                </div>
                <div className="pt-10 pb-10 hello-conote-contents">
                  <h2>Restablecer la contraseña👋</h2>
                </div>
                <div className="register-form">
                  <Formik
                    initialValues={{ password: '', confirmPassword: '' }}
                    validationSchema={ChangePasswordSchema}
                    onSubmit={changePassword}
                  >
                    {({ isSubmitting }) => (
                      <Form className="w-full">
                        <div className="flex flex-col mb-4 form-group">
                          <label htmlFor="password">Contraseña</label>
                          <Field type="password" className="form-control" name="password" id="password" />
                          <ErrorMessage name="password" component="div" className="text-red-500" />
                        </div>
                        <div className="flex flex-col mb-4 form-group">
                          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                          <Field type="password" className="form-control" name="confirmPassword" id="confirmPassword" />
                          <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
                        </div>
                        <div className="py-5 register-btn">
                          <button type="submit" className="btn" disabled={isSubmitting}>
                            Cambiar la contraseña
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

export default ChangePasswordComponent;
