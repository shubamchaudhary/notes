import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="hover:text-black">
      <p>made with react and tailwind css</p>
    </footer>
  );
}

export default Footer;
