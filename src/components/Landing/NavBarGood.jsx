import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NavBarGood() {
  const [clicked, setClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [servicios, setServicios] = useState(false);
  const [servicio, setServicio] = useState(1);

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
          <motion.a whileHover={{ scale: 1.1 }} href="/estudiocontable">
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
            <a
              className={navbar ? "text-secondary" : "text-white"}
              href="/estudiocontable"
            >
              Inicio
            </a>
            <a
              className={navbar ? "text-secondary" : "text-white"}
              href="/conocenos"
            >
              Nosotros
            </a>
            <div
              onMouseEnter={() => setServicios(true)}
              onMouseLeave={() => setServicios(false)}
              className="servicios"
            >
              <div className="pedro">
                <a className={navbar ? "text-secondary" : "text-white"}>
                  Servicios
                </a>
                <i
                  className={`bi bi-caret-down-fill d-block ${
                    navbar ? "text-secondary" : "text-white"
                  }`}
                ></i>
              </div>

              <div
                className={`selects ${servicios ? "d-flex" : "d-none"} && ${
                  navbar ? " light-mode" : "  "
                }`}
              >
                <Link to="/Outsourcing">
                  <p
                    onClick={() => {
                      setServicio(1);
                      setServicios(!servicios);
                    }}
                    className={`${servicio === 1 ? "selected" : ""}`}
                  >
                    Outsourcing Contable
                  </p>
                </Link>

                <Link to="/AsesoriaTributaria">
                  <p
                    onClick={() => {
                      setServicio(2);
                      setServicios(!servicios);
                    }}
                    className={servicio === 2 ? "selected" : ""}
                  >
                    Asesoría Tributaría
                  </p>
                </Link>

                <Link to="/AsesoriaLaboral">
                  <p
                    onClick={() => {
                      setServicio(3);
                      setServicios(!servicios);
                    }}
                    className={servicio === 3 ? "selected" : ""}
                  >
                    Asesoría Laboral
                  </p>
                </Link>

                <Link to="/AsesoriaContable">
                  <p
                    onClick={() => {
                      setServicio(4);
                      setServicios(!servicios);
                    }}
                    className={servicio === 4 ? "selected" : ""}
                  >
                    Asesoría Contable
                  </p>
                </Link>

                <Link to="/AsesoriaFinanciera">
                  <p
                    onClick={() => {
                      setServicio(5);
                      setServicios(!servicios);
                    }}
                    className={servicio === 5 ? "selected" : ""}
                  >
                    Asesoría Financiera
                  </p>
                </Link>

                <Link to="AsesoriaAdministrativa">
                  <p
                    onClick={() => {
                      setServicio(6);
                      setServicios(!servicios);
                    }}
                    className={servicio === 6 ? "selected" : ""}
                  >
                    Asesoría Administrativa
                  </p>
                </Link>
              </div>
            </div>
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
            <a href="/estudiocontable">Inicio</a>
            <a href="/conocenos">Nosotros</a>
            <div className="servicios">
              <div
                onClick={() => {
                  setServicios(!servicios);
                }}
                className="pedro"
              >
                <a>Servicios</a>
                <i className="bi bi-caret-down-fill d-block text-white "></i>
              </div>

              <div
                className={`selects ${servicios ? "d-flex" : "d-none"}
                `}
              >
                <a
                  href="/Outsourcing"
                  onClick={() => {
                    setServicios(!servicios);
                  }}
                >
                  Outsourcing Contable
                </a>

                <a
                  href="/AsesoriaTributaria"
                  onClick={() => {
                    setServicios(!servicios);
                  }}
                >
                  Asesoría Tributaría
                </a>

                <a
                  href="/AsesoriaLaboral"
                  onClick={() => {
                    setServicios(!servicios);
                  }}
                >
                  Asesoría Laboral
                </a>
                <a
                  href="/AsesoriaContable"
                  onClick={() => {
                    setServicios(!servicios);
                  }}
                >
                  Asesoría Contable
                </a>

                <a
                  href="/AsesoriaFinanciera"
                  onClick={() => {
                    setServicios(!servicios);
                  }}
                >
                  Asesoría Financiera
                </a>

                <a
                  href="AsesoriaAdministrativa"
                  onClick={() => {
                    setServicios(!servicios);
                  }}
                >
                  Asesoría Administrativa
                </a>
              </div>
            </div>
            <a href="/Empresa">Empresa</a>
            <a href="/Contacto">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarGood;
