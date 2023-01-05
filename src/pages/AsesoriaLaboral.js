import React from "react";
import AsesoriaLaboralInfo from "../components/Servicios/AsesoríaLaboral/AsesoriaLaboralInfo";
import AsesoriaLaboralWelcome from "../components/Servicios/AsesoríaLaboral/AsesoriaLaboralWelcome";
import Contactanos from "../components/Landing/Contactanos";
import NavBar from "../components/Landing/Navbar";

function AsesoriaLaboral() {
  return (
    <div>
      <NavBar></NavBar>
      <AsesoriaLaboralWelcome></AsesoriaLaboralWelcome>
      <AsesoriaLaboralInfo></AsesoriaLaboralInfo>
      <Contactanos></Contactanos>
    </div>
  );
}

export default AsesoriaLaboral;
