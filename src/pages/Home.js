import React from "react";
import Contactanos from "../components/Landing/Contactanos";
import Empresa from "../components/Landing/Empresa";
import Equipo from "../components/Landing/Equipo";
import Sede from "../components/Landing/Sede";
import Servicios from "../components/Landing/Servicios";
import Welcome from "../components/Landing/Welcome";
import NavBar from "../components/Landing/Navbar";

function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Welcome></Welcome>
      <Sede></Sede>
      <Servicios></Servicios>
      <Empresa></Empresa>
      <Equipo></Equipo>
      <Contactanos></Contactanos>
    </div>
  );
}

export default Home;
