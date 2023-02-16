import React from "react";
import { motion } from "framer-motion";

function EmpresaInfo2() {
  return (
    <div className="EmpresaInfo2-container">
      <motion.div className="container">
        <div className=" row">
          {/* FIRST */}
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0 },
            }}
            className="col-12 col-md-4"
          >
            <h2>¿Qué incluye?</h2>
            <p>
              Antes de fijarse sólo en los{" "}
              <span>costos para constituir una empresa</span>
              debe tener en cuenta todo lo que implica. Esto es lo que incluye
              nuestros servicios, ¡no se nos escapa ningún detalle!{" "}
            </p>
            <ul>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0 },
                }}
              >
                Tramitación para la reserva del nombre en registros públicos.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.1 },
                }}
              >
                Le asesoramos para que sepa elegir si debe constituirse como SA,
                SAC, SRL o EIRL.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
              >
                Redactamos la minuta de constitución y el estatuto, de acuerdo
                al estándar que maneja el Ministerio de la Producción.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.3 },
                }}
              >
                Nos encargamos de tramitar su RUC ante SUNAT.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
              >
                Derechos notariales.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
              >
                Derechos registrales
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
              >
                Elaboramos la escritura pública.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.7 },
                }}
              >
                Inscribimos su empresa en registros públicos.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.8 },
                }}
              >
                Tramitamos su clave SOL.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.9 },
                }}
              >
                Activamos su RUC.
              </motion.li>
            </ul>
          </motion.div>

          {/* SECOND */}

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            className="col-12 col-md-4"
          >
            <h2>Requisitos</h2>
            <p>
              Tener en cuenta los{" "}
              <span>costos para constituir una empresa </span> es importante,
              pero tampoco puede descuidar los demás requisitos con los que
              deberá cumplir para que su empresa pueda ser formalizada.{" "}
            </p>
            <ul>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0 },
                }}
              >
                Contar con el importe de capital social, no hay mínimo ni
                máximo, pero le recomendamos que sea entre S/1,000 a S/5,000.
                Tener en cuenta que a mayor capital los gastos Notariales y
                Registrales suben.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.1 },
                }}
              >
                Objeto social. Aquí debe indicar todas las actividades a las que
                se va a dedicar la empresa en el presente y futuro.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
              >
                Contar con el nombre que tendrá su empresa, tenga por lo menos 5
                opciones.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.3 },
                }}
              >
                Definir si va a ser una sociedad, con dos socios como mínimo
                (SA, SAC) o será sólo Ud. (EIRL). En caso sea una sociedad, le
                recomendamos formar con personas que Ud. ya conoce,
                comprometidas, que comparten un mismo objetivo y visión del
                negocio hacia el futuro.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
              >
                Haber establecido la división porcentual de acciones entre los
                socios.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
              >
                Contar con la dirección fiscal que servirá para su negocio.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
              >
                Tener la fotocopia del DNI de cada socio y sus cónyuges, en caso
                de ser casados.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.7 },
                }}
              >
                Proporcionar los datos del gerente general.
              </motion.li>
            </ul>
          </motion.div>

          {/* THIRD */}

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.4 },
            }}
            className="col-12 col-md-4"
          >
            <h2>Procedimiento de constitución</h2>
            <p>
              Actualmente existen 3 modalidades para constituir una empresa, a
              continuación te las mencionamos:
            </p>
            <ul>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0 },
                }}
              >
                De forma virtual a través del SID Sunarp con participación de
                una Notaría. En esta modalidad la constitución puede tomar entre
                7 a 15 días hábiles. Para un capital entre mil a cinco mil
                soles, los gastos notariales y registrales pueden ser entre 250
                a 400 soles.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.1 },
                }}
              >
                De forma virtual a través del SID Sunarp sin participación de la
                Notaría, a través de certificados digitales o firmas digitales.
                En esta modalidad la constitución puede tomar entre 3 a 5 días
                hábiles. Solo está disponible para constituir sociedades tipo
                SACS, no para EIRL. Para un capital entre mil a cinco mil soles,
                los gastos notariales y registrales pueden ser entre 100 a 200
                soles, tener en cuenta que deben contratar un certificado
                digital (CD), el costo mínimo por persona de un CD es de 75
                soles.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
              >
                De forma presencial a través de un abogado y con la
                participación de la Notaría. Se recomienda este tipo para
                constitución de empresas grandes, con un capital mayor a los
                50mil soles. Aquí por lo general se redacta una minuta y un
                estatuto especial, con varios gerentes y diferentes
                responsabilidades para cada uno. En esta modalidad la
                constitución puede tomar entre 15 a 30 días. Los gastos
                notariales y registrales pueden estar entre 800 a 2,000 soles.
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default EmpresaInfo2;
