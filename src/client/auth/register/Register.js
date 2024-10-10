import React, { useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./Register.scss"
import { AuthContext } from '../../../context/AuthContext';
const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Nombre es requerido'),
  phone: Yup.string().required('Telefono es requerido'),
  email: Yup.string().email('Correo inválido').required('Correo es requerido'),
  password: Yup.string().required('Contrasena es requerida')
});

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const {registerHandler} =useContext(AuthContext)

  const createUser = async (values) => {
    console.log(values)
    try {
      await registerHandler(values);
    } catch (error) {
      toast.error('Error registering user');
    }
  };

  return (
    <div className="w-full overflow-x-hidden register-area hidden lg:block">
      <div className="flex w-full">
        <div className="w-3/4 xl:w-2/4 left-register-content">
          <div className="w-10/12 p-5 mx-auto content">
            <div className="top-content cursor-pointer" onClick={() => navigate('/')}>
              <img src="/assets/longx.png" alt="" style={{ width: '120px' }} />
            </div>
            <div className="pt-20 pb-10 hello-conote-contents">
              <h2>Crea tu cuenta 👋</h2>
            </div>
            {/* register form */}
            <div className="register-form">
              <Formik
                initialValues={{
                  name: '',
                  phone: '',
                  email: '',
                  password: '',
                  role: 'user'
                }}
                validationSchema={RegisterSchema}
                onSubmit={createUser}
              >
                {({ isSubmitting }) => (
                  <Form className="w-3/4">
                    <div className="flex flex-col mb-4 form-group">
                      <label htmlFor="name">Nombre</label>
                      <Field type="text" className="form-control" name="name" id="name" />
                      <ErrorMessage name="name" component="div" className="text-red-500" />
                    </div>
                    <div className="flex flex-col mb-4 form-group">
                      <label htmlFor="telephone">Telefono</label>
                      <Field type="text" className="form-control" name="phone" id="telephone" />
                      <ErrorMessage name="phone" component="div" className="text-red-500" />
                    </div>
                    <div className="flex flex-col mb-4 form-group">
                      <label htmlFor="email">Correo</label>
                      <Field type="email" className="form-control" name="email" id="email" />
                      <ErrorMessage name="email" component="div" className="text-red-500" />
                    </div>
                    <div className="relative flex flex-col mb-4 form-group">
                      <label htmlFor="password">Contrasena</label>
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
                      <ErrorMessage name="password" component="div" className="text-red-500" />
                    </div>
                    <div className="py-5 register-btn">
                      <button type="submit" className="btn" disabled={isSubmitting}>
                        Empezar
                      </button>
                    </div>
                    <div className="flex items-center justify-center w-full py-4 text-center already-account">
                      <p className="w-full text-center">
                        Ya tienes una cuenta? <NavLink  to="/login">Entre aquí</NavLink>
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

      {/* Mobile version */}
      <div className="mobile-version block lg:hidden">
        <div className="w-full overflow-x-hidden register-area">
          <div className="flex w-full h-full">
            <div className="w-full h-full left-register-content flex flex-col justify-center items-center">
              <div className="w-full p-5 mx-auto content">
                <div
                  className="top-content cursor-pointer flex justify-center items-center"
                  onClick={() => navigate('/')}
                >
                  <img src="/assets/longx.png" alt="" style={{ width: '150px' }} />
                </div>
                <div className="pt-10 flex justify-center items-center pb-10 hello-conote-contents">
                  <h2>Crea tu cuenta 👋</h2>
                </div>
                {/* Register form for mobile */}
                <Formik
                  initialValues={{
                    name: '',
                    phone: '',
                    email: '',
                    password: '',
                    role: 'user'
                  }}
                  validationSchema={RegisterSchema}
                  onSubmit={createUser}
                >
                  {({ isSubmitting }) => (
                    <Form className="w-full">
                      <div className="flex flex-col mb-4 form-group">
                        <label htmlFor="name">Nombre</label>
                        <Field type="text" className="form-control" name="name" id="name" />
                        <ErrorMessage name="name" component="div" className="text-red-500" />
                      </div>
                      <div className="flex flex-col mb-4 form-group">
                        <label htmlFor="telephone">Telefono</label>
                        <Field type="text" className="form-control" name="phone" id="telephone" />
                        <ErrorMessage name="phone" component="div" className="text-red-500" />
                      </div>
                      <div className="flex flex-col mb-4 form-group">
                        <label htmlFor="email">Correo</label>
                        <Field type="email" className="form-control" name="email" id="email" />
                        <ErrorMessage name="email" component="div" className="text-red-500" />
                      </div>
                      <div className="relative flex flex-col mb-4 form-group">
                        <label htmlFor="password">Contrasena</label>
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
                        <ErrorMessage name="password" component="div" className="text-red-500" />
                      </div>
                      <div className="py-5 register-btn">
                        <button type="submit" className="btn" disabled={isSubmitting}>
                          Empezar
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
  );
};

export default Register;
