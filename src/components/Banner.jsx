import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="portrait"></div>
      <div>
        <h1>ERICA NELBAND : COURS DE MUSIQUE A DOMICILE</h1>
        <nav className="navbar__link">
          <a href="#mon_projet">MON PROJET</a>
          <a href="#ma_methode">MA METHODE</a>
          <a href="#mes_prestations">MES PRESTATIONS</a>
          <a href="#mes_tarifs">MES TARIFS</a>
          <a href="#infos">INFOS PRATIQUES</a>
        </nav>
      </div>
    </div>
  );
};

export default Banner;
