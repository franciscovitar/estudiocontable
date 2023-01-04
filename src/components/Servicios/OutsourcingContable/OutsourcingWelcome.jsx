import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function OutsourcingWelcome() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="outsourcingwelcome-container "
    >
      <div className="container">
        <h2>Empresa de outsourcing contable</h2>
        <p>
          ¿Necesita el <span>servicio de outsourcing contable</span> ? Existen
          muchas <span>empresas de outsourcing contable</span>, pero nosotros no
          solo le ofrecemos un servicio, nos volvemos su aliado estratégico para
          que pueda concentrarse en el core business de su negocio. ¡Tenemos más
          de 10 años de experiencia trabajando con empresas de diferentes rubros
          y sectores! ¡Nuestra amplia cartera de clientes, nos respalda!
        </p>
        <Link to="/Contacto">
          <motion.button whileHover={{ scale: 1.2 }}>Contáctanos</motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

export default OutsourcingWelcome;
