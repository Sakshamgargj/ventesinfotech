import React from "react";
import Image from "next/image";
import bg from "@assets/img/social/w.png";

function GoWhatsapp({ className }) {
  const openWhatsApp = () => {
    const phoneNumber = "919876543210"; // Replace with actual phone number in international format
    const message = "Hello!"; // Customize the message if needed

    // Check if the user is on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Set the appropriate WhatsApp URL based on the device type
    const whatsappUrl = isMobile
      ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_self");
  };

  return (
    <div className={`back-to-top-wrapper ${className || ""}`}>
      <button
        id="whatsapp_button"
        type="button"
        onClick={openWhatsApp}
        style={{ position: "relative", width: "50px", height: "50px" }}
      >
        <Image src={bg} alt="WhatsApp Icon" layout="fill" objectFit="cover" />
      </button>
    </div>
  );
}

export default GoWhatsapp;
