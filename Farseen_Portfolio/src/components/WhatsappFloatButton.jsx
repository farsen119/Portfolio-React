import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappFloatButton = () => {
  const phone = "918592081140";
  const message = encodeURIComponent("Hi, I visited your portfolio and would like to connect!");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with me on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-transparent p-2 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
      title="WhatsApp Me"
    >
      <FaWhatsapp size={58} color="#25D366" />
    </a>
  );
};

export default WhatsappFloatButton;