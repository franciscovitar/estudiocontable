import React from "react";
import { motion } from "framer-motion";

function AsesoriaContableWelcome() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="AsesoriaContableWelcome-container"
    >
      <div className="container">
        <h3>Asesoría contable</h3>
        <p>
          ¡Concéntrese en las actividades principales de su negocio! ¡Le
          <span> ofrecemos asesoría contable y tributaria</span> de la mano de
          los mejores profesionales!{" "}
        </p>
        <p>
          Con nuestro servicio de <span>asesoría contable</span> todos los
          aspectos contables de su empresa marcharán conforme a las regulaciones
          vigentes. ¡Reduzca errores en declaraciones y pagos y cuente con los
          mejores especialistas contables y con las últimas tecnologías del
          sector, a su servicio!
        </p>
        <a href="/Contacto">
          <motion.button whileHover={{ scale: 1.2 }}>Contáctanos</motion.button>
        </a>
      </div>
    </motion.div>
  );
}

export default AsesoriaContableWelcome;
