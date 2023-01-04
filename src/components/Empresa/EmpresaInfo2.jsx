import React from "react";
import { motion } from "framer-motion";

function EmpresaInfo2() {
  return (
    <div className="EmpresaInfo2-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container"
      >
        <div className=" row">
          {/* FIRST */}
          <div className="col-12 col-md-4">
            <h2>¿Qué incluye?</h2>
            <p>
              Antes de fijarse sólo en los{" "}
              <span>costos para constituir una empresa</span>
              debe tener en cuenta todo lo que implica. Esto es lo que incluye
              nuestros servicios, ¡no se nos escapa ningún detalle!{" "}
            </p>
            <ul>
              <li>
                Tramitación para la reserva del nombre en registros públicos.
              </li>
              <li>
                Le asesoramos para que sepa elegir si debe constituirse como SA,
                SAC, SRL o EIRL.
              </li>
              <li>
                Redactamos la minuta de constitución y el estatuto, de acuerdo
                al estándar que maneja el Ministerio de la Producción.
              </li>
              <li>Nos encargamos de tramitar su RUC ante SUNAT.</li>
              <li>Derechos notariales.</li>
              <li>Derechos registrales</li>
              <li>Elaboramos la escritura pública.</li>
              <li>Inscribimos su empresa en registros públicos.</li>
              <li>Tramitamos su clave SOL.</li>
              <li>Activamos su RUC.</li>
            </ul>
          </div>

          {/* SECOND */}

          <div className="col-12 col-md-4">
            <h2>Requisitos</h2>
            <p>
              Tener en cuenta los{" "}
              <span>costos para constituir una empresa </span> es importante,
              pero tampoco puede descuidar los demás requisitos con los que
              deberá cumplir para que su empresa pueda ser formalizada.{" "}
            </p>
            <ul>
              <li>
                Contar con el importe de capital social, no hay mínimo ni
                máximo, pero le recomendamos que sea entre S/1,000 a S/5,000.
                Tener en cuenta que a mayor capital los gastos Notariales y
                Registrales suben.
              </li>
              <li>
                Objeto social. Aquí debe indicar todas las actividades a las que
                se va a dedicar la empresa en el presente y futuro.
              </li>
              <li>
                Contar con el nombre que tendrá su empresa, tenga por lo menos 5
                opciones.
              </li>
              <li>
                Definir si va a ser una sociedad, con dos socios como mínimo
                (SA, SAC) o será sólo Ud. (EIRL). En caso sea una sociedad, le
                recomendamos formar con personas que Ud. ya conoce,
                comprometidas, que comparten un mismo objetivo y visión del
                negocio hacia el futuro.
              </li>
              <li>
                Haber establecido la división porcentual de acciones entre los
                socios.
              </li>
              <li>
                Contar con la dirección fiscal que servirá para su negocio.
              </li>
              <li>
                Tener la fotocopia del DNI de cada socio y sus cónyuges, en caso
                de ser casados.
              </li>
              <li>Proporcionar los datos del gerente general.</li>
            </ul>
          </div>

          {/* THIRD */}

          <div className="col-12 col-md-4">
            <h2>Procedimiento de constitución</h2>
            <p>
              Actualmente existen 3 modalidades para constituir una empresa, a
              continuación te las mencionamos:
            </p>
            <ul>
              <li>
                De forma virtual a través del SID Sunarp con participación de
                una Notaría. En esta modalidad la constitución puede tomar entre
                7 a 15 días hábiles. Para un capital entre mil a cinco mil
                soles, los gastos notariales y registrales pueden ser entre 250
                a 400 soles.
              </li>
              <li>
                De forma virtual a través del SID Sunarp sin participación de la
                Notaría, a través de certificados digitales o firmas digitales.
                En esta modalidad la constitución puede tomar entre 3 a 5 días
                hábiles. Solo está disponible para constituir sociedades tipo
                SACS, no para EIRL. Para un capital entre mil a cinco mil soles,
                los gastos notariales y registrales pueden ser entre 100 a 200
                soles, tener en cuenta que deben contratar un certificado
                digital (CD), el costo mínimo por persona de un CD es de 75
                soles.
              </li>
              <li>
                De forma presencial a través de un abogado y con la
                participación de la Notaría. Se recomienda este tipo para
                constitución de empresas grandes, con un capital mayor a los
                50mil soles. Aquí por lo general se redacta una minuta y un
                estatuto especial, con varios gerentes y diferentes
                responsabilidades para cada uno. En esta modalidad la
                constitución puede tomar entre 15 a 30 días. Los gastos
                notariales y registrales pueden estar entre 800 a 2,000 soles.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default EmpresaInfo2;
