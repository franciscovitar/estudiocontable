import React from "react";

import AsesoriaFinancieraWelcome from "../components/Servicios/AsesoríaFinanciera/AsesoriaFinancieraWelcome";
import AsesoriaFinancieraInfo from "../components/Servicios/AsesoríaFinanciera/AsesoriaFinancieraInfo";
import Contacto from "../components/Landing/Contacto";
import NavBar from "../components/Landing/Navbar";
import Footer from "../components/Landing/Footer";

function AsesoriaFinanciera() {
  return (
    <div>
      <NavBar></NavBar>
      <AsesoriaFinancieraWelcome></AsesoriaFinancieraWelcome>
      <AsesoriaFinancieraInfo></AsesoriaFinancieraInfo>
      <Contacto></Contacto>
      <Footer></Footer>
    </div>
  );
}

export default AsesoriaFinanciera;
