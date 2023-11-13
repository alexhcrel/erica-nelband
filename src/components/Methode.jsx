import Description from "./Description.jsx";
import "../styles/home.css";

const Methode = () => {
  return (
    <section className="ma_methode" id="ma_methode">
      <div className="presentation" style={{ display: "flex", flexDirection: "column" }}><h1>MA METHODE</h1>
      <Description />
      </div>
      <div className="image"></div>
    </section>
  );
};

export default Methode;
