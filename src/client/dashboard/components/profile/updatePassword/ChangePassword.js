import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import styled from "styled-components";
const ChangePassword = ({ toggleUpdatePassword }) => {
  const [showPass, setShowPass] = useState(false);



  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string().required("Enter your current password."),
      newPassword: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Enter your new password."),
      confirmNewPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], "Passwords must match")
        .required("Confirm your new password."),
    }),
    onSubmit: (values) => {
      const { currentPassword, newPassword } = values;
      const data = { currentPassword, newPassword };

      // AuthService.updatePassword(data)
      //   .then(() => {
      //     toast.success("Password updated successfully.");
      //     formik.resetForm();
      //     toggleUpdatePassword(); // Close the modal after successful password change
      //   })
      //   .catch((error) => {
      //     toast.error("Failed to update password. Please try again.");
      //     console.error("Error updating password:", error);
      //   });
    },
  });

  return (
    <>
    <Wrapper>
      {/* Desktop Version */}
      <div className="desktop-version">
        <div className="verification-area" id="ChangePassword">
          <div className="modal">
            <div className="p-5 top-bar">
              <div className="flex">
                <div className="w-3/4"></div>
                <div className="flex justify-end w-1/4">
                  <button type="button" className="btn" onClick={toggleUpdatePassword}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-5 modal-content">
              <div className="flex justify-center w-full py-4">
                <img src="/assets/icons/changePass.svg" alt="changePass" />
              </div>
              <div className="w-3/4 py-4 mx-auto">
                <h2>Create New Password</h2>
                <form onSubmit={formik.handleSubmit} className="py-4">
                  <div className="relative flex flex-col mb-2 form-group">
                    <label htmlFor="EnterOldPassword">Enter old password</label>
                    <input
                      type={showPass ? "text" : "password"}
                      name="currentPassword"
                      id="EnterOldPassword"
                      className="form-control"
                      placeholder=""
                      value={formik.values.currentPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <button
                      type="button"
                      className="absolute h-full show-pass"
                      onClick={toggleUpdatePassword}
                    >
                      <i className={`fa-solid ${showPass ? "fa-eye-slash" : "fa-eye"}`}></i>
                    </button>
                    {formik.touched.currentPassword && formik.errors.currentPassword && (
                      <div className="text-red-600">{formik.errors.currentPassword}</div>
                    )}
                  </div>
                  <div className="flex flex-col mb-2 form-group">
                    <label htmlFor="EnterNewPassword">Enter New Password</label>
                    <input
                      type="password"
                      name="newPassword"
                      id="EnterNewPassword"
                      className="form-control"
                      placeholder=""
                      value={formik.values.newPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.newPassword && formik.errors.newPassword && (
                      <div className="text-red-600">{formik.errors.newPassword}</div>
                    )}
                  </div>
                  <div className="flex flex-col mb-4 form-group">
                    <label htmlFor="ReEnterNewPassword">Re-Enter New Password</label>
                    <input
                      type="password"
                      name="confirmNewPassword"
                      id="ReEnterNewPassword"
                      className="form-control"
                      placeholder=""
                      value={formik.values.confirmNewPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.confirmNewPassword && formik.errors.confirmNewPassword && (
                      <div className="text-red-600">{formik.errors.confirmNewPassword}</div>
                    )}
                  </div>
                  <div className="submit-modal">
                    <button type="submit" className="btn">
                      Change Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="mobile-version">
        <div className="verification-area" id="ChangePassword">
          <div className="modal">
            <div className="p-5 top-bar">
              <div className="flex">
                <div className="w-3/4"></div>
                <div className="flex justify-end w-1/4">
                  <button type="button" className="btn" onClick={toggleUpdatePassword}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-5 modal-content">
              <div className="flex justify-center w-full py-4">
                <img src="/assets/icons/changePass.svg" alt="changePass" />
              </div>
              <div className="w-3/4 py-4 mx-auto">
                <h2>Create New Password</h2>
                <form onSubmit={formik.handleSubmit} className="py-4">
                  <div className="relative flex flex-col mb-2 form-group">
                    <label htmlFor="EnterOldPassword">Enter old password</label>
                    <input
                      type={showPass ? "text" : "password"}
                      name="currentPassword"
                      id="EnterOldPassword"
                      className="form-control"
                      placeholder=""
                      value={formik.values.currentPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <button
                      type="button"
                      className="absolute h-full show-pass"
                      onClick={toggleUpdatePassword}
                    >
                      <i className={`fa-solid ${showPass ? "fa-eye-slash" : "fa-eye"}`}></i>
                    </button>
                    {formik.touched.currentPassword && formik.errors.currentPassword && (
                      <div className="text-red-600">{formik.errors.currentPassword}</div>
                    )}
                  </div>
                  <div className="flex flex-col mb-2 form-group">
                    <label htmlFor="EnterNewPassword">Enter New Password</label>
                    <input
                      type="password"
                      name="newPassword"
                      id="EnterNewPassword"
                      className="form-control"
                      placeholder=""
                      value={formik.values.newPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.newPassword && formik.errors.newPassword && (
                      <div className="text-red-600">{formik.errors.newPassword}</div>
                    )}
                  </div>
                  <div className="flex flex-col mb-4 form-group">
                    <label htmlFor="ReEnterNewPassword">Re-Enter New Password</label>
                    <input
                      type="password"
                      name="confirmNewPassword"
                      id="ReEnterNewPassword"
                      className="form-control"
                      placeholder=""
                      value={formik.values.confirmNewPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.confirmNewPassword && formik.errors.confirmNewPassword && (
                      <div className="text-red-600">{formik.errors.confirmNewPassword}</div>
                    )}
                  </div>
                  <div className="submit-modal">
                    <button type="submit" className="btn">
                      Change Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Wrapper>

    </>
  );
};
const Wrapper =styled.div`
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
`
export default ChangePassword;
