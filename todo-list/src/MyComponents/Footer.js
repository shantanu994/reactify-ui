import React from "react";

const Footer = () => {
  let footerStyle={
      position: "absolute",
      top: "95vh",
      width: "100%",
      borderRadius: "10px",
    }
  return (
    <footer className="bg-dark text-light text-center" style={footerStyle}>
      <p className="text-center">
        Copyright © 2023 My Todos App
        </p>
    </footer>
  );
};

export default Footer;
