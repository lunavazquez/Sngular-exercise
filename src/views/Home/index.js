import React from "react";
// import MyForm from "../../components/MyForm";
import Image from "react-bootstrap/Image";
import serie from "../../assets/serie.png";
import MyForm from "../../components/MyForm";
import "./home.css";

function Home() {
  return (
    <div>
      <p className="title">Encontrar el términi de la serie n </p>
      <Image src={serie} alt="serie" />
      <MyForm />
    </div>
  );
}

export default Home;
