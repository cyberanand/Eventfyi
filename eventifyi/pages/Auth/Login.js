import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import ForgotPassword from "./ForgotPassword";

const Login = () => {
  const [selected, setSelected] = useState("login");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [otpVisible, setOtpVisible] = useState(false);
  const [otp, setOtp] = useState(Array(5).fill(""));

  const backgroundImages = [
    "/images/background1.jpg",
    "/images/background2.jpg",
    "/images/background3.jpg",
    "/images/background4.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSelection = (option) => {
    setSelected(option);
    setOtpVisible(false); // Reset OTP visibility when switching tabs
  };

  const validateEmailOrPhone = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 4) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    if (validateEmailOrPhone(emailOrPhone)) {
      setOtpVisible(true);
    } else {
      alert("Please enter a valid email or phone number.");
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    console.log("OTP Entered:", otp.join(""));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  const LoginContent = () => (
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Login Here
      </h2>
      <form onSubmit={handleLoginSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00A651]"
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00A651]"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#00A651] text-white py-3 rounded-lg font-semibold hover:bg-[#008f45] transition-colors duration-300"
        >
          Login
        </button>
      </form>
    </>
  );

  return (
    <>
      <Head>
        <title>Sign In - Evefy</title>
        <meta name="description" content="Sign in to your Evefy account." />
      </Head>

      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        }}
      >
        <div className="flex w-[700px] h-[350px] shadow-lg rounded-lg overflow-hidden">
          {/* Left Section */}
          <div className="w-[30%] bg-white flex flex-col items-center justify-center">
            <nav className="w-full px-4 py-2">
              <div
                className={`flex items-center p-3 mb-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  selected === "login"
                    ? "bg-[#00A651] text-white"
                    : "text-[#00A651] hover:bg-gray-100"
                }`}
                onClick={() => handleSelection("login")}
              >
                <div
                  className={`w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3`}
                >
                  <i className="fas fa-user text-[#00A651] text-xl"></i>
                </div>
                <span className="font-bold">Login</span>
              </div>

              <div
                className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                  selected === "forgotPassword"
                    ? "bg-[#00A651] text-white"
                    : "text-[#00A651] hover:bg-gray-100"
                }`}
                onClick={() => handleSelection("forgotPassword")}
              >
                <div
                  className={`w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3`}
                >
                  <i className="fas fa-lock text-[#00A651] text-xl"></i>
                </div>
                <span className="font-bold">Forgot Password</span>
              </div>
            </nav>
          </div>

          {/* Right Section */}
          <div className="w-[70%] bg-gray-50 p-10 flex flex-col justify-center">
            {selected === "login" && <LoginContent />}
            {selected === "forgotPassword" && <ForgotPassword />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
