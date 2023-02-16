import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Icono1 from "../../image/barsgraphicinacircle_80050.png";
import Icono2 from "../../image/officeboxsilhouette_89091.png";
import Icono3 from "../../image/hands_handshake_icon_194812.png";
import Icono4 from "../../image/sub_division_icon_153855.png";
import Icono5 from "../../image/business_cash_coin_dollar_finance_money_payment_icon_123244.png";
import Icono6 from "../../image/goal_analytics_graph_chart_increase_grow_up_icon_143870.png";

function Servicios() {
  return (
    <div className="servicios-container  container" id="servicios">
      {/* <a name="servicios"></a> */}
      <div className="texto">
        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0 },
          }}
        >
          Nuestros servicios contables
        </motion.h2>
        <motion.p
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
        >
          Mas de 10 años de experiencia al servicio de su empresa. Equipo
          profesional con vasta trayectoria atendiendo diferentes sectores.
        </motion.p>
      </div>

      <div className="row">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0 },
          }}
          className="col-xs-12 col-md-6 col-xl-4"
        >
          <img src={Icono1} alt="" />
          <h3>Outsourcing Contable</h3>
          <p>
            Brindamos el servicio integral de contabilidad que comprende: libros
            contables, declaración de impuestos, elaboración de estados
            financieros, planilla de sueldos, además de asesoría contable,
            tributaria y laboral.
          </p>
          <Link to="/Outsourcing">
            <motion.button whileHover={{ scale: 1.1 }}>VER MÁS</motion.button>
          </Link>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.1 },
          }}
          className="col-xs-12 col-md-6 col-xl-4"
        >
          <img src={Icono2} alt="" />
          <h3>Asesoría Tributaría</h3>
          <p>
            Ayudamos a que su empresa adopte las normas tributarias con
            exoneraciones e incentivos, así como la planificación de estrategias
            con la finalidad de informar impuestos consistentes al giro y sector
            de cada negocio.
          </p>
          <Link to="/AsesoriaTributaria">
            <motion.button whileHover={{ scale: 1.1 }}>VER MÁS</motion.button>
          </Link>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
          className="col-xs-12 col-md-6 col-xl-4"
        >
          <img src={Icono3} alt="" />
          <h3>Asesoría Laboral</h3>
          <p>
            Para que su negocio adopte regímenes laborales de acuerdo con su
            tamaño. Así mismo, ofrecemos soporte legal sobre contratos de
            trabajo, gratificaciones, vacaciones, CTS y liquidaciones de BBSS.
          </p>
          <Link to="/AsesoriaLaboral">
            <motion.button whileHover={{ scale: 1.1 }}>VER MÁS</motion.button>
          </Link>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          className="col-xs-12 col-md-6 col-xl-4"
        >
          <img src={Icono4} alt="" />

          <h3>Asesoría Contable</h3>
          <p>
            Revisamos e implementamos los Principios de Contabilidad
            Generalmente Aceptados en Perú (Normas Internacionales de
            Información Financiera NIIF).
          </p>
          <Link to="/AsesoriaContable">
            <motion.button whileHover={{ scale: 1.1 }}>VER MÁS</motion.button>
          </Link>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.4 },
          }}
          className="col-xs-12 col-md-6 col-xl-4"
        >
          <img src={Icono5} alt="" />
          <h3>Asesoría Financiera</h3>
          <p>
            Analizamos la capacidad que tiene su empresa para generar efectivo,
            este servicio comprende: flujo de caja económico y financiero, flujo
            de efectivo, análisis de estados financieros.
          </p>
          <Link to="/AsesoriaFinanciera">
            <motion.button whileHover={{ scale: 1.1 }}>VER MÁS</motion.button>
          </Link>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.5 },
          }}
          className="col-xs-12 col-md-6 col-xl-4"
        >
          <img src={Icono6} alt="" />
          <h3>Asesoría Administrativa</h3>
          <p>
            Revisamos y analizamos los procesos administrativo de su empresa,
            identificamos puntos muertos, proponemos y ejecutamos mejoras.
            Maximizamos el uso de los recursos.
          </p>
          <Link to="/AsesoriaAdministrativa">
            <motion.button whileHover={{ scale: 1.1 }}>VER MÁS</motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Servicios;
