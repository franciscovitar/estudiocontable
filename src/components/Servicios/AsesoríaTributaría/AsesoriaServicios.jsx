import React from "react";
import AsesoriaTributaria from "../../../image/pexels-anna-nekrashevich-6801680.jpg";
import AsesoriaFinanciera from "../../../image/pexels-mikhail-nilov-7681746.jpg";
import { motion } from "framer-motion";

function AsesoriaServicios() {
  return (
    <div className="asesoria-servicios-container container">
      {/* First */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="first row"
      >
        <div className="col-lg-6 col-12">
          <h3>Servicio de asesoría tributaria</h3>
          <p>
            Gracias al <span>servicio de asesoría tributaria</span>, podemos
            ayudarle a analizar, establecer e implementar los controles que su
            negocio necesite para cumplir con las normas tributarias del país.
            Nosotros le proporcionaremos las herramientas legales que su negocio
            necesita para laborar de acuerdo con la ley, en asuntos como:
          </p>
          <ul>
            <li>Código tributario.</li>
            <li>Ley de impuesto a la renta.</li>
            <li>Ley de comprobantes de pago.</li>
            <li>Ley del impuesto general de ventas.</li>
            <li>Retenciones.</li>
            <li>Percepciones.</li>
            <li>Detracciones.</li>
            <li>Drawback.</li>
            <li>Libros electrónicos.</li>
            <li>Comprobantes de pagos electrónicos, entre otros.</li>
          </ul>
        </div>
        <div className="col-lg-6 col-12">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src={AsesoriaFinanciera}
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
        className="second"
      >
        <h3>Servicio de asesoría contable y tributaria</h3>
        <p>
          Con el <span>servicio de asesoría contable y tributaria</span> su
          empresa puede aprovechar los <span>beneficios tributarios</span>.
          Estos son incentivos que proporciona el Estado con la finalidad de que
          se alcancen objetivos económicos y sociales en pro del crecimiento y
          desarrollo del territorio.
        </p>
        <p>
          Por ejemplo, existen incentivos en deducciones al Impuesto a la Renta
          para aquellos negocios que contraten personal con discapacidad o que
          inviertan en innovación. En resumen, los incentivos son la suma de
          exoneraciones, deducciones y tratamientos tributarios especiales que
          repercuten en una reducción de las obligaciones tributarias de los
          contribuyentes que califiquen para este beneficio. Conocer si su
          empresa aplica para estos incentivos es un factor clave para reducir
          el pago de tributos, dentro de las normas vigentes.{" "}
        </p>
        <p>
          Contar con <span>asesoría tributaria</span> también evita retrasos y
          errores en la declaración de impuestos que traigan como consecuencia
          sanciones para su compañía. Por ejemplo, multas por declarar cifras o
          datos falsos; el cierre temporal del establecimiento o de las oficinas
          donde se ofrezcan los servicios; suspensión de licencias autorizadas
          por el Estado, entre otras.
        </p>
      </motion.div>

      {/* THIRD */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="third row"
      >
        <div className="col-lg-6 col-12">
          <h3>
            ¿Por qué optar por el servicio de asesoría tributaria para su
            empresa?
          </h3>
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src={AsesoriaTributaria}
            alt=""
          />
        </div>

        <div className="col-lg-6 col-12">
          <p>
            Ofrecemos el servicio de asesoría tributaria con el objetivo de que
            sus declaraciones mensuales y DJ anual no sean observados por SUNAT.
            De la misma forma, con el trabajo de nuestro equipo de contadores
            profesionales, si acaso su negocio fuera fiscalizado, pasaría la
            evaluación sin contratiempos, evitando multas por irregularidades u
            omisiones. Ser un buen contribuyente también trae beneficios
            adicionales para su empresa, entre ellos:
          </p>
          <ul>
            <li>
              Acceder a un cronograma especial para declarar y pagar
              obligaciones mensuales.
            </li>
            <li>
              Que no se efectúen retenciones del Impuesto General de las Ventas.
            </li>
            <li>La posibilidad de fraccionar sus deudas tributarias.</li>
            <li>
              Atención preferencial en solicitudes de devoluciones de saldos a
              favor.
            </li>
          </ul>
        </div>

        <div>
          <p>
            Existen empresas que por cometer infracciones tributarias (o incluso
            delitos, en muchos casos sin saberlo) terminan cerrando o con deudas
            que no pueden saldar. Esto ocurre porque no conocen cómo funcionan
            los tributos en el país o no se actualizan sobre las modificaciones
            que se añaden periódicamente a las normativas vigentes; en
            consecuencia, muchas pymes y mypes terminan cerrando. Su negocio no
            puede permitirse detener su crecimiento, cerrar ni tener sanciones,
            por eso le ofrecemos <span>asesoría tributaria</span> la que
            necesita tanto de forma preventiva como en inspecciones fiscales o
            procesos legales en vía administrativa o judicial.
          </p>
          <p>
            Nuestra empresa de <span>asesoría tributaria </span>
            cuenta con el equipo de <span>contadores profesionales</span> de
            amplia experiencia que usted necesita para encargarse de sus asuntos
            tributarios.
          </p>
          <p>
            Contamos con más de 10 años de trayectoria, trabajando con grandes
            compañías de diferentes sectores empresariales, por lo que ofrecemos
            un servicio acorde de las necesidades de cada cliente.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default AsesoriaServicios;
