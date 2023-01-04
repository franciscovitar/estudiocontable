import { motion } from "framer-motion";
import React from "react";
import Asesoria from "../../../image/pexels-mikhail-nilov-7681746.jpg";

function OutsourcingText2() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="outsourcing-text2-container container"
    >
      <div className=" row">
        <div className="col-12 col-lg-6">
          <h2>
            ¿Necesita más motivos para confiar en nuestro servicio de
            outsourcing de contabilidad?
          </h2>
          <ul>
            <li>
              No importa si su negocio está iniciando, está consolidado, es una
              micro, pequeña, mediana o gran empresa. Nuestros planes son
              flexibles y se adaptan a sus necesidades.
            </li>
            <li>
              Contará con un equipo de profesionales capacitados y con
              experiencia, por lo que el riesgo de cometer errores en sus
              procesos tributarios, administrativos y contables se minimizará.
            </li>
            <li>
              Reducirá las energías invertidas en sectores no esenciales de su
              negocio, lo que le permitirá enfocarse en sus actividades
              principales y que le generan valor. Le ofrecemos absoluta
              confidencialidad. ¡Su información está en buenas manos!
            </li>
            <li>
              Le ofrecemos absoluta confidencialidad. ¡Su información está en
              buenas manos!
            </li>
            <li>
              Contará con el servicio de outsourcing contable en Perú parcial o
              integral, a un precio asequible y competitivo.
            </li>
            <li>
              Nuestros servicios se adaptan a las necesidades de cada cliente.
              En todos ellos aplicamos los principios y las Normas
              Internacionales de Contabilidad (NIC e IFRS) que son aceptadas en
              territorio peruano.
            </li>
            <li>
              Contará con profesionales en cada campo, sin necesidad de
              incluirlos en su planilla. ¡Ahorrará en sus costos!
            </li>
            <li>
              Nosotros ponemos el equipo y las herramientas tecnológicas de
              vanguardia, para garantizar una buena gestión, usted delega sus
              operaciones de soporte y se enfoca en la gestión propia de su
              negocio, siendo más ágil, acertado y funcional, mejorando la
              rentabilidad de su negocio.
            </li>
            <li>
              Mejorará el control y planificación contable, laboral, financiero
              y tributaria de su empresa.
            </li>
          </ul>
        </div>
        <div className="col-12 col-lg-6">
          <img src={Asesoria} alt="" />
        </div>
      </div>
    </motion.div>
  );
}

export default OutsourcingText2;
