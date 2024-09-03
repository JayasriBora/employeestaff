import Logo from "../Assets/loginLogo.svg";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import "./Login.css";
import { otpStyle } from "../Utils";
const EmployeeStaffLogin = () => {
  const [isDivVisible, setIsDivVisible] = useState(false);
  const handleSendOTP = () => {
    setIsDivVisible(true);
  };
  return (
    <div className=" ">
      <div className="d-flex">
        <div className="p-0 m-0 logo h-100" style={{ width: "32.5%" }}>
          <img src={Logo} alt="" className="w-100 h-100 " />

          <p className="text-colour ">All copyrights reserved 2024</p>
        </div>
        <div className=" centered-content">
          <div>
            <div>
              <div className="login-card">
                <form>
                  {!isDivVisible && (
                    <div>
                      <div>
                        <p className="login-head m-0 p-0 ">
                          Welcome back! Glad
                        </p>
                        <p className="login-head m-0 p-0 ">
                          to see you, Again!
                        </p>
                      </div>
                      <div>
                        <input
                          className="form-control login-input "
                          placeholder="Enter your Mobile No."
                          name="userName"
                          maxLength={10}
                        ></input>
                        <button
                          className="login-btn mt-3"
                          onClick={handleSendOTP}
                        >
                          Send OTP
                        </button>
                      </div>
                    </div>
                  )}
                  {isDivVisible && (
                    <div>
                      <span className="otp-head">
                        OTP Verification<br></br>
                      </span>
                      <p className="otp-subhead mt-1">
                        Enter the Verification code we just sent on your email
                        address
                      </p>

                      <OtpInput
                        numInputs={6}
                        inputType="tel"
                        renderSeparator={
                          <span style={{ marginRight: "10px" }}></span>
                        }
                        renderInput={(props) => (
                          <input {...props} style={otpStyle} />
                        )}
                      />

                      <button className="verify-btn mt-3">Verify</button>
                      <p className="login-downtext mt-3">
                        Didn't received code?
                        <span className={"login-resend"}>&nbsp;Resend</span>
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeStaffLogin;
