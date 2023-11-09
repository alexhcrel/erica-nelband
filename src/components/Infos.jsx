import React from "react";
import { loremIpsum } from 'lorem-ipsum';
import "../styles/home.css";

const Infos = () => {
  const loremText = loremIpsum({
    count: 2,        // Nombre de paragraphes à générer
    units: 'paragraphs', // Unité de texte à générer (paragraphes, mots, phrases, etc.)
    format: 'html',  // Format du texte généré (peut être 'plain' ou 'html')
  });

  return (
    <section className="infos">
        <h1>Info pratiques</h1>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      <p dangerouslySetInnerHTML={{ __html: loremText }} />
    </section>
  );
};

export default Infos;
