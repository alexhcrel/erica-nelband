import Description from "./Description.jsx";
import "../styles/home.css";

const Projet = () => {
  return (
    <section className="mon_projet" id="mon_projet">
      <div className="image"></div>
      <div className="presentation" style={{ display: "flex", flexDirection: "column" }}><h1>MON PROJET</h1>
      <Description />
      </div>
    </section>
  );
};

export default Projet;
