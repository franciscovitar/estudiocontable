import React from "react";
import { motion } from "framer-motion";

function Contactanos() {
  return (
    <div className="contactanos-container">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1, transition: { duration: 0.5 } }}
        viewport={{ once: true }}
        className="texto"
      >
        <h1>Contáctanos si tienes dudas!</h1>
        <a href="/contacto">
          <motion.button whileHover={{ scale: 1.1 }}>Contacto</motion.button>
        </a>
      </motion.div>
    </div>
  );
}

export default Contactanos;
