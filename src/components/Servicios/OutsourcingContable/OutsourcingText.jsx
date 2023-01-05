import React from "react";
import Estudio from "../../../image/pexels-karolina-grabowska-7681097.jpg";
import { motion } from "framer-motion";

function OutsourcingText() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="outsourcing-text-container container"
    >
      <div className="fila row">
        <div className="imagen col-12 col-lg-6">
          <h2>¿Por qué contratar nuestro servicio de outsourcing contable?</h2>
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src={Estudio}
            alt=""
          />
        </div>
        <div className="col-12 col-lg-6 ">
          <p>
            Nuestra experiencia en el sector nos permite diseñar un plan a la
            medida de cada uno de nuestros clientes. Con nuestra empresa, usted
            puede tercerizar parcial o integralmente los servicios contables;
            por ejemplo:
          </p>
          <ul>
            <li>Actualización y llevado de libros contables.</li>
            <li>Conciliaciones bancarias y arqueos de caja.</li>
            <li>Inventarios de existencias y activos fijos.</li>
            <li>
              Emisión de comprobantes de pago (facturas, boletas, notas de
              crédito, otros).
            </li>
            <li>
              Elaboración de planilla de trabajadores y emisión de boletas de
              pago.
            </li>
            <li>
              Declaración de PDT Plame y declaración de planillas a la AFP.
            </li>
            <li>
              Elaboración de liquidaciones de beneficios sociales a los
              trabajadores.
            </li>
            <li>Elaboración de contratos de trabajo.</li>
            <li>Liquidación y declaración de impuestos.</li>
            <li>Elaboración de Estados Financieros y notas.</li>
            <li>Elaboración de Estados Financieros consolidados.</li>
            <li>
              Elaboración y presentación de la Declaración Jurada Anual del
              impuesto a la renta.
            </li>
            <li>Auditoría y revisión de Estados Financieros.</li>
            <li>Auditoría interna y externa.</li>
            <li>Atención a fiscalizaciones y requerimientos de Sunat.</li>
            <li>Registro de operaciones económicas en software contable.</li>
            <li>
              Pagos de obligaciones (proveedores, servicios, tributos,
              préstamos)
            </li>
            <li>Elaboración de proyectos de negocio.</li>
            <li>Elaboración de presupuestos y flujo de caja proyectado</li>
            <li>Planeamiento tributario.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default OutsourcingText;
