import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Contactanos() {
  return (
    <div className="contactanos-container">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="texto"
      >
        <h1>Contáctanos si tienes dudas!</h1>
        <Link to="/conocenos">
          <motion.button whileHover={{ scale: 1.1 }}>Contacto</motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Contactanos;
