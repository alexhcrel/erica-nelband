import Description from "./Description.jsx";
import "../styles/home.css";

const Infos = () => {

  return (
    <section className="infos" id="infos">
      <div className="image"></div>
      <div className="presentation" style={{ display: "flex", flexDirection: "column"}}><h1>INFOS PRATIQUES</h1>
      <Description />
      </div>
    </section>
  );
};

export default Infos;
