import React from "react";
import { loremIpsum } from 'lorem-ipsum';
import "../styles/home.css";

const Methode = () => {
  const loremText = loremIpsum({
    count: 2,        // Nombre de paragraphes à générer
    units: 'paragraphs', // Unité de texte à générer (paragraphes, mots, phrases, etc.)
    format: 'html',  // Format du texte généré (peut être 'plain' ou 'html')
  });

  return (
    <section className="ma_methode">
      <div className="description">
        <h1>MA METHODE</h1>
      <p dangerouslySetInnerHTML={{ __html: loremText }} />
      </div>
      <div className="image"></div>
    </section>
  );
};

export default Methode;
