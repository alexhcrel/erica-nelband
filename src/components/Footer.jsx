import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className = "encadrementFooter">
        <div className="coordonnees">
          <h2>COORDONNEES</h2>
          <p>
            Erica Nelband<br />
          chemin du trou du monde<br />
          34380 Notre-Monsieur-de-Lisbonne<br />
          06********<br />
          b*********@h*******.fr
          </p>
        </div>
        <nav>
          <ul>
          <h2>NAVIGATION</h2>
            <li><a href="#mon_projet">Mon projet</a></li>
            <li><a href="#ma_methode">Ma méthode</a></li>
            <li><a href="#mes_prestations">Mes prestations</a></li>
            <li><a href="#mes_tarifs">Mes tarifs</a></li>
            <li><a href="#infos">Infos pratiques</a></li>
          </ul>
        </nav>
      </div>
        <h3>Site intégralement réalisé, développé et déployé par <a href="https://alerch.fr" target="_blank" rel="noreferrer" className="styleDeMonLien">alerch.fr</a>.</h3>
        <h3>Renseignement et contact via ce <a href="https://alerch.fr/#contact" target="_blank" rel="noreferrer" className="styleDeMonLien">formulaire</a>.</h3>
    </footer>
  );
};

export default Footer;
