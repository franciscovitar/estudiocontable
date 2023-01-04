import React from "react";
import Contacto from "../components/Landing/Contacto";
import Footer from "../components/Landing/Footer";
import NavBar from "../components/Landing/Navbar";

function ElContacto() {
  return (
    <div className="elContacto-container ">
      <NavBar className="Navbar"></NavBar>
      <Contacto></Contacto>
      <Footer></Footer>
    </div>
  );
}

export default ElContacto;
