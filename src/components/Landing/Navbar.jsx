import React, { useState } from "react";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NavBar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const resProblemBar = () => {
    if (clicked) {
      handleClick();
    }
  };

  return (
    <NavContainer>
      <Link to="/">
        <motion.div whileHover={{ scale: 1.1 }} className="div-logo ">
          <h2 className="arriba">ESTUDIO</h2>
          <h2 className="abajo">CONTABLE</h2>
        </motion.div>
      </Link>

      <div className={`links ${clicked ? "active" : ""}`}>
        <a onClick={resProblemBar} href="/">
          Inicio
        </a>
        <a onClick={resProblemBar} href="/conocenos">
          Nosotros
        </a>
        <a onClick={resProblemBar} href="/#servicios">
          Servicios
        </a>
        <a onClick={resProblemBar} href="/Empresa">
          Constitución de empresa
        </a>
        <a onClick={resProblemBar} href="/Contacto">
          Contacto
        </a>
      </div>
      <div className="burguer">
        <BurguerButton clicked={clicked} handleClick={handleClick} />
      </div>
      <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
    </NavContainer>
  );
}

export default NavBar;

const NavContainer = styled.nav`
  .div-logo {
    text-align: center;
    padding: 10px 0;
  }

  h2 {
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    font-family: "Bebas Neue", cursive;
    font-family: "Open Sans", sans-serif;
    padding: 0px 80px;
    margin: 5px 0 0 0;
    z-index: -1;
    @media (max-width: 580px) {
      padding: 0 40px;
      font-size: 30px;
    }
    @media (max-width: 450px) {
      font-size: 20px;
      padding: 0 20px;
    }
  }
  .arriba {
    margin-bottom: 0;
  }
  .abajo {
    margin-top: 10px;
    margin-bottom: 15px;
    line-height: 0;
    @media (max-width: 450px) {
      margin-bottom: 8px;
    }
  }

  p {
    color: #bbb;
    font-size: 17px;
    pading: 0;
    margin-top: 0;
    @media (max-width: 580px) {
      font-size: 14px;
    }
    @media (max-width: 450px) {
      font-size: 12px;
    }
  }

  background-color: rgba(0, 0, 0, 0.92);
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  a {
    color: #fff;
    text-decoration: none;
    margin-right: 2rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: #fff;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 980px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: #fff;
        display: inline;
      }
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 24vh;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: #fff;
    }
  }

  .burguer {
    @media (min-width: 980px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: rgba(0, 0, 0);
  position: absolute;
  top: -700px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;
  &.active {
    border-radius: 0 0 70% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }
`;
