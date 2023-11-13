import React, { useState } from "react";
import { loremIpsum } from "lorem-ipsum";

const Description = () => {
  const [maxHeight, setMaxHeight] = useState("200px"); // Valeur initiale
  const [opacityVoirPlus, setOpacityVoirPlus] = useState("1"); // Valeur initiale
  const [opacityVoirMoins, setOpacityVoirMoins] = useState("0"); // Valeur initiale
  const [masquePositionType, setMasquePositionType] = useState("absolute"); //type de positionnement du masque

const toggleMaxHeight = () => {
  setMaxHeight(maxHeight ? null : "200px");
  setOpacityVoirPlus(maxHeight ? 0 : 1);
  setOpacityVoirMoins(maxHeight ? 1 : 0);
  setMasquePositionType(masquePositionType === "absolute" ? "relative" : "absolute");
};

  const loremText = loremIpsum({
    count: 2, // Nombre de paragraphes à générer
    units: "paragraphs", // Unité de texte à générer (paragraphes, mots, phrases, etc.)
    format: "html", // Format du texte généré (peut être 'plain' ou 'html')
  });

  return (
    <div className="description" style={{ maxHeight: maxHeight }}>
      <p dangerouslySetInnerHTML={{ __html: loremText }} />

      <div className="masque" style={{ position: masquePositionType }}>

        <div
          className="voir"
          style={{ opacity: opacityVoirPlus }}
          onClick={toggleMaxHeight}
        >
          Voir Plus
        </div>
        <div
          className="voir"
          style={{ opacity: opacityVoirMoins }}
          onClick={toggleMaxHeight}
        >
          Voir Moins
        </div>
      </div>
    </div>
  );
};

export default Description;
