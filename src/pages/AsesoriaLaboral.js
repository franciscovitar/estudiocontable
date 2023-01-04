import React from "react";
import AsesoriaLaboralInfo from "../components/Servicios/AsesoríaLaboral/AsesoriaLaboralInfo";
import AsesoriaLaboralWelcome from "../components/Servicios/AsesoríaLaboral/AsesoriaLaboralWelcome";
import Contacto from "../components/Landing/Contacto";
import NavBar from "../components/Landing/Navbar";
import Footer from "../components/Landing/Footer";

function AsesoriaLaboral() {
  return (
    <div>
      <NavBar></NavBar>
      <AsesoriaLaboralWelcome></AsesoriaLaboralWelcome>
      <AsesoriaLaboralInfo></AsesoriaLaboralInfo>
      <Contacto></Contacto>
      <Footer></Footer>
    </div>
  );
}

export default AsesoriaLaboral;
