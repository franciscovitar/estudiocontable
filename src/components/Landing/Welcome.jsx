import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container"
      >
        <h5>Estudio contable</h5>
        <h1>
          Servicios contables para Pymes. Te ayudamos a tomar las mejores
          decisiones
        </h1>
        <Link to="/conocenos">
          <motion.button whileHover={{ scale: 1.1 }}>Conocenos</motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Welcome;
