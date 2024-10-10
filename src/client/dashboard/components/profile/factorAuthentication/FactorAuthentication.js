import React, { useState } from "react";
import styled from "styled-components";
const FactorAuthentication = ({toggleTwoFactor}) => {
  // const { emitTwoFactorChanged } = useSharedService();
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const handleCodeChange = (index, value) => {
    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);
  };

  

  return (
    <>
    <Wrapper>
      {/* Desktop Version */}
      <div className="desktop-version">
        <div className="verification-area" id="TwoFactorAuthentication">
          <div className="modal">
            <div className="p-5 top-bar">
              <div className="flex">
                <div className="w-3/4"></div>
                <div className="flex justify-end w-1/4">
                  <button type="button" className="btn" onClick={toggleTwoFactor}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-5 modal-content">
              <div className="py-4 top-title">
                <h2>2-Factor Authentication</h2>
              </div>
              <div className="flex justify-center w-full">
                <img src="/assets/qrCode.svg" alt="qrCode" />
              </div>
              <div className="py-4 download-text">
                <p>
                  If you want to turn on 2FA, use{" "}
                  <a href="">Google authentication app</a> to scan code, then
                  enter the six-digit code provided by the app below.
                </p>
              </div>
            </div>
            <div className="pt-3 pb-6 submit-modal">
              <button type="button" className="btn">
                Download App
              </button>
            </div>

            <div className="pt-2 pb-4 text-center verify-txt">
              <p>Enter 6 digit code</p>
            </div>
            <div className="verify-code">
              {code.map((digit, index) => (
                <div key={index} className="mr-3 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="5"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="mobile-version">
        <div className="verification-area" id="TwoFactorAuthentication">
          <div className="modal">
            <div className="p-5 top-bar">
              <div className="flex">
                <div className="w-3/4"></div>
                <div className="flex justify-end w-1/4">
                  <button type="button" className="btn" onClick={toggleTwoFactor}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-5 modal-content">
              <div className="py-4 top-title">
                <h2>2-Factor Authentication</h2>
              </div>
              <div className="flex justify-center w-full">
                <img src="/assets/qrCode.svg" alt="qrCode" />
              </div>
              <div className="py-4 download-text">
                <p>
                  If you want to turn on 2FA, use{" "}
                  <a href="">Google authentication app</a> to scan code, then
                  enter the six-digit code provided by the app below.
                </p>
              </div>
            </div>
            <div className="pt-3 pb-6 submit-modal">
              <button type="button" className="btn">
                Download App
              </button>
            </div>

            <div className="pt-2 pb-4 text-center verify-txt">
              <p>Enter 6 digit code</p>
            </div>
            <div className="verify-code">
              {code.map((digit, index) => (
                <div key={index} className="mr-3 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="5"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                  />
                </div>
              ))}
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
          padding: 10px 10px;
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
    padding-bottom: 25px;
    .form-group{
      input{
        width: 30px;
        height: 30px;
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
export default FactorAuthentication;
