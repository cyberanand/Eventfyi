"use client"; // Client-side component for Next.js

import React, { useState } from "react";
import Head from "next/head";

const ForgotPassword = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [otpVisible, setOtpVisible] = useState(false);
  const [otp, setOtp] = useState(Array(5).fill("")); // State for OTP as an array

  const validateEmailOrPhone = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmailOrPhone(emailOrPhone)) {
      setOtpVisible(true);
    } else {
      alert("Please enter a valid email or phone number.");
    }
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Ensure only one character
    setOtp(newOtp);

    // Move focus to the next input box if filled
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    console.log("OTP Entered:", otp.join(""));
    // Here you would typically verify the OTP
  };

  return (
    <>
      <Head>
        <title>Forgot Password - Evefy</title>
        <meta name="description" content="Forgot Password page for Evefy." />
      </Head>

      <div style={styles.container}>
        {/* Slideshow Section */}
        <div style={styles.slideshow}>
          <div style={styles.overlay}>
            <div style={styles.card}>
              <h2 style={styles.title}>Forgot Password</h2>
              {!otpVisible ? (
                <form style={styles.form} onSubmit={handleSubmit}>
                  <div style={styles.inputGroup}>
                    <input
                      type="text"
                      placeholder="Enter your email or phone number"
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                      style={styles.input}
                      required
                    />
                  </div>
                  <button type="submit" style={styles.requestOtpButton}>
                    Request OTP
                  </button>
                </form>
              ) : (
                <form style={styles.form} onSubmit={handleOtpSubmit}>
                  <div style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-input-${index}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        style={styles.otpInput}
                      />
                    ))}
                  </div>
                  <button type="submit" style={styles.submitButton}>
                    Submit OTP
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Diwali String Lights */}
        <div style={styles.stringLights}></div>

        {/* Slideshow Animation */}
        <style>{slideshowStyle}</style>
      </div>
    </>
  );
};

// Styles for the page
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    position: "relative",
    overflow: "hidden",
  },
  slideshow: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    animation: "slideshow 30s infinite", // Change duration for slideshow effect
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Light overlay for better readability
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "400px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    padding: "20px",
    backgroundImage: "url('/evefyimageslogo.jpg')", // Corrected image URL syntax
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 1,
  },
  title: {
    fontSize: "1.75em",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    fontSize: "1em",
    border: "1px solid #ddd",
    borderRadius: "5px",
    outline: "none",
    color: "#333",
  },
  requestOtpButton: {
    backgroundColor: "#00A651",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    fontSize: "1em",
    cursor: "pointer",
    marginTop: "10px",
  },
  otpContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  otpInput: {
    width: "50px",
    height: "50px",
    fontSize: "1.5em",
    textAlign: "center",
    border: "1px solid #ddd",
    borderRadius: "5px",
    outline: "none",
  },
  submitButton: {
    backgroundColor: "#00A651",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    fontSize: "1em",
    cursor: "pointer",
    marginTop: "20px",
  },
  stringLights: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    height: "100px",
    backgroundImage: "url('/path-to-your-string-lights-image.png')", // Replace with your string lights image path
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: 2,
    marginTop: "20px", // Adjust position of the string lights
  },
};

// Slideshow Animation
const slideshowStyle = `
  @keyframes slideshow {
    0% { background-image: url('/path-to-your-image1.jpg'); }
    33% { background-image: url('/path-to-your-image2.jpg'); }
    67% { background-image: url('/path-to-your-image3.jpg'); }
    100% { background-image: url('/path-to-your-image1.jpg'); }
  }
`;

export default ForgotPassword;
