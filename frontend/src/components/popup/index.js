import React, { useState } from "react";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true); // Controls popup visibility
  const [email, setEmail] = useState("");

  const handleClose = () => {
    setShowPopup(false); // Close popup when 'X' button is clicked
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed with:", email);
      setShowPopup(false); // Close popup after subscribing
    } else {
      alert("Please enter a valid email");
    }
  };

  return (
    showPopup && (
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "1000",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            width: "400px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            position: "relative",
            textAlign: "center",
          }}
        >
          <button
            style={{
              position: "absolute",
              top: "10px",
              right: "15px",
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
            }}
            onClick={handleClose}
          >
            &times;
          </button>
          <div>
            <h2 style={{ color: "#3985ff", marginBottom: "10px" }}>
              DAILY PROMOTION
            </h2>
            <p style={{ marginBottom: "20px" }}>SIGN UP FOR NEWSLETTER</p>
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Sign up for your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "80%",
                  padding: "10px",
                  marginBottom: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                required
              />
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#3985ff",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                Subscribe
              </button>
            </form>
            <label
              style={{ display: "block", marginTop: "10px", fontSize: "14px" }}
            >
              <input type="checkbox" /> Dont show this popup again
            </label>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
