import React from "react";

import AsesoriaServicios from "../components/Servicios/AsesoríaTributaría/AsesoriaServicios";
import AsesoriaWelcome from "../components/Servicios/AsesoríaTributaría/AsesoriaWelcome";
import Contacto from "../components/Landing/Contacto";
import NavBar from "../components/Landing/Navbar";
import Footer from "../components/Landing/Footer";

function AsesoriaTributaria() {
  return (
    <div>
      <NavBar></NavBar>
      <AsesoriaWelcome />
      <AsesoriaServicios />
      <Contacto />
      <Footer></Footer>
    </div>
  );
}

export default AsesoriaTributaria;
