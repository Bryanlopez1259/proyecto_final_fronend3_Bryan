import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Dentistas Profesionales</p>
      <div style={socialLinksStyle}>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook size={24} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
          <FaTiktok size={24} />
        </a>
      </div>
    </footer>
  );
};

// Estilos en línea simples
const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "20px 0",
};

const socialLinksStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  marginTop: "10px",
};



export default Footer;
