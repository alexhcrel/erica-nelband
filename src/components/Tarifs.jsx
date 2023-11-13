import Description from "./Description.jsx";
import "../styles/home.css";

const Projet = () => {
  return (
    <section className="mes_tarifs" id="mes_tarifs">
      <div className="presentation" style={{ display: "flex", flexDirection: "column" }}><h1>MES TARIFS</h1>
      <Description />
      </div>
      <div className="image"></div>
    </section>
  );
};

export default Projet;