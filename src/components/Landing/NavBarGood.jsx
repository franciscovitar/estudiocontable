import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function NavBarGood() {
  const [clicked, setClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const bgDiv = useRef("");
  const linksActive = useRef("");

  const handleClick = () => {
    bgDiv.current.classList.toggle("active");
    linksActive.current.classList.toggle("d-flex");
    setClicked(!clicked);
  };

  const changeBg = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <nav className="navbar-container">
      <div className={navbar ? "navbar-bg" : "navbar-nobg"}>
        <div className="left">
          <motion.a whileHover={{ scale: 1.1 }} href="/">
            <h2 className={`logo ${navbar ? "text-dark" : "text-white"}`}>
              Estudio
            </h2>
            <h2 className={`logo ${navbar ? "text-dark" : "text-white"}`}>
              Contable
            </h2>
          </motion.a>
        </div>
        <div className="right">
          <div className="links">
            <a className={navbar ? "text-secondary" : "text-white"} href="/">
              Inicio
            </a>
            <a
              className={navbar ? "text-secondary" : "text-white"}
              href="/conocenos"
            >
              Nosotros
            </a>
            <a
              className={navbar ? "text-secondary" : "text-white"}
              href="/#servicios"
            >
              Servicios
            </a>
            <a
              className={navbar ? "text-secondary" : "text-white"}
              href="/Empresa"
            >
              Constitución de empresa
            </a>
            <a
              className={navbar ? "text-secondary" : "text-white"}
              href="/Contacto"
            >
              Contacto
            </a>
          </div>
          <i
            type="button"
            onClick={handleClick}
            className={`bi ${navbar ? "text-dark" : "text-white "} ${
              clicked ? "bi-x text-white" : "bi-list"
            }`}
          ></i>
        </div>
        <div ref={bgDiv} className="bg-div">
          <div ref={linksActive} className="links-active">
            <a href="/">Inicio</a>
            <a href="/nosotros">Nosotros</a>
            <a href="/tratamientos">Tratamientos</a>
            <a href="/spa-relax">Spa de Relax</a>
            <a href="/tecnologia">Tecnología</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarGood;
