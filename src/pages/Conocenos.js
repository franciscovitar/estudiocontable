import React from "react";

import Info from "../components/Conocenos/Info";
import Team from "../components/Landing/Equipo";
import Welcome from "../components/Conocenos/Welcome";
import Contactanos from "../components/Landing/Contactanos";
import NavBar from "../components/Landing/Navbar";

function Conocenos() {
  return (
    <div>
      <NavBar></NavBar>
      <Welcome></Welcome>
      <Info></Info>
      <Team></Team>
      <Contactanos></Contactanos>
    </div>
  );
}

export default Conocenos;
