import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="portrait"></div>
      <div>
        <h1>BIANAINE RONDE : COURS DE MUSIQUE A DOMICILE</h1>
        <nav className="container">
          <div></div>
          <ul className="banner_de_navigation">
            <li>
              {" "}
              <a href="#mon_projet">MON PROJET</a>
            </li>
            <li>
              <a href="#ma_methode">MA METHODE</a>
            </li>
            <li>
              <a href="#mes_prestations">MES PRESTATIONS</a>
            </li>
            <li>
              <a href="#mes_tarifs">MES TARIFS</a>
            </li>
            <li>
              <a href="#informations">INFOS PRATIQUES</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Banner;
