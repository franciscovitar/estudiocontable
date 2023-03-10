import React from "react";
import Peruano1 from "../../image/pexels-cottonbro-studio-5901630.jpg";
import Peruano2 from "../../image/pexels-redwolf-13908741.jpg";

import { motion } from "framer-motion";

function Equipo() {
  return (
    <motion.div
      className="equipo-container container-fluid"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div>
        <motion.h1
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0 },
          }}
        >
          Nuestro equipo de contadores
        </motion.h1>
      </div>

      <div className="row">
        <div className="col-sm-12 col-lg-5">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src={Peruano1}
            alt="d"
          />
          <motion.h5
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0 },
            }}
          >
            CPC Juan Carlos Sanchez
          </motion.h5>
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
          >
            Contador titulado por la Universidad Nacional y Magister en
            Administración de Empresas por la Universidad. Cuenta con más de 10
            años de experiencia trabajando en empresas de servicios,
            construcción, comerciales, mineras y otras.
          </motion.p>
        </div>
        <div className="col-sm-12 col-lg-5">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src={Peruano2}
            alt="d"
          />
          <motion.h5
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0 },
            }}
          >
            CPC Maria Juliana García
          </motion.h5>
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
          >
            Contadora titulada por la Universidad Nacional, con especialización
            en Normas Internacionales de Contabilidad por la Pontificia
            Universidad, y especialización en Tributación por el Colegio de
            Contadores. Cuenta con más de 10 años de experiencia trabajando en
            empresas de servicios e industriales.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default Equipo;
