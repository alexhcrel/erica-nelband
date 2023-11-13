import Description from "./Description.jsx";
import "../styles/home.css";

const Prestations = () => {
  return (
    <section className="mes_prestations" id="mes_prestations">
      <div className="image"></div>
      <div className="presentation" style={{ display: "flex", flexDirection: "column"}}><h1>MES PRESTATIONS</h1>
      <Description />
      </div>
    </section>
  );
};

export default Prestations;
