import React from "react";
import { Link } from "react-router-dom";
import Contador from "../../image/pexels-mikhail-nilov-8297040.jpg";
import { motion } from "framer-motion";

function Sede() {
  return (
    <div className="sede-container container">
      <div className="row">
        <motion.div
          className="col-lg-6 col-12"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img src={Contador} alt="" />
        </motion.div>
        <motion.div
          className="col-lg-6 col-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h4>Estudio contable</h4>
          <p>
            Nos especializamos en brindar servicios contables en asesoría
            contable, asesoría tributaria, asesoría laboral, asesoría
            financiera, asesoría administrativa; así como outsourcing contable a
            micro y pequeñas empresas (MYPES y PYMES)
          </p>

          <Link to="/conocenos">
            <motion.button whileHover={{ scale: 1.1 }}>Conocenos</motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Sede;
