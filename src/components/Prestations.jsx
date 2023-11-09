import React from "react";
import { loremIpsum } from 'lorem-ipsum';
import "../styles/home.css";

const Prestations = () => {
  const loremText = loremIpsum({
    count: 2,        // Nombre de paragraphes à générer
    units: 'paragraphs', // Unité de texte à générer (paragraphes, mots, phrases, etc.)
    format: 'html',  // Format du texte généré (peut être 'plain' ou 'html')
  });

  return (
    <section className="mes_prestations">
       <div className="image"></div>
       <div className="description">
        <h1>MES PRESTATIONS</h1>
      <p dangerouslySetInnerHTML={{ __html: loremText }} />
      </div>
    </section>
  );
};

export default Prestations;
