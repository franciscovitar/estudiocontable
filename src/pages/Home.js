import React from "react";
import Contacto from "../components/Landing/Contacto";
import Empresa from "../components/Landing/Empresa";
import Equipo from "../components/Landing/Equipo";
import Sede from "../components/Landing/Sede";
import Servicios from "../components/Landing/Servicios";
import Welcome from "../components/Landing/Welcome";
import NavBar from "../components/Landing/Navbar";
import Footer from "../components/Landing/Footer";

function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Welcome></Welcome>
      <Sede></Sede>
      <Servicios></Servicios>
      <Empresa></Empresa>
      <Equipo></Equipo>
      <Contacto></Contacto>
      <Footer></Footer>
    </div>
  );
}

export default Home;
