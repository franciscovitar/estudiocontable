import React from "react";

import Info from "../components/Conocenos/Info";
import Team from "../components/Landing/Equipo";
import Welcome from "../components/Conocenos/Welcome";
import Contacto from "../components/Landing/Contacto";
import NavBar from "../components/Landing/Navbar";
import Footer from "../components/Landing/Footer";

function Conocenos() {
  return (
    <div>
      <NavBar></NavBar>
      <Welcome></Welcome>
      <Info></Info>
      <Team></Team>
      <Contacto></Contacto>
      <Footer></Footer>
    </div>
  );
}

export default Conocenos;
