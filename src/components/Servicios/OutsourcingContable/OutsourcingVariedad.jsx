import React from "react";
import { motion } from "framer-motion";
import Icono1 from "../../../image/money_analyze_analysis_data_study_icon_143877.png";
import Icono2 from "../../../image/scalesofthebalancetilts_escalasdelabalanza_4885.png";
import Icono3 from "../../../image/barsgraphicinacircle_80050.png";
import Icono4 from "../../../image/user_84308.png";

function OutsourcingVariedad() {
  return (
    <div className="outsourcing-variedad-container container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="titulo"
      >
        <h1>¿Qué incluye nuestro servicio de outsourcing contable?</h1>
        <p>
          Más de 10 años de experiencia al servicio de su empresa. Equipo
          profesional con vasta trayectoria atendiendo diferentes sectores.
        </p>
      </motion.div>
      <div className="variedades row ">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="variedad-titulos">
            <img src={Icono1} alt="" />
            <h4>Outsourcing contable y financiero</h4>
            <p>
              Podemos encargarnos de la Elaboración de los Estados Financieros
              del negocio (EEFF) que se realizan en cada cierre de mes. Por
              ejemplo:
            </p>
          </div>

          <ul>
            <li>Registro de compras.</li>
            <li>Registro de ventas.</li>
            <li>Libro diario.</li>
            <li>Libro mayor.</li>
            <li>Libro de inventarios y balances.</li>
            <li>Libro de activos fijos.</li>
            <li>Cualquier otro reporte requerido por la gerencia.</li>
            <li>Estado de situación financiera o balance general.</li>
            <li>Estado de resultados o estado de ganancias y pérdidas.</li>
            <li>Estado de flujo efectivo.</li>
            <li>Estado de cambios en el patrimonio neto.</li>
            <li>Notas de los Estados Financieros</li>
          </ul>
        </div>

        <div className="col-12 col-md-6 col-lg-3 ">
          <div className="variedad-titulos">
            <img src={Icono2} alt="" />
            <h4>Outsourcing contable y tributario</h4>
            <p>
              Analizaremos las cuentas contables para identificar incongruencias
              o errores, si los hubiera. Del mismo modo, podemos ayudarle con:
            </p>
          </div>

          <ul>
            <li>
              La presentación y Declaración Jurada Mensual de Impuestos ante
              SUNAT.
            </li>
            <li>El PDT 621.</li>
            <li>La Declaración Anual del Impuesto a la Renta.</li>
            <li>La Declaración Anual de Operaciones con Terceros (DAOT).</li>
            <li>
              La Declaración del impuesto temporal a los activos netos (ITAN)
            </li>
            <li>
              Otras declaraciones tributarias según las necesidades de la
              empresa.
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="variedad-titulos">
            <img src={Icono3} alt="" />
            <h4>Outsourcing contable y administrativo</h4>
            <p>
              Le ofrecemos soporte administrativo en todas sus operaciones; así
              como la administración de cuentas por cobrar, pagar,
              administración de fondos, control y pago de proveedores, etc.{" "}
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="variedad-titulos">
            <img src={Icono4} alt="" />
            <h4>Outsourcing de contabilidad y planilla</h4>
            <p>Puede dejar en nuestras manos aspectos como:</p>
          </div>

          <ul>
            <li>La elaboración y cálculo de la planilla de remuneraciones.</li>
            <li>Elaboración de contratos de trabajo.</li>
            <li>Liquidación de beneficios sociales.</li>
            <li>Cálculo de gratificaciones.</li>
            <li>Cálculo del importe por vacaciones de trabajadores.</li>
            <li>Distribución de utilidades.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OutsourcingVariedad;
