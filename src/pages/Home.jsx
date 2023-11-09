import React from "react";
import Banner from "../components/Banner.jsx";
import Projet from "../components/Projet.jsx";
import Methode from "../components/Methode.jsx";
import Prestations from "../components/Prestations.jsx";
import Tarifs from "../components/Tarifs.jsx";
import Infos from "../components/Infos.jsx";
import Footer from "../components/Footer.jsx";

import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />

      <main>
        <div className="image_deco"></div>
        <div className="corps">
          <Projet />
          <Methode />
          <Prestations />
          <Tarifs />
          <Infos />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
