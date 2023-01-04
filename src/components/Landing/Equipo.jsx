import React from "react";
import Peruano1 from "../../image/pexels-cottonbro-studio-5901630.jpg";
import Peruano2 from "../../image/pexels-redwolf-13908741.jpg";

import { motion } from "framer-motion";

function Equipo() {
  return (
    <motion.div
      className="equipo-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div>
        <h1>Nuestro equipo de contadores</h1>
      </div>

      <div className="row container-fluid">
        <div className="col-sm-12 col-lg-5">
          <img src={Peruano1} alt="d" />
          <h5>CPC Juan Carlos Sanchez</h5>
          <p>
            Contador titulado por la Universidad Nacional del Callao y Magister
            en Administración de Empresas por la Universidad del Pacifico.
            Cuenta con más de 10 años de experiencia trabajando en empresas de
            servicios, construcción, comerciales, mineras y otras.
          </p>
        </div>
        <div className="col-sm-12 col-lg-5">
          <img src={Peruano2} alt="d" />
          <h5>CPC Maria Juliana García</h5>
          <p>
            Contadora titulada por la Universidad Nacional del Callao, con
            especialización en Normas Internacionales de Contabilidad por la
            Pontificia Universidad Católica del Perú, y especialización en
            Tributación por el Colegio de Contadores del Callao. Cuenta con más
            de 10 años de experiencia trabajando en empresas de servicios e
            industriales.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Equipo;
