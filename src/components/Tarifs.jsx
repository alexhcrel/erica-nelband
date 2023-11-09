import React from "react";
import { loremIpsum } from 'lorem-ipsum';
import "../styles/home.css";

const Projet = () => {
  const loremText = loremIpsum({
    count: 2,        // Nombre de paragraphes à générer
    units: 'paragraphs', // Unité de texte à générer (paragraphes, mots, phrases, etc.)
    format: 'html',  // Format du texte généré (peut être 'plain' ou 'html')
  });

  return (
    <section className="mes_tarifs">
      <div className="description">
        <h1>Mes tarifs</h1>
      <p dangerouslySetInnerHTML={{ __html: loremText }} />
      </div>
      <div className="image"></div>
    </section>
  );
};

export default Projet;
