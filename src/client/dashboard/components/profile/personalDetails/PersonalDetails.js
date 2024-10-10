import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
const PersonalDetails = ({user}) => {
  const [userProfile, setUserProfile] = useState(null);
  const [profileData, setProfileData] = useState({});
  const [currentBankName, setCurrentBankName] = useState("BancoEstado");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const bankOptions = [
    { id: 1, name: "Banco de Chile" },
    { id: 2, name: "Banco Consorcio" },
    { id: 3, name: "BancoEstado" },
  ];

  const formik = useFormik({
    initialValues: {
      home: "",
      city: "",
      country: "",
      regionState: "",
      nationality: "",
      bankName: "",
      bankAccountNumber: "",
      accountName: "",
      rut: "",
      addRut: "",
    },
    validationSchema: Yup.object({
      home: Yup.string().required("Domicilio is required"),
      city: Yup.string().required("City is required"),
      country: Yup.string().required("Country is required"),
      regionState: Yup.string().required("Region or State is required"),
      nationality: Yup.string().required("Nationality is required"),
      bankAccountNumber: Yup.string().required("Bank Account is required"),
      accountName: Yup.string().required("Account Name is required"),
      rut: Yup.string().required("RUT is required"),
      addRut: Yup.string().required("Add RUT is required"),
    }),
    onSubmit: (values) => {
      const dataToSubmit = {
        ...values,
        bankName: currentBankName,
        id: userProfile?._id,
      };

      // AuthService.userInformation(dataToSubmit)
      //   .then((response) => {
      //     toast.success("Information Submitted Successfully!");
      //   })
      //   .catch((err) => {
      //     toast.error(err.message);
      //   });
    },
  });

  useEffect(() => {
    // AuthService.userProfile().then((profile) => {
    //   setUserProfile(profile);
    // });

    // AuthService.userInformationGet().then((res) => {
    //   const storedProfile = localStorage.getItem("userInfo");
    //   if (storedProfile) {
    //     const profileData = JSON.parse(storedProfile);
    //     setProfileData(profileData);
    //     formik.setValues({
    //       home: profileData[0]?.home || "",
    //       city: profileData[0]?.city || "",
    //       country: profileData[0]?.country || "",
    //       regionState: profileData[0]?.regionState || "",
    //       nationality: profileData[0]?.nationality || "",
    //       bankName: profileData[0]?.bankName || "",
    //       bankAccountNumber: profileData[0]?.bankAccountNumber || "",
    //       accountName: profileData[0]?.accountName || "",
    //       rut: profileData[0]?.rut || "",
    //       addRut: profileData[0]?.addRut || "",
    //     });
    //     setCurrentBankName(profileData[0]?.bankName || "BancoEstado");
    //   }
    // });
  }, []);

  const handleBankSelect = (bank) => {
    setCurrentBankName(bank.name);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <Wrapper>
        {/* Desktop Version */}
        <div className="desktop-version">
          <form onSubmit={formik.handleSubmit} className="flex flex-wrap items-start justify-start w-full h-full">
            <div className="w-6/12 h-full p-4">
              {/* Personal Details */}
              <div className="p-6 personal-details">
                <h2 className="pb-4">Personal Details</h2>
                <div className="flex flex-col mb-4 form-group">
                  <label htmlFor="completeInNo">Nombre completo</label>
                  <input
                    type="text"
                    name="completeInNo"
                    id="completeInNo"
                    className="form-control"
                    value={user?.name || ""}
                    disabled
                  />
                </div>
                <div className="flex flex-col mb-4 form-group">
                  <label htmlFor="email">Correo Electronico</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    value={user?.email || ""}
                    disabled
                  />
                </div>
                <div className="flex mb-4">
                  <div className="w-2/4 pr-3 form-group">
                    <label htmlFor="home">Domicilio</label>
                    <input
                      type="text"
                      name="home"
                      id="home"
                      className="form-control"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.home}
                    />
                    {formik.touched.home && formik.errors.home ? <div>{formik.errors.home}</div> : null}
                  </div>
                  <div className="w-2/4 pl-3 form-group">
                    <label htmlFor="city">Ciudad</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="form-control"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.city}
                    />
                    {formik.touched.city && formik.errors.city ? <div>{formik.errors.city}</div> : null}
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-2/4 pr-3 form-group">
                    <label htmlFor="country">Pais</label>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      className="form-control"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.country}
                    />
                    {formik.touched.country && formik.errors.country ? <div>{formik.errors.country}</div> : null}
                  </div>
                  <div className="w-2/4 pl-3 form-group">
                    <label htmlFor="regionState">Región o estado</label>
                    <input
                      type="text"
                      name="regionState"
                      id="regionState"
                      className="form-control"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.regionState}
                    />
                    {formik.touched.regionState && formik.errors.regionState ? <div>{formik.errors.regionState}</div> : null}
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-2/4 pr-3 form-group">
                    <label htmlFor="nationality">Nacionalidad</label>
                    <input
                      type="text"
                      name="nationality"
                      id="nationality"
                      className="form-control"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.nationality}
                    />
                    {formik.touched.nationality && formik.errors.nationality ? <div>{formik.errors.nationality}</div> : null}
                  </div>
                  <div className="w-2/4 pl-3 form-group">
                    <label htmlFor="addRut">ADD Rut</label>
                    <input
                      type="text"
                      name="addRut"
                      id="addRut"
                      className="form-control"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.addRut}
                    />
                    {formik.touched.addRut && formik.errors.addRut ? <div>{formik.errors.addRut}</div> : null}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-6/12 h-full p-4">
              {/* Bank Details */}
              <div className="h-full p-6 bank-details">
                <h2 className="pb-4">Bank Details</h2>
                <div className="flex flex-col form-group w-full">
                  <label htmlFor="selectBank">Seleccionar banco</label>
                  <div class="relative w-full">
                    <button
                      type="button"
                      class="px-4 py-2 text-white bg-gray-800 rounded-md focus:outline-none focus:bg-gray-700 bank-option flex justify-between items-center w-full"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      {currentBankName} <i className="fa fa-angle-down"></i>
                    </button>


                    {isDropdownOpen && (
                      <div className="absolute right-0 z-10 w-56 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                        {bankOptions.map((option) => (
                          <button
                            type="button"
                            key={option.id}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                            onClick={() => handleBankSelect(option)}
                          >
                            {option.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col mb-4 form-group">
                  <label htmlFor="bankAccountNumber">Bank Account</label>
                  <input
                    type="text"
                    name="bankAccountNumber"
                    id="bankAccountNumber"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.bankAccountNumber}
                  />
                  {formik.touched.bankAccountNumber && formik.errors.bankAccountNumber ? (
                    <div>{formik.errors.bankAccountNumber}</div>
                  ) : null}
                </div>
                <div className="flex mb-4">
                  <div className="w-2/4 pr-3 form-group">
                    <label htmlFor="accountName">Account</label>
                    <input
                      type="text"
                      name="accountName"
                      id="accountName"
                      className="form-control"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.accountName}
                    />
                    {formik.touched.accountName && formik.errors.accountName ? (
                      <div>{formik.errors.accountName}</div>
                    ) : null}
                  </div>
                  <div className="w-2/4 pl-3 form-group">
                    <label htmlFor="rut">RUT</label>
                    <input
                      type="text"
                      name="rut"
                      id="rut"
                      className="form-control"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.rut}
                    />
                    {formik.touched.rut && formik.errors.rut ? <div>{formik.errors.rut}</div> : null}
                  </div>
                </div>
              </div>
            </div>

            <div className="py-5 save-button w-full">
              <button type="submit" className="btn">
                Guardar
              </button>
            </div>
          </form>
        </div>

        {/* Mobile Version */}
        <div className="mobile-version">
          <form onSubmit={formik.handleSubmit} className="flex flex-wrap items-start justify-start w-full h-full">
            <div className="w-full md:w-6/12 h-full p-4">
              <div className="p-6 personal-details">
                <h2 className="pb-4">Personal Details</h2>
                {/* Similar Input Fields for Mobile */}
                {/* Copy over all input fields as in the desktop version */}
                <div className="flex flex-wrap mb-4">
                  <div className="w-full sm:w-2/4">
                    <div className="flex flex-col sm:pr-3 form-group">
                      <label htmlFor="home">Domicilio</label>
                      <input
                        type="text"
                        name="home"
                        id="home"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.home}
                      />
                      {formik.touched.home && formik.errors.home ? <div>{formik.errors.home}</div> : null}
                    </div>
                  </div>
                  <div className="w-full sm:w-2/4">
                    <div className="flex flex-col sm:pl-3 form-group">
                      <label htmlFor="city">Ciudad</label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.city}
                      />
                      {formik.touched.city && formik.errors.city ? <div>{formik.errors.city}</div> : null}
                    </div>
                  </div>
                </div>
                {/* Continue with the rest of the input fields */}
              </div>
            </div>

            <div className="w-full md:w-6/12 h-full p-4">
              {/* Bank Details for Mobile */}
              {/* Copy over bank details fields as in the desktop version */}
              <div className="h-full p-6 bank-details">
                <h2 className="pb-4">Bank Details</h2>
                <div className="flex flex-col form-group">
                  <label htmlFor="selectBank">Seleccionar banco</label>
                  <div class="relative w-full">
                    <button
                      type="button"
                      class="px-4 py-2 text-white bg-gray-800 rounded-md focus:outline-none focus:bg-gray-700 bank-option flex justify-between items-center w-full"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      {currentBankName} <i className="fa fa-angle-down"></i>
                    </button>


                    {isDropdownOpen && (
                      <div className="absolute right-0 z-10 w-56 mt-2 bg-white border border-gray-200 rounded-md shadow-lg select-bank-button">
                        {bankOptions.map((option) => (
                          <button
                            type="button"
                            key={option.id}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                            onClick={() => handleBankSelect(option)}
                          >
                            {option.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Other Bank Details Inputs */}
                <div className="flex flex-col mb-4 form-group">
                  <label htmlFor="bankAccountNumber">Bank Account</label>
                  <input
                    type="text"
                    name="bankAccountNumber"
                    id="bankAccountNumber"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.bankAccountNumber}
                  />
                  {formik.touched.bankAccountNumber && formik.errors.bankAccountNumber ? (
                    <div>{formik.errors.bankAccountNumber}</div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="py-5 save-button">
              <button type="submit" className="btn">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </Wrapper>

    </>
  );
};

export default PersonalDetails;

const Wrapper = styled.div`
.desktop-version{
    .top-bar {
    .item-box {
      background-color: rgba(28, 28, 38, 1);
      border-radius: 10px;
      padding: 20px 25px;
      height: 150px;
      display: flex;
      align-items: center;
  
      h4 {
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(255, 255, 255, 1);
      }
  
      .underline {
        font-family: "Poppins", sans-serif;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: -0.02em;
        color: rgba(86, 237, 155, 1);
      }
  
      .profile-photo {
        border-radius: 10px;
  
        img {
          width: 80px;
          height: 80px;
        }
      }
    }
  
    .change-password {
      h4 {
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(255, 255, 255, 1);
      }
  
      a {
        font-family: "Poppins", sans-serif;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: -0.02em;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  
    .change-password-btn {
      .btn {
        border: 0.8px solid rgba(255, 255, 255, 1);
        box-shadow: 4px 4px 32px 0px rgba(103, 90, 255, 0.07);
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: center;
        padding: 10px 25px;
        border-radius: 10px;
        color: rgba(255, 255, 255, 1);
      }
    }
    .two-factor {
      h4 {
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(255, 255, 255, 1);
      }
  
      a {
        font-family: "Poppins", sans-serif;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: -0.02em;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  
    .two-factor-btn {
      .btn {
        border: 0.8px solid rgba(255, 255, 255, 1);
        box-shadow: 4px 4px 32px 0px rgba(103, 90, 255, 0.07);
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: center;
        padding: 10px 25px;
        border-radius: 10px;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  input[disabled], select[disabled], textarea[disabled], button[disabled] {
    opacity: 0.5; /* Adjust opacity to visually indicate disabled state */
    cursor: not-allowed; /* Change cursor to not-allowed when hovering over disabled inputs */
  }
  .personal-details{
    background-color: rgba(28, 28, 38, 1);
    box-shadow: 4px 4px 33px 0px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    min-height: 640px;
    max-height: 100%;
    h2{
      font-family: "Poppins", sans-serif;
      font-family: Poppins;
      font-size: 18px;
      font-weight: 600;
      line-height: 27px;
      letter-spacing: 0.03em;
      text-align: left;
      color: rgba(255, 255, 255, 1);
    }
    .form-group {
      label {
        font-family: "Poppins", sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(255, 255, 255, 0.6);
        padding: 10px 0;
      }
  
      input {
        height: 54px;
        background-color: rgba(20, 20, 28, 1);
        padding: 10px 25px;
        border-radius: 8px;
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 600;
        line-height: 21px;
        letter-spacing: 0em;
        color: rgba(255, 255, 255, 1);
      }
  
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  
  .bank-details{
    background-color: rgba(28, 28, 38, 1);
    box-shadow: 4px 4px 33px 0px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    min-height: 640px;
    max-height: 100%;
    h2{
      font-family: "Poppins", sans-serif;
      font-family: Poppins;
      font-size: 18px;
      font-weight: 600;
      line-height: 27px;
      letter-spacing: 0.03em;
      text-align: left;
      color: rgba(255, 255, 255, 1);
    }
    .form-group {
      label {
        font-family: "Poppins", sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(255, 255, 255, 0.6);
        padding: 10px 0;
      }
  
      input {
        height: 54px;
        background-color: rgba(20, 20, 28, 1);
        padding: 10px 25px;
        border-radius: 8px;
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 600;
        line-height: 21px;
        letter-spacing: 0em;
        color: rgba(255, 255, 255, 1);
      }

        button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        color: #14141C;
      }
      
      .bank-option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        color: #fff;
      }
    }
    .SelectBank-btn{
      height: 54px;
      background-color: rgba(20, 20, 28, 1);
      padding: 10px 35px;
      border-radius: 8px;
      font-family: "Poppins", sans-serif;
      font-size: 14px;
      font-weight: 600;
      line-height: 21px;
      letter-spacing: 0em;
      color: rgba(255, 255, 255, 1);
      i{
        animation: growDown 300ms ease-in-out forwards;
        transform-origin: top center;
      }
    }
    .SelectBank-drop{
      background-color: rgba(20, 20, 28, 1);
      top: 101%;
      animation: growDown 300ms ease-in-out forwards;
      transform-origin: top center;
      display: none;
      padding-top: 10px;
      &.active{
        display: block !important;
      }
     button{
      padding: 10px 25px;
     }
  
    }
  
  }
  
  .save-button{
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      height: 100%;
  
      .btn {
        background: linear-gradient(91.44deg, #c20505 1.23%, #f84f4f 99.73%);
        box-shadow: 4px 4px 32px 0px rgba(103, 90, 255, 0.07);
        width: 206px;
        height: 44px;
        padding: 10px;
        border-radius: 10px;
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 600;
        line-height: 21px;
        letter-spacing: 0em;
        color: rgba(255, 255, 255, 1);
      }
  
  }
  @keyframes  growDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  }
  
  
  // verification area
  .verification-area{
    background: rgba(19, 19, 19, 0.42);
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    .modal{
      min-width: 700px;
      min-height: 633px;
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));
      background: linear-gradient(181.4deg, #15151F -1.25%, #2C2C3A 25.21%, #1B1B26 87.21%);
      border: 0.8px solid rgba(255, 255, 255, 0.2);
      .top-bar{
        border-bottom: 0.6px solid rgba(255, 255, 255, 0.1);
        a{
          color: rgba(86, 237, 155, 1);
          font-family: "Poppins",sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 21px;
          letter-spacing: 0em;
          text-align: left;
  
        }
        button{
          color: rgba(255, 255, 255, 1);
          font-size: 18px;
        }
      }
  
      .label{
        p{
          font-family: "Poppins",sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 18px;
          letter-spacing: 0em;
          text-align: left;
          color: rgba(255, 255, 255, 0.6);
        }
      }
      .modal-content{
        .file-inputs{
          .form-group{
            background-color: rgba(20, 20, 28, 1);
            width: 100%;
            height: 54px;
            padding: 10px 25px;
            border-radius: 10px;
            p{
              font-family: "Poppins",sans-serif;
              font-size: 12px;
              font-weight: 500;
              line-height: 18px;
              letter-spacing: 0em;
              text-align: left;
              color: rgba(255, 255, 255, 1);
            }
          }
        }
      }
      .submit-modal{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 100%;
        .btn {
          background: linear-gradient(91.44deg, #c20505 1.23%, #f84f4f 99.73%);
          box-shadow: 4px 4px 32px 0px rgba(103, 90, 255, 0.07);
          width: 206px;
          height: 44px;
          padding: 10px;
          border-radius: 10px;
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 21px;
          letter-spacing: 0em;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
  #PersonVerification{
    .modal{
      min-height: auto !important;
    }
  }
  #TwoFactorAuthentication{
    .top-bar{
      border: 0;
    }
    .top-title{
      display: flex;
      justify-content: center;
      h2{
        font-family: "Poppins", sans-serif;
        font-size: 24px;
        font-weight: 500;
        line-height: 36px;
        letter-spacing: 0.016em;
        text-align: left;
        color: rgba(86, 237, 155, 1);
      }
    }
    .download-text{
      width: 60%;
      margin: auto;
      p{
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: -0.02em;
        text-align: center;
        color: rgba(255, 255, 255, 1);
        a{
          color: rgba(86, 237, 155, 1);
        }
      }
    }
    .verify-txt{
      p{
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: -0.02em;
        text-align: center;
        color: rgba(255, 255, 255, 1);
      }
    }
    .verify-code{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      .form-group{
        input{
          width: 64px;
          height: 64px;
          border-radius: 6px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.6);
          background-color: transparent;
          font-family: "Poppins",sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: -0.02em;
          text-align: center;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
  
  #ChangePassword{
    .modal{
      min-height: 90% !important;
    }
    h2 {
      font-family: "Poppins", sans-serif;
      color: rgba(255, 255, 255, 1);
      font-size: 16;
      font-weight: 600;
      letter-spacing: 0em;
      text-align: left;
    }
    .form-group {
      label {
        font-family: "Poppins", sans-serif;
        color: rgba(255, 255, 255, 1);
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        padding: 15px 0;
      }
      input {
        background-color: rgba(20, 20, 28, 1);
        border-radius: 8px;
        height: 54px;
        border: none;
        color: rgba(255, 255, 255, 1);
        padding: 0 25px;
        font-family: "Poppins", sans-serif;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
      }
  
    }
  }
  .show-pass {
    bottom: -25px;
    right: 26px;
    color: rgba(255, 255, 255, 0.6);
  }
  .bank-option{
    background-color: #14141C;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 54px;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
  }
  }
  .mobile-version{
    .top-bar {
    .item-box {
      background-color: rgba(28, 28, 38, 1);
      border-radius: 10px;
      padding: 20px 25px;
      height: 150px;
      display: flex;
      align-items: center;
  
      h4 {
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(255, 255, 255, 1);
      }
  
      .underline {
        font-family: "Poppins", sans-serif;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: -0.02em;
        color: rgba(86, 237, 155, 1);
      }
  
      .profile-photo {
        border-radius: 10px;
  
        img {
          width: 80px;
          height: 80px;
        }
      }
    }
  
    .change-password {
      h4 {
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(255, 255, 255, 1);
      }
  
      a {
        font-family: "Poppins", sans-serif;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: -0.02em;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  
    .change-password-btn {
      .btn {
        border: 0.8px solid rgba(255, 255, 255, 1);
        box-shadow: 4px 4px 32px 0px rgba(103, 90, 255, 0.07);
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: center;
        padding: 10px 25px;
        border-radius: 10px;
        color: rgba(255, 255, 255, 1);
      }
    }
    .two-factor {
      h4 {
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(255, 255, 255, 1);
      }
  
      a {
        font-family: "Poppins", sans-serif;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: -0.02em;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  
    .two-factor-btn {
      .btn {
        border: 0.8px solid rgba(255, 255, 255, 1);
        box-shadow: 4px 4px 32px 0px rgba(103, 90, 255, 0.07);
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: center;
        padding: 10px 25px;
        border-radius: 10px;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  input[disabled], select[disabled], textarea[disabled], button[disabled] {
    opacity: 0.5; /* Adjust opacity to visually indicate disabled state */
    cursor: not-allowed; /* Change cursor to not-allowed when hovering over disabled inputs */
  }
  .personal-details{
    background-color: rgba(28, 28, 38, 1);
    box-shadow: 4px 4px 33px 0px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    min-height: 640px;
    max-height: 100%;
    h2{
      font-family: "Poppins", sans-serif;
      font-family: Poppins;
      font-size: 18px;
      font-weight: 600;
      line-height: 27px;
      letter-spacing: 0.03em;
      text-align: left;
      color: rgba(255, 255, 255, 1);
    }
    .form-group {
      label {
        font-family: "Poppins", sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(255, 255, 255, 0.6);
        padding: 10px 0;
      }
  
      input {
        height: 54px;
        background-color: rgba(20, 20, 28, 1);
        padding: 10px 25px;
        border-radius: 8px;
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 600;
        line-height: 21px;
        letter-spacing: 0em;
        color: rgba(255, 255, 255, 1);
      }
  
      button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  
  .bank-details{
    background-color: rgba(28, 28, 38, 1);
    box-shadow: 4px 4px 33px 0px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    height: 100%;
    h2{
      font-family: "Poppins", sans-serif;
      font-family: Poppins;
      font-size: 18px;
      font-weight: 600;
      line-height: 27px;
      letter-spacing: 0.03em;
      text-align: left;
      color: rgba(255, 255, 255, 1);
    }
    .form-group {
      label {
        font-family: "Poppins", sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(255, 255, 255, 0.6);
        padding: 10px 0;
      }
  
      input {
        height: 54px;
        background-color: rgba(20, 20, 28, 1);
        padding: 10px 25px;
        border-radius: 8px;
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 600;
        line-height: 21px;
        letter-spacing: 0em;
        color: rgba(255, 255, 255, 1);
      }
  
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        color: rgba(255, 255, 255, 1);
      }
    }
    .SelectBank-btn{
      height: 54px;
      background-color: rgba(20, 20, 28, 1);
      padding: 10px 35px;
      border-radius: 8px;
      font-family: "Poppins", sans-serif;
      font-size: 14px;
      font-weight: 600;
      line-height: 21px;
      letter-spacing: 0em;
      color: rgba(255, 255, 255, 1);
      i{
        animation: growDown 300ms ease-in-out forwards;
        transform-origin: top center;
      }
    }
    .SelectBank-drop{
      background-color: rgba(20, 20, 28, 1);
      top: 101%;
      animation: growDown 300ms ease-in-out forwards;
      transform-origin: top center;
      display: none;
      padding-top: 10px;
      &.active{
        display: block !important;
      }
     button{
      padding: 10px 25px;
     }
  
    }
  
  }
  
  .save-button{
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      height: 100%;
  
      .btn {
        background: linear-gradient(91.44deg, #c20505 1.23%, #f84f4f 99.73%);
        box-shadow: 4px 4px 32px 0px rgba(103, 90, 255, 0.07);
        width: 206px;
        height: 44px;
        padding: 10px;
        border-radius: 10px;
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 600;
        line-height: 21px;
        letter-spacing: 0em;
        color: rgba(255, 255, 255, 1);
      }
  
  }
  @keyframes  growDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  }
  
  
  // verification area
  .verification-area{
    background: rgba(19, 19, 19, 0.42);
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    .modal{
      min-width: 700px;
      min-height: 633px;
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));
      background: linear-gradient(181.4deg, #15151F -1.25%, #2C2C3A 25.21%, #1B1B26 87.21%);
      border: 0.8px solid rgba(255, 255, 255, 0.2);
      .top-bar{
        border-bottom: 0.6px solid rgba(255, 255, 255, 0.1);
        a{
          color: rgba(86, 237, 155, 1);
          font-family: "Poppins",sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 21px;
          letter-spacing: 0em;
          text-align: left;
  
        }
        button{
          color: rgba(255, 255, 255, 1);
          font-size: 18px;
        }
      }
  
      .label{
        p{
          font-family: "Poppins",sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 18px;
          letter-spacing: 0em;
          text-align: left;
          color: rgba(255, 255, 255, 0.6);
        }
      }
      .modal-content{
        .file-inputs{
          .form-group{
            background-color: rgba(20, 20, 28, 1);
            width: 100%;
            height: 54px;
            padding: 10px 25px;
            border-radius: 10px;
            p{
              font-family: "Poppins",sans-serif;
              font-size: 12px;
              font-weight: 500;
              line-height: 18px;
              letter-spacing: 0em;
              text-align: left;
              color: rgba(255, 255, 255, 1);
            }
          }
        }
      }
      .submit-modal{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 100%;
        .btn {
          background: linear-gradient(91.44deg, #c20505 1.23%, #f84f4f 99.73%);
          box-shadow: 4px 4px 32px 0px rgba(103, 90, 255, 0.07);
          width: 206px;
          height: 44px;
          padding: 10px;
          border-radius: 10px;
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 21px;
          letter-spacing: 0em;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
  #PersonVerification{
    .modal{
      min-height: auto !important;
    }
  }
  #TwoFactorAuthentication{
    .top-bar{
      border: 0;
    }
    .top-title{
      display: flex;
      justify-content: center;
      h2{
        font-family: "Poppins", sans-serif;
        font-size: 24px;
        font-weight: 500;
        line-height: 36px;
        letter-spacing: 0.016em;
        text-align: left;
        color: rgba(86, 237, 155, 1);
      }
    }
    .download-text{
      width: 60%;
      margin: auto;
      p{
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: -0.02em;
        text-align: center;
        color: rgba(255, 255, 255, 1);
        a{
          color: rgba(86, 237, 155, 1);
        }
      }
    }
    .verify-txt{
      p{
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: -0.02em;
        text-align: center;
        color: rgba(255, 255, 255, 1);
      }
    }
    .verify-code{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      .form-group{
        input{
          width: 64px;
          height: 64px;
          border-radius: 6px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.6);
          background-color: transparent;
          font-family: "Poppins",sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: -0.02em;
          text-align: center;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
  
  #ChangePassword{
    .modal{
      min-height: 90% !important;
    }
    h2 {
      font-family: "Poppins", sans-serif;
      color: rgba(255, 255, 255, 1);
      font-size: 16;
      font-weight: 600;
      letter-spacing: 0em;
      text-align: left;
    }
    .form-group {
      label {
        font-family: "Poppins", sans-serif;
        color: rgba(255, 255, 255, 1);
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        padding: 15px 0;
      }
      input {
        background-color: rgba(20, 20, 28, 1);
        border-radius: 8px;
        height: 54px;
        border: none;
        color: rgba(255, 255, 255, 1);
        padding: 0 25px;
        font-family: "Poppins", sans-serif;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
      }
  
    }
  }
  .show-pass {
    bottom: -25px;
    right: 26px;
    color: rgba(255, 255, 255, 0.6);
  }
  .bank-option{
    background-color: #14141C;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 54px;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
  }
  }
  .desktop-version{
    display: block;
  }
  .mobile-version{
    display: none;
  }
  @media only screen and (max-width: 1100px){
    .desktop-version{
      display: none;
    }
    .mobile-version{
      display: block;
    }
    .modal{
      width: 90% !important;
      min-width: 90%  !important;
      height: 60vh !important;
      overflow-y:  auto !important;
    }
  
  }
  .select-bank-button{
    button{
      color: #14141C !important;
    }
  }
`
