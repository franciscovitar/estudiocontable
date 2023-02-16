import React from "react";
import EstudioContableOlivos from "../../../image/pexels-anna-nekrashevich-6801680.jpg";
import QueLaContabilidad from "../../../image/pexels-olia-danilevich-5466820.jpg";
import { motion } from "framer-motion";

function AsesoriaFinancieraInfo() {
  return (
    <div className="asesoria-financiera-info-container container">
      {/* FIRST */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="row"
      >
        <div className="col-lg-6 col-12">
          <h3>Servicio de asesoría financiera para pymes.</h3>
          <p>
            Las empresas que desean mantenerse y prosperar, deben tener la
            capacidad de generar efectivo o equivalente de efectivo, para
            cumplir con sus obligaciones en el corto, mediano y largo plazo. Por
            tal razón, contar con <span>asesoría financiera para pymes</span>{" "}
            les permitirá conocer su situación financiera en el presente, así
            como las herramientas y productos que necesita para cumplir con su
            cadena de pagos.
          </p>
          <p>
            Le ofrecemos a su empresa, un análisis profundo del flujo de caja o
            flujo de efectivo de su negocio para que tenga una clara conciencia
            de cómo se financia, ya sea por capital propio y/o de terceros; así
            como la forma en que genera su propio efectivo y cómo lo distribuye
            (inversión y/o gasto).
          </p>
          <p>
            Gracias a la <span>asesoría financiera</span>, su empresa podrá
            tener mayor seguridad y celeridad en la toma de decisiones y es que
            usted tendrá un mejor conocimiento de sus finanzas. Bajo el amparo
            de la asesoría de profesionales, con el tiempo podrá rentabilizar
            más sus recursos.
          </p>
        </div>
        <div className="col-lg-6 col-12">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src={EstudioContableOlivos}
            alt=""
          />
        </div>
      </motion.div>

      {/* SECOND */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3>¿Por qué contar con el servicio de asesoría financiera?</h3>
        <p>
          Debido a los servicios ofrecidos por nuestro equipo, su empresa
          contará con los recursos que necesita para cumplir con sus
          obligaciones (pago a proveedores y trabajadores). Al conocer su
          situación financiera podrá hacer pronósticos que le permitan reducir
          el riesgo de no contar, en el futuro, con el efectivo necesario para
          estos fines, así se evitará caer en el default.
        </p>
        <p>
          Estas son otras ventajas de la asesoría financiera, para su empresa:
        </p>
        <ul>
          <li>Podrá fijar metas financieras alcanzables.</li>
          <li>
            Podrá desarrollar un plan razonable para alcanzar las metas
            trazadas.
          </li>
          <li>Logrará ser consciente de su estado financiero real.</li>
          <li>
            Disminuirá los costos financieros y maximizará el valor de su
            empresa.
          </li>
          <li>
            Sus procesos contables y financieros serán transparentes lo que
            permitirá que su empresa sea confiable ante el sistema financiero.
          </li>
          <li>
            Su compañía tendrá la información económica necesaria para facilitar
            la toma de decisiones.
          </li>
          <li>
            El servicio de <span>asesoría financiera y contable</span> ayuda a
            la empresas a preparar sus impuestos de manera eficiente, mitigando
            el margen de error.
          </li>
          <li>
            La asesoría financiera también puede permitirle a un negocio conocer
            sus oportunidades de inversión.
          </li>
          <li>
            Gracias a la asesoría financiera es posible facilitar la expansión
            de su corporación en mercados de fácil penetración y mayor
            rentabilidad.
          </li>
          <li>
            Evitará que su empresa incumpla la ley, en cuanto a aspectos
            financieros, contables, tributarios y laborales se refiera.
          </li>
        </ul>
      </motion.div>

      {/* THIRD */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="row"
      >
        <div className="col-lg-6 col-12">
          <h3>Asesoría financiera para para pymes</h3>
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src={QueLaContabilidad}
            alt=""
          />
        </div>
        <div className="col-lg-6 col-12">
          <p>
            Los servicios de nuestro <span>estudio contable</span> no solo se
            concentran en pymes y mypes, sino también en negocios que todavía no
            están constituidos. De esa forma, para estos emprendimientos,
            ofrecemos:
          </p>
          <ul>
            <li>Revisión y/o elaboración de plan de negocio.</li>
            <li>Implementación del plan de negocio.</li>
            <li>Revisión de la idea de negocios.</li>
            <li>
              Revisión de aspectos macroeconómicos y microeconómicos de su
              emprendimiento.
            </li>
            <li>Sondeo de mercado.</li>
            <li>Análisis del modelo de negocio.</li>
            <li>Análisis de la cadena de valor.</li>
            <li>
              Análisis de los recursos y la capacidad, para el éxito de la
              empresa.
            </li>
            <li>Elaboración del planeamiento estratégico.</li>
            <li>
              Creación de planes funcionales de operaciones, marketing y
              recursos humanos.
            </li>
            <li>
              Elaboración del plan financiero, por ejemplo:
              <ul>
                <li>Presupuesto.</li>
                <li>Flujo de caja económico.</li>
                <li>Flujo de Caja Financiero.</li>
                <li>VAN</li>
                <li>TIR</li>
                <li>Análisis de sensibilidad.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <p>
            Ofrecemos asesoría financiera tanto para empresas que inician, como
            para aquellas que ya están consolidadas. Trabajamos de la mano con
            cada cliente para desarrollar planes financieros a la medida de sus
            necesidades. Tenemos más de una década trabajando en la asesoría
            financiera para empresas de gran envergadura, en distintos sectores,
            lo que nos facilita adaptarnos a los requerimientos de cada cliente.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default AsesoriaFinancieraInfo;
