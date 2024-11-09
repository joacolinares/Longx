import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import axios from "axios";


const PersonalDetails = () => {
  // State to store selected file names
  const [idProofFileName, setIdProofFileName] = useState("");
  const [addressProofFileName, setAddressProofFileName] = useState("");

  // Formik setup
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      city: "",
      state: "",
      zipCode: "",
      nationality: "",
      idProof: null,
      addressProof: null,
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Nombre completo es requerido"),
      email: Yup.string().email("Correo invalido").required("Correo es requerido"),
      city: Yup.string().required("Ciudad es requerido"),
      state: Yup.string().required("Estado es requerido"),
      zipCode: Yup.string().required("Código Postal es requerido"),
      nationality: Yup.string().required("Nacionalidad es requerido"),
      idProof: Yup.mixed().required("Sube tu prueba de identidad"),
      addressProof: Yup.mixed().required("Sube tu prueba de dirección"),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      for (const key in values) {
        formData.append(key, values[key]);
      }
      
      try {
        const response = await axios.post("https://longx-backend.vercel.app/api/kyc", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        
        alert(response.data.message);
      } catch (error) {
        console.error(error);
        alert("Error al enviar los detalles de KYC");
      }
    },
  });

  // Handling file upload and setting the file name
  const handleFileChange = (e, field, setFileName) => {
    const file = e.currentTarget.files[0];
    formik.setFieldValue(field, file);
    setFileName(file ? file.name : ""); // Set the file name in the input
  };

  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit} className="flex flex-wrap items-start justify-start w-full h-full">
        <div className="w-full md:w-6/12 h-full p-4 mx-auto">
          <div className="p-6 personal-details">
            <h2 className="pb-4 text-center w-full flex items-center justify-center">KYC Verification</h2>
            
            <div className="flex flex-col mb-4 form-group">
              <label htmlFor="fullName">Nombre completo</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="form-control w-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
              />
              {formik.touched.fullName && formik.errors.fullName && <div>{formik.errors.fullName}</div>}
            </div>

            <div className="flex flex-col mb-4 form-group">
              <label htmlFor="email">Correo Electronico</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control w-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
            </div>

            <div className="flex mb-4 space-x-6">
              <div className="w-2/4 form-group">
                <label htmlFor="city">Ciudad</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="form-control w-full"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                />
                {formik.touched.city && formik.errors.city && <div>{formik.errors.city}</div>}
              </div>
              <div className="w-2/4 form-group">
                <label htmlFor="state">Estado</label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  className="form-control w-full"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.state}
                />
                {formik.touched.state && formik.errors.state && <div>{formik.errors.state}</div>}
              </div>
            </div>

            <div className="flex mb-4 space-x-6">
              <div className="w-2/4 form-group">
                <label htmlFor="zipCode">Código Postal</label>
                <input
                  type="text"
                  name="zipCode"
                  id="zipCode"
                  className="form-control w-full"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.zipCode}
                />
                {formik.touched.zipCode && formik.errors.zipCode && <div>{formik.errors.zipCode}</div>}
              </div>
              <div className="w-2/4 form-group">
                <label htmlFor="nationality">Nacionalidad</label>
                <input
                  type="text"
                  name="nationality"
                  id="nationality"
                  className="form-control w-full"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nationality}
                />
                {formik.touched.nationality && formik.errors.nationality && <div>{formik.errors.nationality}</div>}
              </div>
            </div>

            <div className="flex w-full mb-4">
              <div className="form-group w-full">
                <label htmlFor="idProof">Sube tu prueba de identidad</label>
                <input
                  type="file"
                  name="idProof"
                  id="idProof"
                  className="form-control w-full"
                  onChange={(e) => handleFileChange(e, "idProof", setIdProofFileName)}
                />
                {formik.touched.idProof && formik.errors.idProof && <div>{formik.errors.idProof}</div>}
              </div>
            </div>

            <div className="w-full mb-4">
              <div className="form-group w-full">
                <label htmlFor="addressProof">Sube tu prueba de dirección</label>
                <input
                  type="file"
                  name="addressProof"
                  id="addressProof"
                  className="form-control w-full"
                  onChange={(e) => handleFileChange(e, "addressProof", setAddressProofFileName)}
                />

                {formik.touched.addressProof && formik.errors.addressProof && <div>{formik.errors.addressProof}</div>}
              </div>
            </div>

            <div className="py-5 save-button w-full">
              <button type="submit" className="btn">Guardar</button>
            </div>
          </div>
        </div>
      </form>
    </Wrapper>
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
